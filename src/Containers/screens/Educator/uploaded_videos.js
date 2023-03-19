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

const UploadedVideos = ({ navigation }) => {
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
           Uploaded Videos
          </Text>
       
      </Card>
      <View style={{ height: hp('79%') }}>
     
          {CoursesDetails.map((items, key) => (
            <Card key={key} style={{marginTop:10,alignSelf:"center"}}>
              <View style={{ flexDirection:"row" ,alignItems:"center"}}>
               
                  <Image
                  source={items.img}
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: "7%",
                    borderRadius: 10,
                    marginBottom:10,marginTop:10
                  }}
                />
                <View style={{marginLeft:"5%", marginBottom:10,marginTop:10}}>
                  <Text
                    style={{
                      width: wp('100%'),
                      
                      fontSize: 13,
                      top: 5,
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    {items.course_name}
                  </Text>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Text
                    style={{
                      fontSize: 10,
                      marginTop: 9,
                      color: 'black',
                    }}
                  >
                    {items.published_by}
                  </Text>
                  <Icon
                    name="time-outline"
                    size={18}
                    style={{
                      fontSize: 10,
                      marginTop: 9,
                      color: 'black',
                      marginLeft:10
                    }}
                  >
                  </Icon>

                    <Text
                      fontSize={12}
                      style={{
                        fontSize: 10,
                        marginTop: 9,
                        color: 'black',
                      marginLeft:7
                      }}
                    >
                      23 Min
                    </Text>
                  </View>
               </View>
               
               
              </View>
            </Card>
          ))}
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
    height: "100%",
    flexDirection: 'column',
    backgroundColor: 'white',
  },
})

export default UploadedVideos
