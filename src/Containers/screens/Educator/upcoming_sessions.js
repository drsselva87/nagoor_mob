import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable ,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { Card } from 'react-native-shadow-cards';

import { LearnerDetails } from '../../../Constants/Learners'
import { CoursesDetails } from '../../../Constants/Courses'
import LinearGradient from 'react-native-linear-gradient'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

// import NavTab from './bottomNavTab'

const UpcomingSessions = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.responsiveBox}>
    <Card
      style={{  width:"100%",height:50,borderRadius:5,flexDirection:"row",alignItems:"center"}}
      >
        <Card style={{width:30,marginLeft:10}}>
            <Icon name="chevron-back-outline" size={27} color="black" />
            </Card>
             <Text
            style={{
              color: 'black',
              marginLeft: 15,
           
              fontSize: 16,
            }}
          >
                Upcoming Sessions
          </Text>
       
      </Card>

      <LinearGradient
        colors={['#CDEFE9', '#CDEFE9']}
        style={styles.linearGradient}
        // start={{ x: 0, y: 0.7 }}
       
      >
        <View
          style={{
            flexDirection: 'row',alignItems:"center",marginTop:15
          }}
        >
          <View>
            <Image
              source={require('../../../Assets/Images/course_images/react.jpeg')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 100,
                marginLeft: wp('3%'),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#252525',
                backgroundColor: 'transparent',
              }}
            >
              Advanced Javascript
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#616161',
                backgroundColor: 'transparent',
              }}
            >
              Students Interested 100+
            </Text>
          </View>
        </View>
        <Card
          style={{ color: '#ffffff' ,borderRadius: 10, width: wp('80%'),height:40,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:15,marginBottom:15}}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon name="calendar" size={18} style={{ color: 'black' }} />
            <Text fontSize={12} style={{ paddingLeft: 3, color: '#5E5E5E' }}>
              Monday, 26 Decemeber
            </Text>
            <Icon
              name="time-outline"
              size={18}
              style={{ color: 'black', marginLeft: 10 }}
            />
            <Text fontSize={12} style={{ color: '#5E5E5E' }}>
              03:00 - 05:00
            </Text>
          </View>
        </Card>
      </LinearGradient>
      <LinearGradient
        colors={['#CDEFE9', '#CDEFE9']}
        style={styles.linearGradient}
        // start={{ x: 0, y: 0.7 }}
       
      >
        <View
          style={{
            flexDirection: 'row',alignItems:"center",marginTop:15
          }}
        >
          <View>
            <Image
              source={require('../../../Assets/Images/course_images/react.jpeg')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 100,
                marginLeft: wp('3%'),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#252525',
                backgroundColor: 'transparent',
              }}
            >
              Advanced Javascript
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#616161',
                backgroundColor: 'transparent',
              }}
            >
              Students Interested 100+
            </Text>
          </View>
        </View>
        <Card
          style={{ color: '#ffffff' ,borderRadius: 10, width: wp('80%'),height:40,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:15,marginBottom:15}}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon name="calendar" size={18} style={{ color: 'black' }} />
            <Text fontSize={12} style={{ paddingLeft: 3, color: '#5E5E5E' }}>
              Monday, 26 Decemeber
            </Text>
            <Icon
              name="time-outline"
              size={18}
              style={{ color: 'black', marginLeft: 10 }}
            />
            <Text fontSize={12} style={{ color: '#5E5E5E' }}>
              03:00 - 05:00
            </Text>
          </View>
        </Card>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
    paddingRight: 10,
  },
  linearGradient: {
   
    marginTop: 10,
    borderRadius: 10,
   
    width: wp('90%'),alignSelf:"center"
  },
  responsiveBox: {
    width: wp('100%'),
    backgroundColor: 'white',
    flexDirection: 'column',
    height:"100%"
  },
})

export default UpcomingSessions
