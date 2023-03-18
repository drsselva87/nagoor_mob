import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,FlatList
} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Ionicons'
// import { Card, SearchBar } from '@rneui/themed'
import { Card } from 'react-native-shadow-cards';

import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
import NavTab from '../Commons/educator_bottom_tab'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'

const Earnings = ({ navigation }) => {
  
  const DATA = [
    {
      title: 'Payment Credited for Mobile Application Development Course',
    },
    {
      title: 'Payment Credited for Mobile Application Development Course',
    },
    {
      title: 'Payment Credited for Mobile Application Development Course',
    },
    

  ];

  return (
    <ScrollView style={styles.responsiveBox}>
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
            My Earnings
          </Text>
       
      </Card>
      <View style={{ height: hp('79%') }}>
      
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Notifications
          </Text>
          <FlatList
            data={DATA}

            renderItem={({ item, key }) => (
          <View
            style={{flexDirection: 'row', alignItems:"center",width:"100%",  marginTop: 10,}}
          >
           <Image source={require("../../../Assets/hand.png")} style={{width:40,height:40}}></Image>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
              
                marginLeft: 20,
                width: "80%",
              }}
            >
             {item.title}
            </Text>
          </View>
        )
      }
    />
         
      
      </View>
      <NavTab />
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

export default Earnings
