import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image,StatusBar } from 'react-native'
import { Button } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { color } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'

const EducatorOrStudent = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor="#27BC7F"
        barStyle="dark-content"
      />
   
        <Image
          source={require('../../../Assets/Images/logo.png')}
          style={{ width: 130, height: 130, marginTop: 0 ,resizeMode:"contain"}}
        />
        <Text
          style={{
            marginTop: 0,
            color: '#267900',
            fontSize: 35,
            fontFamily: 'LeagueSpartan-ExtraBold'
          }}
        >
          GR
          <Text
            style={{
              marginTop: 0,
              color: '#FF6E15',
              fontSize: 35,
              fontFamily: 'LeagueSpartan-ExtraBold'
            }}
          >
            IT
          </Text>
          <Text
            style={{
              marginTop: 0,
              paddingLeft: 50,
              color: '#00C5E4',
              fontSize: 35,
              fontFamily: 'LeagueSpartan-ExtraBold'
            }}
          >
            {' '}
            Studies
          </Text>
        </Text>


          
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding_First')}
        style={{width:210,height:50,backgroundColor:"#0B774B",borderRadius:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:15}}>
        <Icon name="school" style={{ color: 'white' }} />
        <Text style={{color:"white",marginLeft:10,fontSize:16,fontWeight:"400"}}>Student</Text>
        </TouchableOpacity>

                  
        <TouchableOpacity  onPress={() => navigation.navigate('Educator')}
        style={{width:210,height:50,backgroundColor:"#0B774B",borderRadius:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:15}}>
      <FontIcon name="chalkboard-teacher" style={{ color: 'white' }} />
        <Text style={{color:"white",marginLeft:10,fontSize:16,fontWeight:"400"}}>Educator</Text>
        </TouchableOpacity>

      
      {/* </View> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
   
    height: "100%",width:"100%",justifyContent:"center",alignItems:"center"
  },
  linearGradient: {
    padding: 10,
    marginLeft: 30,
    borderRadius: 10,
    height: 150,
    width: 352,
  },
  responsiveBox: {
    width: wp('100%'),
    flexDirection: 'column',
  },
})

export default EducatorOrStudent
