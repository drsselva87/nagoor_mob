import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
// import NavTab from '../Commons/bottom_tab'
import { Card } from 'react-native-shadow-cards';

import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { TextInput } from 'react-native-gesture-handler'

const StudentSearchResult = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
      <Card style={{ width: wp('100%'), height: 50, borderRadius: 5 }}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Card style={{
            borderRadius: 10,
            marginTop: hp('2%'),
            width: 30, marginLeft: 10
          }}
          >
            <Icon name="chevron-back-outline" size={27} color="black" />
          </Card>
          {/* <Text
            style={{
              color: 'black',
              marginLeft: wp('1%'),
              marginTop: hp('3%'),
              fontSize: 16,
            }}
          >
            Student Details
          </Text> */}
        </View>
      </Card>
      <View style={{ height: hp('87%'), backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", width: "90%", backgroundColor: "#DCFFF1", alignItems: "center", borderRadius: 5, alignSelf: "center", marginTop: 10 }}>
          <Image
            source={require('../../../Assets/search.png')}
            style={{
              width: 18,
              height: 18, marginLeft: 15

            }}
          />
          <TextInput placeholder="Search"
            placeholderTextColor="#0B774B"
            style={{ width: "90%", height: 50, marginLeft: 15 }}>

          </TextInput>
        </View>
        {/* <SearchBar
          placeholder="Search"
          platform="android"
          lightTheme={true}
          round={true}
          placeholderTextColor="#0B774B"
          cancelIcon={{ color: '#0B774B' }}
          clearIcon={{ color: '#0B774B', disabled: false }}
          searchIcon={{ height: 30, color: '#0B774B' }}
          containerStyle={{
            color: '#0B774B',
            backgroundColor: '#DCFFF1',
            borderRadius: 5,
            width: wp('80%'),
            height: 50,
            marginLeft: wp('5%'),
            marginTop: hp('1%'),
            borderWidth: 0,
          }}
          inputContainerStyle={{ width: 290,alignItems:"center" }}
        /> */}
        {/* <ScrollView
          vertical
          disableIntervalMomentum={true}
          snapToInterval={wp('100%')}
          marginLeft={20}
        >
          {CoursesDetails.map((items, key) => ( */}
          <View style={{height:"88%"}}>
        <FlatList
          data={CoursesDetails}

          renderItem={({ item, key }) => (
            <View key={key} style={{ marginTop: 3, alignSelf:"center",width:"95%",marginBottom:5}}>
              <Card style={{ flexDirection: "row",alignItems:"center",width:"100%" ,marginTop:5 }}>
                <Image
                  source={item.img}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50
                  }}>
                </Image>
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      marginLeft: wp('2%'),
                      fontWeight: 'bold',marginTop:5
                    }}
                  >
                    {item.course_name}
                  </Text>
                  <Text
                    style={{
                      // width: wp('100%'),
                      marginLeft: wp('2%'),
                      fontSize: 10,
                      color: "black",marginTop:5
                    }}
                  >
                    {item.published_by}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginTop:5
                    }}
                  >
                    {item.rating.map((item, key) => (
                      <Icon
                        key={key}
                        name="star"
                        style={{
                          marginLeft: wp('2%'),
                          color: '#FFC107',
                        }}
                      />
                    ))}
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      marginLeft: wp('2%'),
                      fontWeight: 'bold',marginTop:5
                    }}
                  >
                    $ 125
                  </Text>
                </View>
              </Card>
           
            </View>
            
          )
          }
        />
</View>
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

export default StudentSearchResult
