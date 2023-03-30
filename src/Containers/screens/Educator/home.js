import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
// import { Card } from '@rneui/themed'
import { Card } from 'react-native-shadow-cards'

import { LearnerDetails } from '../../../Constants/Learners'
import { CoursesDetails } from '../../../Constants/Courses'
import LinearGradient from 'react-native-linear-gradient'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'

const EducatorHome = ({ navigation }) => {
  const userName = useSelector(store => store.user.name)
  const userPhoto = useSelector(store => store.user.photo)
  return (
    <View style={styles.responsiveBox}>
      <ScrollView>
        <View style={{ flexDirection: 'row', padding: 10, marginTop: 10 }}>
          <Pressable onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={
              userPhoto
                ? { uri: userPhoto }
                : require('../../../Assets/Images/avatar.jpeg')
            }
            style={{
              width: 55,
              height: 55,
              borderRadius: 100, marginLeft: 20

            }}
          />
          </Pressable>
          <View style={{ marginLeft: 10, width: '70%' }}>
            <Text style={{ color: 'black', fontSize: 14 }}>Hello!</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              {userName}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('StudentSearchResult')
            }}
          >
            <Icon name="search" size={27} color="black" />
          </Pressable>
        </View>

        <View
          style={{
            elevation: 5,
            marginLeft: wp('5%'),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            marginRight: wp('5%'),
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: '#343434',
            }}
          >
            Attendance
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('StudentAttendanceList')
            }}
          >
            <Text
              style={{
                color: '#27BC7F',
                marginTop: 10,
              }}
            >
              View All
            </Text>
          </Pressable>
        </View>
        {/* <ScrollView
      style={{height:100}}
        horizontal
        disableIntervalMomentum={true}
        // snapToInterval={wp('100%')}
      > */}
        <View style={{ width: '100%', height: 80 }}>
          <FlatList
            data={LearnerDetails}
            horizontal={true}
            renderItem={({ item, key }) => (
              // {LearnerDetails.map((items, key) => (
              <View style={{ marginTop: 10 }} key={key}>
                <Image
                  source={item.img}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 100,
                    marginLeft: wp('3%'),
                    marginRight: wp('2%'),
                  }}
                />
              </View>
              // ))}
            )}
          />
        </View>
        {/* </ScrollView> */}
        <View
          style={{
            marginLeft: wp('5%'),

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            marginRight: wp('5%'),
            marginTop: 10,
          }}
        >
          <Text style={{ color: '#343434' }}>Upcoming Sessions</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('UpcomingSessions')
            }}
          >
            <Text style={{ color: '#27BC7F' }}>View all</Text>
          </Pressable>
        </View>

        <LinearGradient
          colors={['#40D095', '#328764']}
          style={styles.linearGradient}
          marginHorizontal={10}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
                  marginLeft: 8,
                  color: '#ffffff',
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
                  marginLeft: 10,
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                }}
              >
                Students Interested 100+
              </Text>
            </View>
          </View>
          <Card
            style={{
              color: '#ffffff',
              borderRadius: 10,
              width: wp('80%'),
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              alignSelf: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="calendar" size={18} style={{ color: 'black' }} />
              <Text style={{ marginLeft: 5, color: 'black', fontSize: 12 }}>
                Monday, 26 Decemeber
              </Text>
              <Icon
                name="time-outline"
                size={18}
                style={{ color: 'black', marginLeft: 5 }}
              />
              <Text style={{ color: 'black', fontSize: 12, marginLeft: 3 }}>
                03:00 - 05:00
              </Text>
            </View>
          </Card>
        </LinearGradient>
        <LinearGradient
          colors={['#52FAB5', '#52FAB5']}
          style={{
            height: 6,
            width: wp('78%'),
            alignSelf: 'center',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
         />
        <LinearGradient
          colors={['#A7FFDB', '#A7FFDB']}
          style={{
            height: 6,
            width: wp('70%'),
            alignSelf: 'center',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
         />

        <View
          style={{
            marginLeft: wp('5%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            marginRight: wp('5%'),
            marginTop: 15,
          }}
        >
          <Text style={{ color: '#343434' }}>Categories</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('HomeCategories1')
            }}
          >
            <Text style={{ color: '#27BC7F' }}>View all</Text>
          </Pressable>
        </View>
        <View style={{ width: '100%', height: 80, marginTop: 13 }}>
          <ScrollView horizontal={true} style={{}}>
            <View style={{ marginLeft: 20 }}>
              <Card style={styles.category}>
                <Icon name="logo-html5" size={25} color="#27BC7F" />
              </Card>
              <Text style={styles.categorytext}>Software</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Card style={styles.category}>
                <FontIcon name="stethoscope" size={25} color="#27BC7F" />
              </Card>
              <Text style={styles.categorytext}>NEET</Text>
            </View>

            <View style={{ marginLeft: 20 }}>
              <Card style={styles.category}>
                <Icon name="bulb-outline" size={25} color="#27BC7F" />
              </Card>
              <Text style={styles.categorytext}>JEE</Text>
            </View>

            <View style={{ marginLeft: 20 }}>
              <Card style={styles.category}>
                <Icon name="cloud-circle" size={25} color="#27BC7F" />
              </Card>
              <Text style={styles.categorytext}>UPSC</Text>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <Card style={styles.category}>
                <Icon name="ios-analytics-outline" size={25} color="#27BC7F" />
              </Card>
              <Text style={styles.categorytext}>Commerce</Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            marginLeft: wp('5%'),

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            marginRight: wp('5%'),
            marginTop: 15,
          }}
        >
          <Text style={{ color: '#343434' }}>Uploaded Videos</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('UploadedVideos')
            }}
          >
            <Text style={{ color: '#27BC7F' }}>View all</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 15 }}>
          <FlatList
            data={CoursesDetails}
            renderItem={({ item, key }) => (
              // {CoursesDetails.map((items, key) => (
              <View key={key}>
                <Card
                  style={{
                    width: '90%',
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    marginTop: 15,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {/* <View style={{ flexDirection: "row",alignItems:"center" ,}}> */}
                  <Image
                    source={item.img}
                    style={{
                      width: 65,
                      height: 65,
                      borderRadius: 10,
                      marginLeft: 10,
                    }}
                   />
                  <View>
                    <Text
                      numberOfLines={1}
                      style={{
                        width: 300,
                        marginLeft: 15,
                        fontSize: 16,
                        top: 5,
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      {item.course_name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 9,
                        marginLeft: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'black',
                        }}
                      >
                        {item.published_by}
                      </Text>

                      <Icon
                        name="time-outline"
                        style={{
                          width: 16,
                          fontSize: 14,
                          color: 'black',
                          marginLeft: 15,
                        }}
                       />
                      <Text style={{ color: 'black' }}>23 Min</Text>
                    </View>
                    {/* <View
                        style={{

                          marginLeft: 15,

                          flexDirection: 'row',

                          alignItems: 'center',

                          marginTop: 10,

                        }}
                      >
                        <Text
                          style={{
                            width: 90,
                            fontSize: 14,
                            marginTop: 9,
                            color: 'black',
                          }}
                        >
                          {item.published_by}
                        </Text>
                        <Icon
                          name="time-outline"
                          style={{
                            width: 90,
                            fontSize: 14,
                            color: 'black',
                          }}
                        >
                          <Text style={{ color: 'black' }}>23 Min</Text>
                        </Icon>
                        <Icon
                          name="heart"
                          style={{
                            width: 90,
                            fontSize: 14,
                            color: 'black',
                          }}
                        >
                          <Text style={{ color: 'black' }}>485 Likes</Text>
                        </Icon>
                      </View> */}
                  </View>
                  {/* </View> */}
                  <Text />
                </Card>
              </View>
            )}
          />
        </View>
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
    paddingRight: 10,
  },
  linearGradient: {
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 150,
    width: wp('90%'),
  },
  responsiveBox: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    height: '99%',
  },
  category: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorytext: {
    textAlign: 'center',
    color: 'black',
    fontSize: 10,
    marginTop: 8,
  },
})

export default EducatorHome
