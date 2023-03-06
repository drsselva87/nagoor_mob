import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Pressable, ImageBackground, Animated, FlatList, Modal, ScrollView } from 'react-native';
import { List } from 'react-native-paper';




export default function Home(props, navigation) {


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


        <Text style={{ color: "#252525", marginLeft: "10%", fontSize: 16, fontWeight: "500" }}>Tutor Profile</Text>





      </View>
      <View style={{ height: "82.6%" }}>

        <ScrollView>

          <View style={{ backgroundColor: "#CDEFE9", height: 178 }}>
            <Image style={{ width: 56, height: 56, resizeMode: "contain", marginLeft: 32, marginTop: 22 }} source={require("../../assets/pic.png")} />
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#1D1D1D", marginLeft: 32, marginTop: 15 }}>Sharon</Text>
            <View style={{ marginLeft: 32, marginTop: 5, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "400", color: "#616161", }}>arulj12@gmail.com</Text>
              <Image style={{ width: 20, height: 20, resizeMode: "contain", marginLeft: 10 }} source={require("../../assets/edit.png")} />

            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
            <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../assets/earn.png")} />
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>My earnings</Text>

          </View>
          <View style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}></View>
          {expand == false ?
            <TouchableOpacity onPress={() => contactinf(true)}>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
                <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../assets/call.png")} />
                <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>Contact us</Text>
                <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../assets/down.png")} />

              </View>
            </TouchableOpacity>
            :
            <View>
              <TouchableOpacity onPress={() => contactinf(false)}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
                  <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../assets/call.png")} />
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>Contact us</Text>
                  <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../assets/down.png")} />

                </View>
              </TouchableOpacity>
              <View style={{ width: "100%", height: 112, backgroundColor: "#CDEFE9" ,justifyContent:"center"}}>
                <Text style={{fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15,lineHeight:24}}>Reach us:{'\n'}9876543210{'\n'}gritdigitech@gmail.com</Text>
              </View>

            </View>
          }
          <View style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}></View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
            <Image style={{ width: 17.65, height: 20, resizeMode: "contain", marginLeft: 15 }} source={require("../../assets/logout.png")} />
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#2B2B2B", marginLeft: 15 }}>Logout</Text>

          </View>
          <View style={{ width: "100%", height: 1, backgroundColor: "#E0E0E0" }}></View>

        </ScrollView>


      </View>
      <View style={{ width: "100%", height: 40, flexDirection: "row", backgroundColor: "white", marginTop: 10, position: "absolute", bottom: 0 }}>
        <View style={{ width: "25%" }}>
        <View style={{ width: "100%", height: 4, backgroundColor: "white", borderRadius: 10 }}></View>
          <Image style={{ width: 20, height: 19.53,resizeMode: "contain", alignSelf: "center", marginTop: 10 }} source={require("../../assets/home.png")} />

        </View>

        <View style={{ width: "25%" }} >
          <TouchableOpacity onPress={() => props.navigation.navigate("Upload")}>
            <View style={{ width: "100%", height: 4, backgroundColor: "white", borderRadius: 10 }}></View>
            <Image style={{ width: 20, height: 19.53, resizeMode: "contain", alignSelf: "center", marginTop: 10 }} source={require("../../assets/upload.png")} />

          </TouchableOpacity>
        </View>
        <View style={{ width: "25%" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Notification")}>
            <View style={{ width: "100%", height: 4, backgroundColor: "white", borderRadius: 10 }}></View>
            <Image style={{width: 20, height: 19.53, resizeMode: "contain", alignSelf: "center", marginTop: 10 }} source={require("../../assets/bell1.png")} />

          </TouchableOpacity>
        </View>
        <View style={{ width: "25%" }}>
          <TouchableOpacity>
            <View style={{ width: "70%", height: 4, backgroundColor: "#27BC7F", borderRadius: 10, alignSelf: "center" }}></View>

            <Image style={{ width: 20, height: 19.53, resizeMode: "contain", alignSelf: "center", marginTop: 10 }} source={require("../../assets/profile1.png")} />

          </TouchableOpacity>
        </View>

      </View>

   
    </View>



  )
}
