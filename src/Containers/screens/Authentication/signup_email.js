import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
  SafeAreaView,TouchableOpacity
} from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconEye from 'react-native-vector-icons/FontAwesome';

import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { Button, Dialog, Divider } from '@rneui/base'
// import PhotoUpload from 'react-native-photo-upload'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { addUser } from '@/Store/userSlice'
import { useDispatch } from 'react-redux'

const baseUrl = 'http://44.202.89.70:8989/api/createUser'

const SignupEmail = ({ navigation }) => {
  const [authenticated, setAutheticated] = useState(false)
  const [name, setName] = React.useState('')
  const [photo, setPhoto] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setConfirmpassword] = React.useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const dispatch = useDispatch()

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

  const chooseImage = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    }

    launchImageLibrary(options, response => {
      // console.log('Response = ', response)
      console.log(response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.assets[0].uri }
        setPhoto(source.uri)
        console.log(source)
      }
    })
  }

  const SignUp = async (email, name, photo, password, confirmpassword) => {
    try {
      if (password === confirmpassword) {
        axios
          .post(baseUrl, {
            firstName: name,
            email: email,
            password: password,
            role: 'Educator',
          })
          .then(function (response) {
            console.log(response.data,'******* Done********')
            console.log(response.data)
            navigation.navigate('LoginFirst')
          })
          .catch(function (error) {
            // console.log(error.response.data)
          })
      }
      else {
        alert("Please ensure that the password entered for confirmation matches the original password.")
      }
    } catch (error) {
      console.log(error)
    }
  }

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
            marginLeft: 30,
            fontWeight: '700',
            marginTop: 20,
            width: '90%',
          }}
        >
          Transforming Education anywhere and anytime
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontFamily: 'Roboto',
            marginLeft: 30,
            fontWeight: '400',
            marginTop: 10,
          }}
        >
          Join GRIT Studies
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {photo ? (
            <Pressable
              onPress={() => {
                chooseImage()
              }}
            >
              <Image
                source={{ uri: photo }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
              <Icon
                name="add-a-photo"
                style={{
                  fontSize: 30,
                  color: 'grey',
                  marginLeft: 70,
                  marginTop: -30,
                }}
              />
            </Pressable>
          ) : (
            <Button
              buttonStyle={{
                height: 100,
                width: 100,
                backgroundColor: '#0B774B',
                borderRadius: 50,
                marginTop: 15,
              }}
              onPress={() => {
                chooseImage()
              }}
            >
              <Icon
                name="add-a-photo"
                style={{ fontSize: 30, color: 'white' }}
              />
              Upload Image
            </Button>
          )}
        </View>
        <SafeAreaView marginTop={10}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={txt => {
              setName(txt)
            }}
            placeholderTextColor={'#0B774B'}
            backgroundColor="#F9FFFC"
          />
        </SafeAreaView>
        <SafeAreaView marginTop={10}>
  
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={txt => {
              setEmail(txt)
            }}
            placeholderTextColor={'#0B774B'}
            backgroundColor="#F9FFFC"
          />
        </SafeAreaView>
        <SafeAreaView marginTop={10}>
        <View style={{
              flexDirection: "row",   height: 50,
              marginTop: 15,
              borderWidth: 1,
              color: 'black',
              borderColor: '#CDEFE9',
           
              width: '83%',
              borderRadius: 4,
              alignSelf: 'center',alignItems:"center"
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
              <IconEye name="eye" size={25} style={{marginLeft:10}} color="#0C8A7B"/>
             
              </TouchableOpacity>
            </View>
  
        </SafeAreaView>
        <SafeAreaView marginTop={10}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm Password"
            value={confirmpassword}
            onChangeText={setConfirmpassword}
            placeholderTextColor={'#0B774B'}
            backgroundColor="#F9FFFC"
          />
        </SafeAreaView>
        <Button
          type="solid"
          titleStyle={{ color: 'white', fontSize: 15 }}
          buttonStyle={{
            height: 50,
            width: '83%',
            alignSelf: 'center',

            marginTop: 30,

            backgroundColor: '#0B774B',
            borderRadius: 12,
          }}
          onPress={() => {
            SignUp(email, name, photo, password, confirmpassword)
          }}
        >
          Sign up
        </Button>
        <Text
          style={{
            color: '#0B774B',
            textAlign: 'center',
            marginTop: 10,
            fontSize: 12,
            marginLeft: 20,
            width: 330,
          }}
        >
          By joining, you agree to GRIT Studies{' '}
          <Text style={{ color: '#FF6E15', textAlign: 'center' }}>
            Terms of Service & Privacy Policy
          </Text>
          , as well as to receive occasional emails from us.
        </Text>
        <Divider
          orientation="horizontal"
          color="#CDEFE9"
          width={1}
          style={{ width: '100%', marginTop: 15 }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('LoginFirst')
          }}
        >
          <Text
            style={{
              color: '#0B774B',
              textAlign: 'center',
              marginTop: 15,
              height: 50,
            }}
          >
            Already a member?
            <Text style={{ color: '#FF6E15', textAlign: 'center' }}>
              {' '}
              Sign in
            </Text>
          </Text>
        </Pressable>
      </ScrollView>
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
  input1:{
   height: 45,
   
    color: 'black',
  
    width: '83%',   padding: 10,
 
  },
  input: {
    height: 50,
    marginTop: 15,
    borderWidth: 1,
    color: 'black',
    borderColor: '#CDEFE9',
    padding: 10,
    width: '83%',
    borderRadius: 4,
    alignSelf: 'center',
  },
})

export default SignupEmail
