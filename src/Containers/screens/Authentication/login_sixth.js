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
  SafeAreaView, Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button, Dialog, Divider } from '@rneui/base'

const LoginSixth = ({ navigation }) => {
  var width = Dimensions.get('window').width //full width
  var height = Dimensions.get('window').height //full height
  const [text, onChangeText] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)
  const [confirmPassword, onChangeConfirmPassword] = React.useState(null)
  const [modalvisible, setmodalvisible] = useState(false)
  const okayyy = () => {
    setmodalvisible(true)
    setTimeout(() => {
      navigation.navigate('StudentHome')
      setmodalvisible(false)
    }, 2000)
   

  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 70, }}>

        <View>
          <Image
            source={require('../../../Assets/Images/logo.png')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,

              marginLeft: 30,
            }}
          />
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{
              color: '#267900',
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            GR
            <Text
              style={{
                color: '#FF6E15',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}
            >
              IT
            </Text>
            <Text
              style={{
                color: '#00C5E4',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Roboto',marginLeft:10
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
          width: 250,
          textAlign: 'left',
        }}
      >
        Reset Password
      </Text>
      <Text
        style={{
          color: '#747474',
          fontSize: 14,
          fontFamily: 'Roboto',
          marginLeft: 30,
          fontWeight: '400',
          marginTop: 10,
          width: "82%"
        }}
      >
        Your new password must be different from previously used passwords
      </Text>
      <SafeAreaView marginTop={10}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="New Password"
          keyboardType="password"
          placeholderTextColor={'#747474'}
          backgroundColor="#F9FFFC"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          keyboardType="password"
          placeholderTextColor={'#747474'}
          backgroundColor="#F9FFFC"
        />
        <Text
          style={{
            color: '#747474',
            textAlign: 'left',
            marginTop: 15,
            fontSize: 12,

            width: "80%", alignSelf: "center"
          }}
        >
          8 characters or longer. Combine upper and lowercase letters and
          numbers.
        </Text>
      </SafeAreaView>
      <Button
        type="solid"
        titleStyle={{ color: 'white', fontSize: 15 }}
        buttonStyle={{
          height: 50,
          width: "80%",
          alignContent: 'center',
          marginTop: 40,
          alignSelf: "center",
          backgroundColor: '#0B774B',
          borderRadius: 12,
        }}
        onPress={() => {
          okayyy()
        }}
      >
        Okay
      </Button>

      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '100%', marginTop: "62%" }}
      />
      <Text
        style={{
          color: '#0B774B',
          textAlign: 'center',
          marginTop: 10,
          height: 50,
        }}
      >
        Back to
        <Text style={{ color: '#FF6E15', textAlign: 'center' }}> Sign in</Text>
      </Text>
      {/* <View style={{width:"100%",height:"100%",backgroundColor:"grey"}}> */}

      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalvisible}
        onRequestClose={() => { console.log("Modal has been closed.") }}>


        <View onStartShouldSetResponder={() => setmodalvisible(false)} style={{ width: "100%", height: "60%", backgroundColor: "grey" }}></View>
        <View style={{ width: "100%", height: "40%", backgroundColor: "grey" }}>
          <View style={{ width: "85%", height: "100%", backgroundColor: "white", alignSelf: "center", borderTopRightRadius: 40, borderTopLeftRadius: 40, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require('../../../Assets/tick.png')}
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain"

              }}
            />
            <Text style={{ width: "80%", textAlign: "center", lineHeight: 25, marginTop: 15, color: "#252525", fontSize: 14, fontWeight: "400" }}>
              Your Password Has Been Changed Successfully !!</Text>
            <Text style={{ color: "#0B774B" ,fontWeight:"600",fontSize:20,marginTop:30}}>Perfect</Text>
          </View>
        </View>
      </Modal>
      {/* </View> */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white', width: "100%", height: "100%"
  },
  input: {
    height: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#CDEFE9',
    alignSelf: "center",
    padding: 10,
    width: "80%",
    borderRadius: 4,
  },
})

export default LoginSixth
