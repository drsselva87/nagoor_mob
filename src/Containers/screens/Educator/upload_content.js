import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';

// import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const UploadContent = ({ navigation }) => {
  const [text, onChangeText] = useState('Video Title')
  return (
    <View style={{ width: "100%", height: "100%" }}>



      <View style={{ width: "100%", height: 61, flexDirection: "row", alignItems: "center", }} >
        <TouchableOpacity onPress={() => back()}>
          <Card style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
            <Image style={{ width: 7.1, height: 15.84, resizeMode: "contain", }} source={require("../../../Assets/back.png")} />
          </Card>
        </TouchableOpacity>
        <Text style={{ color: "#252525", marginLeft: 15, fontSize: 16, fontWeight: "500" }}>Upload Content</Text>

      </View>
      <View style={{ height: "85%" }}>

        <ScrollView>

          <View style={{ borderWidth: 1, borderColor: "#CDEFE9", backgroundColor: "#F9FFFC", width: "90%", alignSelf: "center", marginTop: "5%" }}>
            <Text style={{ marginLeft: 30, marginTop: 15, marginBottom: 15, color: "#747474", fontSize: 14, fontWeight: "400" }}>Video Title</Text>
          </View>
          <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", marginTop: 25, color: "#464646" }}>Upload Video</Text>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            {/* <VideoRecorder ref={cameraRef} /> */}
            <TouchableOpacity
            // onPress={ () => videoRecord() }
            >
              <View style={{ width: 98, height: 116, backgroundColor: "#D8FFF2", borderWidth: 1, borderColor: "rgba(39, 188, 127, 0.3)", borderRadius: 4 }}>
                <Image style={{ width: 33.33, height: 24.62, resizeMode: "contain", alignSelf: "center", marginTop: 25 }} source={require("../../../Assets/camera.png")} />
                <View style={{ backgroundColor: "#27BC7F", position: "absolute", bottom: 0, width: "100%" }}>
                  <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "400", color: "#2B2B2B", marginTop: 10, marginBottom: 10 }}>Take Video</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={()=>
            //   chooseFile("video")}
            >
              <View style={{ width: 98, height: 116, backgroundColor: "#EBEBEB", marginLeft: 25, borderWidth: 1, borderColor: "#8D8D8D", borderRadius: 4 }}>
                <Image style={{ width: 33.33, height: 24.62, resizeMode: "contain", alignSelf: "center", marginTop: 25 }} source={require("../../../Assets/gallery.png")} />
                <View style={{ backgroundColor: "#ACACAC", position: "absolute", bottom: 0, width: "100%" }}>
                  <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "400", color: "#2B2B2B", marginTop: 10, marginBottom: 10 }}>Gallery</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <View>

          </View>

          <View style={{ height: 50, width: "68%", alignSelf: "center", backgroundColor: "#0B774B", borderRadius: 8, borderColor: "#EEFCF6", borderWidth: 0.5, marginTop: 30, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#FFFFFF" }}>Submit</Text>
          </View>
        </ScrollView>


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
    height: hp('17%'),
    flexDirection: 'column',
    backgroundColor: 'white',
  },
})

export default UploadContent
