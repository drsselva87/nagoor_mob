import React, { useState, useEffect, Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Card } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from '@react-native-community/checkbox'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button } from '@react-native-material/core'
import * as Progress from 'react-native-progress'

const MyLearning = ({ navigation }) => {
  const [ongoing, setongoing] = useState(true);
  const [completedd, setcompletedd] = useState(false);
  

  const ongoingpage = () => {
    setongoing(true)
    setcompletedd(false)
  }
  const completedpage = () => {
    setongoing(false)
    setcompletedd(true)
  }
  return (
    <ScrollView style={styles.responsiveBox}>
    <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', height: 60}}>
          {ongoing == false ? (
            <View  onStartShouldSetResponder={ongoingpage} style={{ width: '50%', height: 60, backgroundColor:"#D8FFF2",justifyContent:"center",alignItems:"center"}}>

                <Text style={{ width: "100%", color: 'black',  fontFamily: 'Poppins-Medium', fontSize: 14, fontWeight: "bold", textAlign: 'center' }}>Content</Text>
  
            </View>
          ) : <View style={{ width: '50%', height: 60, backgroundColor: '#27BC7F',justifyContent:"center",alignItems:"center" }}>
              <Text style={{ color: 'white',  fontFamily: 'Poppins-Medium', fontSize: 14, fontWeight: "bold", textAlign: 'center' }}>Content</Text>
          </View>
          }

          {completedd == false ? (
            <View  onStartShouldSetResponder={(completedpage)} style={{ width: '50%', height: 60,backgroundColor:"#D8FFF2" , alignItems:"center",justifyContent:"center"}}>
                <Text style={{ width: "100%", color: 'black', fontFamily: 'Poppins-Medium', fontSize: 14, fontWeight: "bold", textAlign: 'center' }}>Downloads</Text>
            </View>
          ) : <View  style={{ width: '50%', height: 60, backgroundColor: '#27BC7F', alignItems:"center",justifyContent:"center"}}>
            {/* <View style={{ marginTop: 8, height: 60,}}> */}
              <Text style={{ width: "100%", color: 'white',  fontFamily: 'Poppins-Medium', fontSize: 14, fontWeight: "bold", textAlign: 'center' }}>Downloads</Text>
            {/* </View> */}
            {/* <View style={{ width: "76%", marginLeft: -28, height: 3.5, borderRadius: 1, backgroundColor: '#01a09c', top: '17%', borderTopRightRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, alignSelf: 'center' }}></View> */}
          </View>}

        
        </View>


      <View>
        {ongoing == true ?(
        <Card
          borderRadius={10}
          containerStyle={{
            marginTop: 8,
            left: 0,
            height: 90,
            width: wp('90%'),
            backgroundColor: '#96F2D4',
            alignItems: 'flex-start',
          }}
        >
          <Text style={{ color: 'black' }}>Grit Studies</Text>
          <Text style={{ color: 'black' }}>DevOps & Software Engineering </Text>
          <Progress.Bar
            progress={0.4}
            width={wp('70%')}
            color="#FF6E15"
            marginTop={10}
            backgroundColor="#FFE1CF"
          />
        </Card>
        ):null}
      </View>
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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default MyLearning
