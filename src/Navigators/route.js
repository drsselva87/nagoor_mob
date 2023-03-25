import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import OnboardingFirst from '@/Containers/screens/Onboarding/onboarding_first'
import OnboardingSecond from '@/Containers/screens/Onboarding/onboarding_second'
import OnboardingThird from '@/Containers/screens/Onboarding/onboarding_third'
import OnboardingFourth from '@/Containers/screens/Onboarding/onboarding_fourth'
import LoginFirst from '@/Containers/screens/Authentication/login_first'
import LoginSecond from '@/Containers/screens/Authentication/login_second'
import LoginThird from '@/Containers/screens/Authentication/login_third'
import SignupEmail from '@/Containers/screens/Authentication/signup_email'
import LoginFourth from '@/Containers/screens/Authentication/login_fourth'
import LoginFifth from '@/Containers/screens/Authentication/login_fifth'
import LoginSixth from '@/Containers/screens/Authentication/login_sixth'
import Splash from '@/Containers/screens/Commons/splash'
import StudentHome from '@/Containers/screens/Student/home'
import Categorieslist from '@/Containers/screens/Student/Categorieslist'
import HomeSearch1 from '@/Containers/screens/Educator/home_search'

import HomeCategories from '@/Containers/screens/Student/home_categories'
import HomeCategories1 from '@/Containers/screens/Educator/home_categories'
import HomeVideoPlay from '@/Containers/screens/Student/home_video_play'
import MyLearning from '@/Containers/screens/Student/my_learning'
import HomeSearchResult from '../Containers/screens/Student/home_search_result'
import Wishlist from '@/Containers/screens/Student/wishlist'
import EducatorHome from '@/Containers/screens/Educator/home'
import StudentAttendance from '@/Containers/screens/Educator/student_attendance'
import UpcomingSessions from '@/Containers/screens/Educator/upcoming_sessions'
import UploadContent from '@/Containers/screens/Educator/upload_content'
import Dashboard from '@/Containers/screens/Educator/dashboard'
import StudentDetails from '@/Containers/screens/Educator/student_details'
import StudentSearchResult from '@/Containers/screens/Educator/student_search_result'
// import Group from '@/Containers/screens/Commons/group'
import EducatorOrStudent from '@/Containers/screens/EducatorOrStudent/educator_or_student'
import Payment from '@/Containers/screens/Payment/payment'
import UploadedVideos from '@/Containers/screens/Educator/uploaded_videos'
import Notifications from '@/Containers/screens/Student/notifications'
import Notifications1 from '@/Containers/screens/Educator/notifications'
import Earnings from '@/Containers/screens/Educator/earnings'
import EducatorProfile from '@/Containers/screens/Educator/educator_profile'
import Educator from '@/Containers/screens/Educator/educator'
import Student from '@/Containers/screens/Student/student'
import Navigator from '@/Containers/screens/Commons/educator_bottom_tab'
import Navigator1 from '../Containers/screens/Commons/student_bottom_tab'
import EducatorProfileEdit from '@/Containers/screens/Educator/Profile'
import StudentAttendanceList from '@/Containers/screens/Educator/studentattendancelist'

const screens = {
  Splash: {
    screen: Splash,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  EducatorOrStudent: {
    screen: EducatorOrStudent,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  StudentAttendanceList: {
    screen: StudentAttendanceList,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_First: {
    screen: OnboardingFirst,
    backgroundColor: 'transparent',
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_Second: {
    screen: OnboardingSecond,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_Third: {
    screen: OnboardingThird,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Onboarding_Fourth: {
    screen: OnboardingFourth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  EducatorProfileEdit: {
    screen: EducatorProfileEdit,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginFirst: {
    screen: LoginFirst,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginSecond: {
    screen: LoginSecond,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginThird: {
    screen: LoginThird,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  SignupEmail: {
    screen: SignupEmail,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginFourth: {
    screen: LoginFourth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginFifth: {
    screen: LoginFifth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  LoginSixth: {
    screen: LoginSixth,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  EducatorHome: {
    screen: EducatorHome,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  StudentSearchResult: {
    screen: StudentSearchResult,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  StudentAttendance: {
    screen: StudentAttendance,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Student: {
    screen: Navigator1,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  StudentHome: {
    screen: StudentHome,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  StudentDetails: {
    screen: StudentDetails,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  UpcomingSessions: {
    screen: UpcomingSessions,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  UploadedVideos: {
    screen: UploadedVideos,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  UploadContent: {
    screen: UploadContent,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Notifications: {
    screen: Notifications1,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Earnings: {
    screen: Earnings,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Educator: {
    screen: Navigator,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  EducatorProfile: {
    screen: EducatorProfile,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Categorieslist: {
    screen: Categorieslist,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeSearch1: {
    screen: HomeSearch1,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeSearchResult: {
    screen: HomeSearchResult,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeCategories: {
    screen: HomeCategories,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeCategories1: {
    screen: HomeCategories1,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  HomeVideoPlay: {
    screen: HomeVideoPlay,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  MyLearning: {
    screen: MyLearning,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
  Payment: {
    screen: Payment,
    navigationOptions: {
      headerShown: false,
      backgroundColor: 'white',
    },
  },
}
const Navigation = createStackNavigator(screens)

export default createAppContainer(Navigation)
