import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Image,
  StatusBar,
  Touchable,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from '@rneui/themed'
import { Card } from 'react-native-shadow-cards'

import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
import { EducatorDetails } from '../../../Constants/Educators'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StudentHome = ({ navigation }) => {
  const userEmail = useSelector(store => store.user.email)
  const userName = useSelector(store => store.user.name)
  const userPhoto = useSelector(store => store.user.photo)
  const DATA = [
    {
      title: 'TNPSC -( GROUP 2, 2A & 4)',
    },

    {
      title: 'Human Resource Management',
    },
    {
      title: 'JEE Main & Advance ',
    },
    {
      title: 'Computer Management Course ',
    },

    {
      title: 'Front End Development Course',
    },
    {
      title: 'Backend Development Course',
    },
    {
      title: 'NEET (Undergraduate)',
    },
    {
      title: 'Mobile Apps React Native (Android & iOS)',
    },
    {
      title: 'Corporate English Communication',
    },
    {
      title: 'Python Course',
    },
  ]


  return (
    <ScrollView style={styles.responsiveBox}>
      <StatusBar backgroundColor="#27BC7F" barStyle="dark-content" />

      <View
        style={{
          backgroundColor: '#27BC7F',
          height: 150,
          justifyContent: 'center',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={
              userPhoto
                ? { uri: userPhoto }
                : require('../../../Assets/Images/avatar.jpeg')
            }
            style={{
              width: 55,
              height: 55,
              borderRadius: 100,
              marginLeft: 20,
            }}
          />

          <Text
            style={{
              color: 'white',
              fontSize: 14,
              lineHeight: 22,
              marginLeft: 10,
            }}
          >
            Hello!
            {'\n'}
            <Text
              style={{
                color: '#0a5943',
                marginLeft: wp('20%'),
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              {userName}
            </Text>
          </Text>
          <Card
            style={{
              padding: 0,
              width: 30,
              height: 30,
              borderRadius: 10,
              position: 'absolute',
              right: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
            >
              <Icon
                name="notifications-outline"
                style={{ color: 'black' }}
                size={27}
              />
            </TouchableOpacity>
          </Card>
        </View>

        {/* <SearchBar
          placeholder="Looking for a course?"
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
            width: wp('82%'),
            height: 37,
            marginTop: 20,
            marginLeft: 20,
            borderWidth: 0,
          }}
          inputContainerStyle={{ height: 25, width: wp('80%') }}
        /> */}

        <TouchableOpacity
          onPress={() => navigation.navigate('HomeSearchResult')}
          style={{
            alignItems: 'center',
            width: '80%',
            height: 40,
            backgroundColor: '#DCFFF1',
            alignSelf: 'center', flexDirection: 'row', marginTop: 20, borderRadius: 5,
          }}
        >
          <Image
            source={require('../../../Assets/search.png')}
            style={{ width: 15, height: 15, marginLeft: 10 }}
           />
          <Text style={{ color: '#0B774B', fontSize: 14, marginLeft: 15 }}>Looking for a course?</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: '#343434',
          marginTop: 20,
          marginLeft: wp('5%'),
          fontWeight: '500',
        }}
      >
        Continue Learning
      </Text>
      <Card
        style={{
          width: wp('85%'),
          height: 100,
          borderRadius: 10,
          paddingLeft: wp('5%'),
          backgroundColor: '#96F2D4',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 15,
        }}
      >
        <Text marginLeft={20} style={{ color: '#00301C', fontWeight: '500' }}>
          Grit Studies
        </Text>
        <Text
          marginLeft={20}
          style={{ color: '#00301C', fontWeight: 'bold', top: 5 }}
        >
          Computer Management Course
        </Text>
        <Progress.Bar
          progress={0.4}
          width={wp('70%')}
          color="#FF6E15"
          marginTop={20}
          backgroundColor="#FFE1CF"
        />
      </Card>
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
        <Text style={{ color: '#343434', marginTop: 20, fontWeight: '500' }}>Top Categories</Text>
        <Text
          style={{
            color: 'orange',
          }}
          onPress={() => navigation.navigate('HomeCategories')}
        >
          See all
        </Text>
      </View>
      <View flexDirection="row" flexWrap="wrap" marginTop={7}>
        {DATA.map((item, key) => (
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 0.8,
                borderColor: '#0B774B',
                borderRadius: 8,
                marginLeft: 5,
                marginTop: 7,
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  color: '#0B774B',
                  fontSize: 11,
                  margin: 5,
                  fontWeight: '500',
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* <ScrollView horizontal style={{ marginTop: 10 }}>
        <View>
          <Button
            type="outline"
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              alignContent: 'center',
              margin: 0,
              flex: 1,
              marginTop: 5,
              paddingLeft: 0,
              marginLeft: 20,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            NEET and JEE coaching
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              marginLeft: 10,
              marginTop: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            UPSC AND TNPSC
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              marginLeft: 10,
              marginTop: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            LEADERSHIP
          </Button>
        </View>
      </ScrollView>
      <ScrollView horizontal>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              marginLeft: 20,
              marginTop: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            IT SOFTWARE COURSES
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              alignContent: 'center',
              margin: 5,
              flex: 1,
              paddingLeft: 0,
              marginLeft: 10,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            BANK COACHING
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              margin: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            DevOps and software engineering
          </Button>
        </View>
      </ScrollView> */}
      <View
        style={{
          elevation: 5,
          marginLeft: wp('5%'),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          marginRight: wp('5%'),
          marginTop: 5,
        }}
      >
        <Text style={{ color: 'black', fontWeight: '500' }}>Recommended Course For You</Text>
        <Pressable
          onPress={() => navigation.navigate('Recommendedcourse')}
          style={{ color: 'orange', marginTop: 10 }}>
          <Text style={{ color: 'orange' }}>
            See all
          </Text>
        </Pressable>
      </View>

      <View style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}>
        <FlatList
          data={CoursesDetails}
          horizontal={true}
          renderItem={({ item, key }) => (
            <View key={key}>
              <Card
                style={{
                  width: 200,
                  borderRadius: 10,
                  backgroundColor: '#96F2D4',
                  padding: 0,
                  marginLeft: 5,
                  flexDirection: 'row',
                }}
              >
                <Image
                  source={item.img}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    marginLeft: 0,
                    padding: 0,
                  }}
                 />
                <View>
                  <Text
                    numberOfLines={3}
                    style={{
                      width: 90,
                      marginLeft: 10,
                      fontSize: 13,
                      top: 5,
                      fontWeight: 'bold',
                      color: 'black',
                      lineHeight: 17,
                    }}
                  >
                    {item.course_name}
                    {'\n'}
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 10,

                        color: 'black',
                        fontWeight: '400',
                      }}
                    >
                      {item.published_by}
                    </Text>
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',

                      marginLeft: 0,
                    }}
                  >
                    {item.rating.map((item, key) => (
                      <Icon
                        key={key}
                        name="star"
                        style={{
                          marginLeft: 10,
                          marginTop: 15,
                          color: '#FFC107',
                        }}
                      />
                    ))}
                  </View>
                </View>
              </Card>
            </View>
          )}
        />
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
            marginTop: 20,
            fontWeight: '500',
          }}
        >
          Our Best Instructors
        </Text>
        <Pressable
          style={{
            color: 'orange',
            marginTop: 20,
            paddingLeft: wp('28%'),
          }}
          onPress={() => navigation.navigate('Instructor')}
        >
          <Text
            style={{
              color: 'orange',
            }}
          >
            See all
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        disableIntervalMomentum={true}
        snapToInterval={wp('100%')}
      >
        {EducatorDetails.map((items, key) => (
          <View
            style={{
              marginTop: 10,
              alignItems: 'center',
              marginLeft: 8,
              marginRight: 8,
            }}
            key={key}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
              }}
              source={items.img}
            ></Image>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 13,
                  top: 5,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                {items.name}
              </Text>
              <Text
                style={{
                  fontSize: 9,

                  textAlign: 'center',
                  color: 'grey',
                  width: 80,
                  marginTop: 8,
                }}
              >
                {items.info}
              </Text>
              <View
                style={{
                  flexDirection: 'row',

                  marginTop: 5,
                  alignSelf: 'center',

                }}
              >
                {items.rating.map((item, key) => (
                  <Icon
                    key={key}
                    name="star"
                    style={{ marginLeft: 0, color: '#FFC107' }}
                  />
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
  },
})

export default StudentHome
