import * as React from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Upload from './Pages/Upload';


const Stack = createStackNavigator();
function Screens(props) {
    return( 
    <NavigationContainer>
      <Stack.Navigator  >
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
      <Stack.Screen name="Notification" component={Notification} options={{headerShown:false}}  />
      <Stack.Screen name="Upload" component={Upload} options={{headerShown:false}}  />

      </Stack.Navigator>

    </NavigationContainer>
    )
}
export default Screens;