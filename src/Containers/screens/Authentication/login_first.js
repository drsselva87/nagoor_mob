import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable,
  ActivityIndicator,TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { Button, Divider } from '@rneui/base'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { addUser } from '@/Store/userSlice'
import { useDispatch } from 'react-redux'
import Toast from 'react-native-simple-toast';
// import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome';
const baseUrl = 'http://44.202.89.70:8989/api/loginUser'

const LoginFirst = ({ navigation }) => {
  const [authenticated, setAutheticated] = useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const toggleLoading = isLoading => {
    setIsLoading(!isLoading)
  }
  // Set an initializing state whilst Firebase connects
  const [profileImage, setProfileImage] = useState('')

  GoogleSignin.configure({
    webClientId:
      '256200674836-mpsru41t08o89e3ra7sof08s38qf8e5s.apps.googleusercontent.com',
    offlineAccess: true,
  })

  const saveData = (registered_email, name, photo, uid) => {
    firestore()
      .collection('UserData')
      .add({
        email: registered_email,
        name: name,
        photo: photo,
        uid: uid,
      })
      .then(() => {
        console.log('User added')
      })
  }

  // const signOut = async () => {
  //     try {
  //       await GoogleSignin.revokeAccess();
  //       await GoogleSignin.signOut();
  //       setloggedIn(false);
  //       setuserInfo([]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const EmailSignIn = async (email, password) => {
    // try {
    //   if (email !== '' && password !== '') {
    //     toggleLoading()
    //     const res = await auth().signInWithEmailAndPassword(email, password)
    //     console.log('Signed-In')
    //     console.log(res)
    //     dispatch(
    //       addUser({
    //         email: res.user.email,
    //         name: res.user.displayName,
    //         photo: res.user.photoURL,
    //       }),
    //     )
    //     navigation.navigate('Student')
    //   } else {
    //     alert('Please Enter Email and Password to Continue')
    //   }
    // } catch (error) {
    //   console.log(error.code)
    //   toggleLoading()
    //   if (error.code === 'auth/invalid-email') {
    //     alert('Please Enter Valid Email Id')
    //   }
    //   if (error.code === 'auth/user-not-found') {
    //     alert(
    //       'Please Create your account. No valid account found by the entered email',
    //     )
    //   }
    //   if (error.code === 'auth/wrong-password') {
    //     alert(
    //       'Please enter correct password. Update your password if you have forgotten the password.',
    //     )
    //   }
    // }
    if (email == '') {
      Toast.show("Please Enter a Email Id", Toast.SHORT)
    }
    else if (password == '') {
      Toast.show("Please Enter a Password", Toast.SHORT)
    }
    else{
      try {
        axios
          .get(baseUrl + '/' + email + '/' + password)
          .then(function (response) {
            console.log('******* Done********')
            console.log(response.data)
            saveData(
              response.data.email,
              response.data.firstName,
              '',
              response.data.password,
              response.data.role,
            )
            dispatch(
              addUser({
                email: response.data.email,
                name: response.data.firstName,
                photo: null,
                password: response.data.password,
                role: response.data.role,
              }),
            )
            if (response.data.role === 'Student') {
              console.log('respinse going to studenttttttttt')
              navigation.navigate('Student')
            } else {
              console.log('respinse going to educatorrrrrrrrr')
              navigation.navigate('Educator')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    }
   
  }

  const GoogleSignIn = async () => {
    try {
      console.log('STARTING')
      await GoogleSignin.hasPlayServices()
      console.log('STARTING SIGNOUT')
      await GoogleSignin.signOut()
      console.log('SIGNEDOUT')
      const userInfo = await GoogleSignin.signIn()
      console.log('PRINT')
      console.log(userInfo)
      setProfileImage(userInfo.photo)
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      saveData(
        userInfo.user.email,
        userInfo.user.name,
        userInfo.user.photo,
        userInfo.user.id,
      )
      dispatch(
        addUser({
          email: userInfo.user.email,
          name: userInfo.user.name,
          photo: userInfo.user.photo,
        }),
      )
      navigation.navigate('Student')
      return auth().signInWithCredential(googleCredential)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert('Signin in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert('PLAY_SERVICES_NOT_AVAILABLE')
      } else {
        console.log(error)
        alert('Unknown error')
      }
    }
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAutheticated(true)
    }
  })
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
    }
};
  return (
    <View style={styles.container}>
      <View style={{ height: "95%" }}>

        <ScrollView>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 70 }}
          >
            <Image
              source={require('../../../Assets/Images/logo.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                marginLeft: 30,
              }}
            />

            <View style={{ marginLeft: 5 }}>
              <Text
                style={{
                  color: '#267900',
                  fontSize: 30,
                  fontFamily: 'LeagueSpartan-ExtraBold',
                }}
              >
                GR
                <Text
                  style={{
                    color: '#FF6E15',
                    fontSize: 30,
                    fontFamily: 'LeagueSpartan-ExtraBold',
                  }}
                >
                  IT
                </Text>
                <Text
                  style={{
                    color: '#00C5E4',
                    fontSize: 30,
                    fontFamily: 'LeagueSpartan-ExtraBold',
                  }}
                >
                  {' '}
                  Studies
                </Text>
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#0B774B',
              fontSize: 20,
              fontFamily: 'Roboto',
              marginLeft: 30,
              fontWeight: '700',
              marginTop: 20,
              width: '90%',
              lineHeight: 25,
            }}
          >
            Quality learning simplified for anywhere and anytime
          </Text>
          <Text
            style={{
              color: '#252525',
              fontSize: 16,
              fontFamily: 'Roboto',
              marginLeft: 30,
              fontWeight: '400',
              marginTop: 10,
            }}
          >
            Sign in to GRIT Studies account
          </Text>
          <SafeAreaView marginTop={10}>
            <TextInput
              style={styles.input}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Email / Username"
              value={email}
              onChangeText={txt => {
                setEmail(txt)
              }}
              placeholderTextColor={'#0B774B'}
              backgroundColor="#F9FFFC"
            />
        <View style={{
              flexDirection: "row", alignSelf: "center",    height: 50,
              marginTop: 15,
              borderWidth: 1,
              borderColor: '#CDEFE9',
              width: "82%",
              borderRadius: 4,
              alignSelf: "center",alignItems:"center"
            }}>

              <TextInput
                style={styles.input1}
                value={password}
                secureTextEntry={passwordVisibility}
                onChangeText={txt => {
                  setPassword(txt)
                }}
                placeholder="Password"
                keyboardType="password"
                placeholderTextColor={'#0B774B'}
                backgroundColor="#F9FFFC"
              />
           
                          
              <TouchableOpacity  onPress={handlePasswordVisibility}>
              <Icon name="eye" size={25} style={{marginLeft:10}} color="#0C8A7B"/>
              {/* <Image source={require("../../../Assets/eye.png")} style={{ width: 25, height: 25,marginLeft:5 }}></Image> */}
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <Text
            style={{
              color: '#FF6E15',
              fontSize: 14,
              fontFamily: 'Roboto',
              marginLeft: '61%',
              fontWeight: '400',
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('LoginFourth')}
          >
            Forgot password?
          </Text>
          <Button
            type="solid"
            titleStyle={{ color: 'white', fontSize: 15 }}
            buttonStyle={{
              height: 50,
              width: '82%',
              alignContent: 'center',
              margin: 0,
              flex: 1,
              marginTop: 10,
              paddingLeft: 0,

              backgroundColor: '#0B774B',
              borderRadius: 12,
              alignSelf: 'center',
            }}
            onPress={() => {
              EmailSignIn(email, password)
            }}
          >
            Continue
            {isLoading && <ActivityIndicator size="large" color="white" />}
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <View
              style={{ width: '32%', height: 1, backgroundColor: '#CDEFE9' }}
            />
            <Text
              style={{
                color: '#0B774B',
                marginLeft: 15,
              }}
            >
              OR
            </Text>
            <View
              style={{
                width: '32%',
                height: 1,
                backgroundColor: '#CDEFE9',
                marginLeft: 15,
              }}
            />
          </View>
          <View style={{}}>
            <Button
              type="outline"
              icon={
                <Image
                  source={require('../../../Assets/Images/google.jpeg')}
                  style={{ width: 20, height: 20 }}
                />
              }
              titleStyle={{ color: '#0B774B', fontSize: 15, marginLeft: 5 }}
              buttonStyle={styles.buttons}
              onPress={() =>
                GoogleSignIn().then(() => {
                  console.log('Signed In')
                })
              }
            >
              Continue with Google
            </Button>
          </View>
          <View style={{ width: "100%", marginTop: 100 }}>
            <Divider
              orientation="horizontal"
              color="#CDEFE9"
              width={1}
              style={{ width: '100%', marginTop: 25 }}
            />
            <Pressable
              onPress={() => {
                navigation.navigate('SignupEmail')
              }}
            >
              <Text
                style={{
                  color: '#0B774B',
                  textAlign: 'center',
                  marginTop: 20,

                }}
              >
                Not a member yet?
                <Text style={{ color: '#FF6E15', textAlign: 'center', marginLeft: 10 }}>
                  Join now
                </Text>
              </Text>
            </Pressable>

          </View>
        </ScrollView>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  buttons: {
    height: 55,
    width: '82%',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#0B774B',
    alignSelf: 'center',
  },
  input1: {
    height: 50,
    width: "82%",height:45
    // borderRadius: 4,
    // alignSelf: "center"
  },
  input: {
    height: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#CDEFE9',
    padding: 10,
    width: '82%',
    borderRadius: 4,
    alignSelf: 'center',
  },
})

export default LoginFirst
