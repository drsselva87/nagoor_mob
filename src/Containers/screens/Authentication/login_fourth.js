import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button, Dialog, Divider } from '@rneui/base'

const LoginFourth = ({ navigation }) => {
  var width = Dimensions.get('window').width //full width
  var height = Dimensions.get('window').height //full height
  const [text, onChangeText] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)
  const [confirmPassword, onChangeConfirmPassword] = React.useState(null)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <ScrollView horizontal> */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 70, }}>
        <Image
          source={require('../../../Assets/Images/logo.png')}
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,

            marginLeft: 30,
          }}
        ></Image>
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
                fontFamily: 'Roboto',
              }}
            >
                 {' '}
              Studies
            </Text>
          </Text>
        </View>
      </View>

      {/* </ScrollView> */}
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
          color: '#0B774B',
          fontSize: 14,
          fontFamily: 'Roboto',
          marginLeft: 30,
          width: "85%",
          fontWeight: '400',
          marginTop: 20,
        }}
      >
        Please enter your email address or Mobile number and we'll send you a
        OTP to reset your password.
      </Text>
      <SafeAreaView marginTop={50}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email / Mobile number"
          keyboardType="number"
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
      </SafeAreaView>
      <Button
        type="solid"
        titleStyle={{ color: 'white', fontSize: 15 }}
        buttonStyle={{
          height: 50,
          width: "80%",
          alignContent: 'center',
          alignSelf: "center",

          marginTop: 50,


          backgroundColor: '#0B774B',
          borderRadius: 12,
        }}
        onPress={() => navigation.navigate('LoginFifth')}
      >
        Submit
      </Button>

      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '100%', marginTop: "75%" }}
      />
      <Text
        style={{
          color: '#0B774B',
          textAlign: 'center',
          marginTop: 10,
          height: 80,
        }}
      >
        Back to
        <Text style={{ color: '#FF6E15', textAlign: 'center' }}> Sign in</Text>
      </Text>
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

export default LoginFourth
