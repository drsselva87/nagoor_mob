import React, { Profiler } from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import StudentHome from '../Student/home'
import MyLearning from '../Student/my_learning'
import Notifications from '../Student/notifications'
import StudentProfile from '../Student/student_profile'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation'

const NavTab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: StudentHome,
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
    MyLearning: {
      screen: MyLearning,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Icon
            name="md-play"
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
    StudentProfile: {
      screen: StudentProfile,
      navigationOptions: {
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
const Navigator1 = createAppContainer(NavTab)
export default Navigator1
