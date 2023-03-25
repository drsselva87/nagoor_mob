import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView,FlatList,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';

import NavTab from '../Commons/educator_bottom_tab'
import { Button_Name } from '../../../Constants/Button_Name'
import { Button } from '@react-native-material/core'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { CoursesDetails } from '../../../Constants/Courses'

const Categorieslist = ({ navigation,route }) => {
  return (
    <View style={styles.responsiveBox}>
       <Card
        style={{ width: "100%", height: 50, borderRadius: 5, flexDirection: "row", alignItems: "center", backgroundColor: "#27BC7F" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Card style={{ width: 30, marginLeft: 10 }}>
            <Icon name="chevron-back-outline" size={27} color="black" />
          </Card>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 15,
            color: 'white',
            fontSize: 16,
          }}
        >
          Development
        </Text>

      </Card>
      <View style={{ height: "98%" }}>
              <FlatList
                data={CoursesDetails}

                renderItem={({ item, key }) => (
                  <TouchableOpacity onPress={() => navigation.navigate("HomeVideoPlay")}>

                    <View key={key} style={{ marginTop: 3, alignSelf: "center", width: "95%", marginBottom: 5 }}>
                      <Card style={{ flexDirection: "row", alignItems: "center", width: "100%", marginTop: 5 }}>
                        <Image
                          source={item.img}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 50,
                            marginLeft: 15, marginTop: 10, marginBottom: 10
                          }}>
                        </Image>
                        <View>
                          <Text
                            style={{
                              fontSize: 13,
                              marginLeft: wp('2%'),
                              fontWeight: 'bold',
                            }}
                          >
                            Miracle Lipshutz

                          </Text>

                          <Text
                            style={{
                              fontSize: 11,
                              marginLeft: wp('2%'),
                              fontWeight: 'bold', marginTop: 5,
                            }}
                          >
                            Mobile Application Development
                          </Text>
                        </View>
                      </Card>
                    </View>
               
                  </TouchableOpacity>


                )
                }
              />
            </View>
    </View>
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
    height:"100%",
    flexDirection: 'column',
  },
})

export default Categorieslist
