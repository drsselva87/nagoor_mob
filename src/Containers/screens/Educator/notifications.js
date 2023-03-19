import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Pressable, ImageBackground, Animated, FlatList, Modal, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons'




export default function Notification1(props, navigation) {


  const { width, height } = Dimensions.get("window")

  const [DATA, setdata] = useState([

    {

      title: "New update available. get new features from playstore download now."

    },
    {

      title: "New update available. get new features from playstore download now.",

    },
    {

      title: 'New update available. get new features from playstore download now.',

    },
    {

      title: 'New update available. get new features from playstore download now.',

    },
  ])

  const [DATA1, setdata1] = useState([

    {

      title: "New update available. get new features from playstore download now."

    },
    {

      title: "New update available. get new features from playstore download now.",

    },
    {

      title: 'New update available. get new features from playstore download now.',

    },
    {

      title: 'New update available. get new features from playstore download now.',

    },
    {

      title: "New update available. get new features from playstore download now."

    },
    {

      title: "New update available. get new features from playstore download now.",

    },
    {

      title: 'New update available. get new features from playstore download now.',

    },
    {

      title: 'New update available. get new features from playstore download now.',

    },
  ])

  return (
    <View style={{ width: "100%", height: "100%" }}>



      <View style={{ width: "100%", height: 61, flexDirection: "row", alignItems: "center", }} >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Card style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
            <Icon name="chevron-back-outline" size={27} color="black" />
          </Card>
        </TouchableOpacity>
        <Text style={{ color: "#252525", marginLeft: 15, fontSize: 16, fontWeight: "500" }}>Notification</Text>

      </View>
      <View style={{ height: "91%" }}>

        <ScrollView>

          <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: 12, color: "#252525", marginTop: 15 }}>You have <Text style={{ color: "#27BC7F" }}>2 notifications</Text> today.</Text>


          <Text style={{ fontSize: 20, fontWeight: "400", marginLeft: 12, color: "#252525", marginTop: 15 }}>Today</Text>
          <View style={{ marginTop: 15 }}>
            <FlatList
              data={DATA}

              renderItem={({ item, index }) => (

                <View>
                  <View style={{ width: "100%", height: 1, backgroundColor: "#979797" }}></View>

                  <Text style={{ width: "90%", alignSelf: "center", fontSize: 16, fontWeight: "400", lineHeight: 20, marginTop: 10, marginBottom: 10, color: "#616161" }}>{item.title}</Text>
                </View>
              )
              }
            />
          </View>
          <View style={{ width: "100%", height: 1, backgroundColor: "#979797" }}></View>
          <Text style={{ fontSize: 20, fontWeight: "400", marginLeft: 12, color: "#252525", marginTop: 15 }}>This Week</Text>
          <View style={{ marginTop: 15 }}>
            <FlatList
              data={DATA1}

              renderItem={({ item, index }) => (

                <View>
                  <View style={{ width: "100%", height: 1, backgroundColor: "#979797" }}></View>

                  <Text style={{ width: "90%", alignSelf: "center", fontSize: 16, fontWeight: "400", lineHeight: 20, marginTop: 10, marginBottom: 10, color: "#616161" }}>{item.title}</Text>
                </View>
              )
              }
            />
          </View>
        </ScrollView>


      </View>



    </View>



  )
}
