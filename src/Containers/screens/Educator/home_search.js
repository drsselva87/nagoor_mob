import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';
import { SearchBar } from '@rneui/themed'

import NavTab from '../Commons/educator_bottom_tab'
import { Button_Name } from '../../../Constants/Button_Name'
import { Button } from '@react-native-material/core'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const HomeSearch = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
    
      <Card
      style={{  width:"100%",height:50,borderRadius:5,flexDirection:"row",alignItems:"center",backgroundColor:"#27BC7F"}}
      >
        <Card style={{width:30,marginLeft:10}}>
            <Icon name="chevron-back-outline" size={27} color="black" />
            </Card>
             <Text
            style={{
              marginLeft: 15,
              color: 'white',
              fontSize: 16,
            }}
          >
            Courses
          </Text>
       
      </Card>
      <View flexDirection="row">
        <SearchBar
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
            height: 40,
            marginTop: 10,
            marginLeft: 20,
            borderWidth: 0,
          }}
          inputContainerStyle={{ height: 25, width: wp('80%') }}
        />
        <Icon
          name="filter"
          size={20}
          style={{ marginTop: 20, marginLeft: wp('3%'), color: '#0B774B' }}
        />
      </View>
      <Text
        style={{
          color: '#343434',
          marginLeft: wp('7%'),
          marginTop: 15,
          fontSize: 14,
        }}
      >
        Top Searches
      </Text>
      <View
        flexDirection="row"
        flexWrap="wrap"
        marginLeft={wp('3%')}
        height={hp('70%')}
        marginTop={10}
      >
        {Button_Name.map((item, key) => (

          <Button
            title={item}
            variant="outlined"
            key={key}
            height={29}
            margin={2}
            color="#0B774B"
            alignItems="center"
            justifyContent="center"
          />
        ))}
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
  },
})

export default HomeSearch
