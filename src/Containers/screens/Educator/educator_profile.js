import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Pressable, ImageBackground, Animated, FlatList, Modal, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'



export default function EducatorProfile(props, navigation) {


  const [expand, setexpand] = useState(false)
  const contactinf = (value) => {
    if (value) {
      value == true
      setexpand(true)

    }
    else if (value == false) {
      setexpand(false)
    }
    else {
      setexpand(false)
    }

  }

  return (
    <View style={{ width: "100%", height: "100%" }}>



      <View style={{ width: "100%", height: 61, flexDirection: "row", alignItems: "center", }} >
      <TouchableOpacity style={{marginLeft:10}} onPress={()=>props.navigation.goBack()}>

      <Icon name="chevron-back-outline" size={27} color="black" />
      </TouchableOpacity>
        <Text style={{ color: "#252525", marginLeft: 20, fontSize: 16, fontWeight: "500" }}>Educator Profile</Text>

      </View>
      <View style={{ height: "82.6%" }}>

        <ScrollView>

          <View style={{ backgroundColor: "#CDEFE9", height: 178 }}>
          <Image style={{ width: 60, height:60, resizeMode: "contain", marginLeft: 32, marginTop: 22,borderRadius:50 }}      source={require('../../../Assets/Images/tutor_images/arul.jpeg')} />
          
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#1D1D1D", marginLeft: 32, marginTop: 15 }}>Sharon</Text>
            <View style={{ marginLeft: 32, marginTop: 5, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "400", color: "#616161", }}>arulj12@gmail.com</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("EducatorProfileEdit")}>
              <Image style={{ width: 20, height: 20, resizeMode: "contain", marginLeft: 10 }} source={require("../../../Assets/edit.png")} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
            <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/earn.png")} />
            {/* <Icon name="log-out-outline" size={20} color="black" /> */}

            <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>My earnings</Text>

          </View>
          <View style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}></View>
          {expand == false ?
            <TouchableOpacity onPress={() => contactinf(true)}>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
            {/* <Icon name="log-out-outline" size={20} color="black" /> */}

                <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/call.png")} />
                <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>Contact us</Text>
                <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/down.png")} />

              </View>
            </TouchableOpacity>
            :
            <View>
              <TouchableOpacity onPress={() => contactinf(false)}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
            {/* <Icon name="log-out-outline" size={20} color="black" /> */}

                  <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/call.png")} />
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>Contact us</Text>
                  <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/down.png")} />

                </View>
              </TouchableOpacity>
              <View style={{ width: "100%", height: 112, backgroundColor: "#CDEFE9" ,justifyContent:"center"}}>
                <Text style={{fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15,lineHeight:24}}>Reach us:{'\n'}9876543210{'\n'}gritdigitech@gmail.com</Text>
              </View>

            </View>
          }
          <View style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}></View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          {/* <Icon name="log-out-outline" size={20} color="black" /> */}
            <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/logout.png")} />
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>Logout</Text>

          </View>
          <View style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}></View>

        </ScrollView>


      </View>
      

   
    </View>



  )
}
