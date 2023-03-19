import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Navigator1 from '../Commons/student_bottom_tab'
import { createAppContainer } from 'react-navigation'
// import NavTab from './bottomNavTab'

// const Navigator = createAppContainer(NavTab)

const Student = ({ navigation }) => {
  return <Navigator1 />
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
    width: wp('100%'),
    backgroundColor: 'white',
    flexDirection: 'column',
  },
})

export default Student
