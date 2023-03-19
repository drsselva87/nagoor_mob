import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';

import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
import NavTab from '../Commons/educator_bottom_tab'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const StudentAttendance = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
            <Card
      style={{  width:"100%",height:50,borderRadius:5,flexDirection:"row",alignItems:"center"}}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}> 
        <Card style={{width:30,marginLeft:10}}>
            <Icon name="chevron-back-outline" size={27} color="black" />
            </Card>
            </TouchableOpacity>

             <Text
            style={{
              color: 'black',
              marginLeft: 15,
           
              fontSize: 16,
            }}
          >
          Student Attendance
          </Text>
       
      </Card>
      <View
        style={{
          height: hp('79%'),
          marginTop: 20,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            width: wp('100%'),
          }}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image
              source={require('../../../Assets/Images/tutor_images/arul.jpeg')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                top: 5,
                fontWeight: 'bold',
              }}
            >
              Arul Jeyaraj
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginTop: 9,
                marginBottom:10
              }}
            >
              Mobile App Development
            </Text>
          </View>
        </Card>
        <Card
          style={{
            borderRadius: 5,
            width: wp('85%'),marginTop:15
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',marginTop:10
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              Payment Status:
            </Text>
            <View style={{borderWidth:1,borderColor:"#27BC7F"}}>
            <Text
              style={{
                color: 'green',
                fontSize: 16,
                fontWeight: 'bold',marginRight:10,marginTop:5,marginBottom:5,marginLeft: 10,
              }}
            >
              Paid
            </Text>
            </View>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginTop: 10,marginLeft:10
            }}
          >
            Leaves Taken
          </Text>
          <View style={{ flexDirection: 'column', marginTop: 10,marginLeft:10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  top: 5,
                }}
              >
                January
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  top: 5,right:10
                }}
              >
                5 Days
              </Text>
            </View>
            <Progress.Bar
              progress={0.4}
              width={wp('70%')}
              color="#FF6E15"
              marginTop={20}
              backgroundColor="#FFE1CF"
            />
          </View>
          <View style={{ flexDirection: 'column', marginTop: 10,marginLeft:10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  top: 5,
                }}
              >
                February
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  top: 5,right:10
                }}
              >
                5 Days
              </Text>
            </View>
            <Progress.Bar
              progress={0.4}
              width={wp('70%')}
              color="#FF6E15"
              marginTop={20}
              backgroundColor="#FFE1CF"
            />
          </View>
          <View style={{ flexDirection: 'column', marginTop: 10,marginLeft:10,marginBottom:15 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  top: 5,
                }}
              >
                March
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  top: 5,right:10
                }}
              >
                10 Days
              </Text>
            </View>
            <Progress.Bar
              progress={0.4}
              width={wp('70%')}
              color="#FF6E15"
              marginTop={20}
              backgroundColor="#FFE1CF"
            />
          </View>
        </Card>
      </View>
      {/* <NavTab /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('17%'),
    flexDirection: 'column',
    backgroundColor: 'white',
  },
})

export default StudentAttendance
