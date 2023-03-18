import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import EducatorHome from '../Educator/home'
import EducatorProfile from '../Educator/educator_profile'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import UploadContent from '../Educator/upload_content'
import Notifications from '../Educator/notifications'
import StudentAttendance from '../Educator/student_attendance'
import { createAppContainer } from 'react-navigation'


const NavTab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: EducatorHome,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Icon
            name="home"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.focused ? '#27BC7F' : tabInfo.tintColor}
          />
        ),
      },
    },
    Upload: {
      screen: UploadContent,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Icon
            name="md-share-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.focused ? '#27BC7F' : tabInfo.tintColor}
          />
        ),
      },
    },
    Notification: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Icon
            name="notifications"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.focused ? '#27BC7F' : tabInfo.tintColor}
          />
        ),
      },
    },
    User: {
      screen: EducatorProfile,
      navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon: tabInfo => (
          <Icon
            name="person"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.focused ? '#27BC7F' : tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#FFFFFF' },
  },
)

const Navigator = createAppContainer(NavTab)
export default Navigator
