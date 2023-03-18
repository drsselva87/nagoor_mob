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
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
// import NavTab from '../Commons/bottom_tab'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'

const EducatorProfile = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        height={hp('10%')}
        borderRadius={5}
        containerStyle={{ margin: 0, padding: 0 }}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Card
            height={hp('5%')}
            borderRadius={10}
            containerStyle={{
              padding: 0,
              marginTop: hp('2%'),
              left: 0,
              width: 30,
            }}
          >
            <Icon name="chevron-back-outline" size={27} color="black" />
          </Card>
          <Text
            style={{
              color: 'black',
              marginLeft: wp('1%'),
              marginTop: hp('3%'),
              fontSize: 16,
            }}
          >
            Tutor Profile
          </Text>
        </View>
      </Card>
      <View style={{ height: hp('79%') }}>
        <ScrollView
          vertical
          disableIntervalMomentum={true}
          snapToInterval={wp('100%')}
        >
          <Card
            containerStyle={{
              height: 200,
              backgroundColor: '#CDEFE9',
              width: wp('100%'),
              margin: 0,
            }}
          >
            <Image
              source={require('../../../Assets/Images/tutor_images/arul.jpeg')}
              style={{ width: 60, height: 60, borderRadius: 50 }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginTop: 10,
                fontFamily: 'bold',
              }}
            >
              Arul Jeyaraj
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 14,
                marginTop: 10,
                fontFamily: 'bold',
              }}
            >
              sharon@gmail.com
              <MaterialIcon
                name="account-edit"
                size={20}
                color="black"
                marginLeft={10}
              />
            </Text>
          </Card>
          <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
            <Icon name="ios-wallet-outline" size={20} color="black" />
            <Text style={{ color: 'black', marginLeft: 10 }}>My Earnings</Text>
          </View>
          <Divider />
          <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
            <Icon name="call-outline" size={20} color="black" />
            <Text style={{ color: 'black', marginLeft: 10 }}>Contact us</Text>
          </View>
          <Divider />
          <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
            <Icon name="log-out-outline" size={20} color="black" />
            <Text style={{ color: 'black', marginLeft: 10 }}>Log out</Text>
          </View>
          <Divider />
        </ScrollView>
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

export default EducatorProfile
