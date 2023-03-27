import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, Modal, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import VideoPlayer from 'react-native-video-controls';
import { Button } from '@react-native-material/core'
import Video from 'react-native-video'
import video from '../../../Assets/Videos/demo.mp4'
import NavTab from './video_player_navtab'

const HomeVideoPlay = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [expand, setexpand] = useState(false)
  const [content, setcontent] = useState(false)
  const [Instructor, setInstructor] = useState(false)
  const [Feedback, setFeedback] = useState(false)

  const contactinf = (value) => {
    setcontent(false)
    setInstructor(false)
    setFeedback(false)
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

  const contentinf = (value) => {
    setInstructor(false)
    setexpand(false)
    setFeedback(false)
    if (value) {
      value == true
      setcontent(true)

    }
    else if (value == false) {
      setcontent(false)
    }
    else {
      setcontent(false)
    }
  }


  const Feedbackinf = (value) => {
    setexpand(false)
    setcontent(false)
    setInstructor(false)

    if (value) {
      value == true
      setFeedback(true)

    }
    else if (value == false) {
      setFeedback(false)
    }
    else {
      setFeedback(false)
    }

  }
  const instructorinf = (value) => {
    setexpand(false)
    setFeedback(false)
    setcontent(false)
    if (value) {
      value == true
      setInstructor(true)

    }
    else if (value == false) {
      setInstructor(false)
    }
    else {
      setInstructor(false)
    }

  }

  const navigator = () => {
    navigation.goBack()
  }

  const [modalVisible, setModalVisible] = useState(false);
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
          Advanced Android Course
        </Text>

      </Card>
      <View style={{ height: "86%" ,backgroundColor:"white"}}>
        <ScrollView>
          <View style={{ height: "100%" }}>
            <View>
              <TouchableOpacity
              // onPress={() => setModalVisible(true)}
              >
                <Image source={require("../../../Assets/video.png")} style={styles.video}></Image>
              </TouchableOpacity>
              {/* <View style={styles.video}> */}
              {/* <Video
                        source={video}
                        paused={!isPlaying}
                        controls={true}
                        style={styles.video}
                        muted={isMuted}
                      /> */}
              {/* <VideoPlayer
                      tapAnywhereToPause
  // source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
  source={video}
  navigator={navigator()}
/> */}
              {/* </View> */}
              {/* <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                >
                       <Video
                        source={video}
                        paused={!isPlaying}
                        // controls={true}
                        style={styles.video}
                        muted={isMuted}
                      />
                  <View style={styles.centeredView}>
                    <View style={{ backgroundColor: "black" }}>
                      <TouchableOpacity onPress={()=>setModalVisible(false)}>
                      <Image source={require("../../../Assets/video.png")} style={{ width: 20, height: 20 }}></Image>
                      </TouchableOpacity>
                 
                    </View>
                  </View>
                </Modal>
              </View> */}

            </View>

            <View style={styles.description}>
              <Text style={styles.text1}>Android App Development with Kotlin |
                Beginner to Advanced</Text>
              <Text style={styles.text2}>
                Kotlin | Android App Development with Kotlin Android A-Z,
                Firebase Android, Android Studio, Android Development projects
              </Text>
              <Text style={styles.text2}>Created By Arul Jeyaraj</Text>
            </View>
            <View style={{ width: "89%", alignSelf: "center", flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../../../Assets/lastup.png")} style={{ width: 12, height: 12, resizeMode: "contain" }}></Image>
              <Text style={styles.text3}>Last Updated on 14 Sep 2022</Text>
            </View>

            <View style={{ width: "89%", alignSelf: "center", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
              <Text style={{
                color: '#252525',
                fontSize: 12,
                marginLeft: 10
              }}>4.5</Text>

              <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 10 }}></Image>
              <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>
              <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>
              <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>
              <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>

              <Text style={styles.text3}>(10,255 ratings) 1255 Students</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <View style={styles.buttons}>
                <Text style={{ color: "#0B774B", fontSize: 12 }}>Wishlist</Text>
                <Image source={require("../../../Assets/heart.png")} style={styles.imagee}></Image>
              </View>

              <View style={styles.buttons}>
                <Text style={{ color: "#0B774B", fontSize: 12 }}>Share</Text>
                <Image source={require("../../../Assets/share.png")} style={styles.imagee}></Image>
              </View>

              <View style={styles.buttons}>
                <Text style={{ color: "#0B774B", fontSize: 12 }}>Download</Text>
                <Image source={require("../../../Assets/download.png")} style={styles.imagee}></Image>
              </View>

            </View>

            {expand == false ?
              <TouchableOpacity onPress={() => contactinf(true)}>
                <View style={styles.accordian}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Description</Text>
                  <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/down.png")} />

                </View>
              </TouchableOpacity>
              :
              <View>
                <TouchableOpacity onPress={() => contactinf(false)}>
                  <View style={styles.accordian}>
                    <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Description</Text>
                    <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/up.png")} />

                  </View>
                </TouchableOpacity>
                <View style={{ width: "100%", backgroundColor: "#D8FFF2", justifyContent: "center" }}>
                  <Text style={{ color: "#0B774B", fontSize: 12, marginLeft: 25, marginTop: 10 }}>
                    About Course
                  </Text>
                  <Text style={{ color: "#7D7D7D", fontSize: 12, width: "85%", alignSelf: "center", marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                  <Text style={{ color: "#0B774B", fontSize: 12, marginLeft: 25, marginTop: 10 }}>
                    Requirements
                  </Text>

                  <Text style={{ color: "#7D7D7D", fontSize: 12, width: "85%", alignSelf: "center", marginTop: 5, marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  </Text>
                </View>

              </View>
            }

            {content == false ?
              <TouchableOpacity onPress={() => contentinf(true)}>
                <View style={styles.accordian}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Course Content</Text>
                  <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/down.png")} />

                </View>
              </TouchableOpacity>
              :
              <View>
                <TouchableOpacity onPress={() => contentinf(false)}>
                  <View style={styles.accordian}>
                    <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Course Content</Text>
                    <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/up.png")} />

                  </View>
                </TouchableOpacity>
                <View style={{ width: "100%", backgroundColor: "#D8FFF2", justifyContent: "center", marginBottom: 5 }}>
                  <Text style={{ color: "#0B774B", fontSize: 12, marginLeft: 25, marginTop: 5, fontWeight: "500" }}>Curriculum</Text>
                  <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", alignItems: "center", marginTop: 5 }}>
                    <Text style={{ color: "#0B774B", fontSize: 12, marginLeft: 8, }}>6 Sections </Text>
                    <Text style={{ fontSize: 20, color: "#707070", marginLeft: 10 }}>{'\u2022'}</Text>
                    <Text style={{ color: "#0B774B", fontSize: 12, marginLeft: 8, }}>18 Lectures</Text>
                    <Text style={{ fontSize: 20, color: "#707070", marginLeft: 10 }}>{'\u2022'}</Text>
                    <Text style={{ color: "#0B774B", fontSize: 12, marginLeft: 8, }}>9h 15m total length</Text>
                  </View>



                </View>
                <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between" }}>
                  <Text style={{ color: "rgba(37, 37, 37, 0.87)", marginLeft: 25 }}>Section-1</Text>
                  <Image style={{ width: 18, height: 18, resizeMode: "contain", right: 15 }} source={require("../../../Assets/plus.png")} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 7, justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#30F2B3", marginLeft: 25, height: 20 }}>
                      <Text style={{ textAlign: "center", color: "white", marginLeft: 4, marginRight: 4 }}>1</Text>
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 8 }}>
                      <Text style={{ fontSize: 12, color: "#7D7D7D" }}>Introduction</Text>
                      <Text style={{ fontSize: 12, color: "#7D7D7D" }}>Video - 1:12</Text>
                    </View>
                  </View>
                  <Image style={{ width: 18, height: 18, resizeMode: "contain", right: 15 }} source={require("../../../Assets/play.png")} />
                </View>


              </View>
            }
            {Instructor == false ?
              <TouchableOpacity onPress={() => instructorinf(true)}>
                <View style={styles.accordian}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Instructor</Text>
                  <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/down.png")} />

                </View>
              </TouchableOpacity>

              :
              <View>
                <TouchableOpacity onPress={() => instructorinf(false)}>
                  <View style={styles.accordian}>
                    <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Instructor</Text>
                    <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/up.png")} />

                  </View>
                </TouchableOpacity>
                <View style={{ backgroundColor: "white", }}>
                  <View style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}>
                    <Image style={{ width: 60, height: 60, resizeMode: "contain", marginLeft: 32, borderRadius: 50, marginTop: 15, }}
                      source={require('../../../Assets/Images/tutor_images/arul.jpeg')} />

                    <View style={{ marginLeft: 32, marginTop: 5, flexDirection: "column", marginTop: 15, }}>
                      <Text style={{ fontSize: 14, fontWeight: "500", color: "#1D1D1D", }}>Sharon</Text>

                      <Text style={{ fontSize: 12, fontWeight: "400", color: "#616161", }}>Mobile App Development</Text>
                      {/* <Image style={{ width: 20, height: 20, resizeMode: "contain", marginLeft: 10 }} source={require("../../../Assets/edit.png")} /> */}
                    </View>

                  </View>
                  <View style={{ width: "89%", alignSelf: "center", flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10 }}>
                    <Text style={{
                      color: '#252525',
                      fontSize: 12,
                      marginLeft: 10
                    }}>4.5</Text>

                    <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 10 }}></Image>
                    <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>
                    <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>
                    <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>
                    <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 5 }}></Image>

                    <Text style={styles.text3}>(10,255 ratings) 1255 Students</Text>
                  </View>
                </View>

              </View>}
            {Feedback == false ?
              <TouchableOpacity onPress={() => Feedbackinf(true)}>
                <View style={styles.accordian}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Students Feedback</Text>
                  <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/down.png")} />
                </View>
              </TouchableOpacity> :
              <View style={{ backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => Feedbackinf(false)}>
                  <View style={styles.accordian}>
                    <Text style={{ fontSize: 14, fontWeight: "400", color: "#252525", marginLeft: 25, width: "77%" }}>Students Feedback</Text>
                    <Image style={{ width: 12, height: 7.41, resizeMode: "contain", marginLeft: 15 }} source={require("../../../Assets/up.png")} />
                  </View>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginTop: 10, marginBottom: 10 }}>
                  <View style={{ backgroundColor: "white", width: "45%", height: 100, borderWidth: 1, borderColor: "#0B774B", borderRadius: 15 }}>
                    <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", alignItems: "center", justifyContent: "center" }}>
                      <Image style={{ width: 30, height: 30, resizeMode: "contain", borderRadius: 50, }}
                        source={require('../../../Assets/Images/tutor_images/arul.jpeg')} />

                      <View style={{ marginTop: 5, flexDirection: "column", marginLeft: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#1D1D1D", }}>Sharon</Text>
                        <View style={{ flexDirection: "row" }}>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>

                        </View>
                      </View>

                    </View>
                    <Text style={{ fontSize: 10, width: "90%", textAlign: "center", alignSelf: "center", marginTop: 7 }}>Very clear explanation. i learned many things.</Text>

                  </View>
                  <View style={{ backgroundColor: "white", width: "45%", height: 100, borderWidth: 1, borderColor: "#0B774B", borderRadius: 15 }}>
                    <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", alignItems: "center", justifyContent: "center" }}>
                      <Image style={{ width: 30, height: 30, resizeMode: "contain", borderRadius: 50, }}
                        source={require('../../../Assets/Images/tutor_images/arul.jpeg')} />

                      <View style={{ marginTop: 5, flexDirection: "column", marginLeft: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#1D1D1D", }}>Sharon</Text>
                        <View style={{ flexDirection: "row" }}>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>
                          <Image source={require("../../../Assets/star.png")} style={{ width: 12, height: 12, resizeMode: "contain", marginLeft: 2 }}></Image>

                        </View>
                      </View>

                    </View>
                    <Text style={{ fontSize: 10, width: "90%", textAlign: "center", alignSelf: "center", marginTop: 7 }}>Very clear explanation. i learned many things.</Text>

                  </View>
                </View>
              </View>
            }
      

          </View>
         

        

        </ScrollView>
      
      </View>
      <View style={{width:"100%",flexDirection:"row",height:60,position:"absolute",bottom:0}}>
            <View style={{width:"50%",backgroundColor:"#D8FFF2",height:60,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:16,color:"#252525"}}>£ 499</Text>
            </View>
            <View style={{width:"50%",backgroundColor:"#0B774B",height:60,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:16,color:"#252525"}}>BUY NOW</Text>
            </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  buttons: { width: 100, height: 40, backgroundColor: "#96F2D4", justifyContent: "center", alignItems: "center", flexDirection: "row" },
  imagee: {
    width: 11, height: 11, resizeMode: "contain", marginLeft: 7
  },
  accordian: { flexDirection: "row", alignItems: "center", backgroundColor: "#D8FFF2", height: 50, borderWidth: 0.5, borderColor: "#0B774B", marginTop: 2 },
  card: {
    backgroundColor: '#27BC7F',
    margin: 0,
    padding: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconCard: {
    padding: 0,
    marginTop: hp('2%'),
    left: 0,
    width: 30,
  },
  title: {
    color: 'white',
    marginTop: hp('3%'),
    fontSize: 16,
  },
  description: {
    margin: 10,
  },
  buttonWrapper: {
    margin: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  text1: {
    color: '#0B774B',
    fontSize: 16,
    width: "94%", alignSelf: "center"
  },
  text2: {
    color: '#747474',
    fontSize: 12,
    width: "94%", alignSelf: "center"

  },
  text3: {
    color: '#252525',
    fontSize: 12,
    width: "94%", alignSelf: "center", marginLeft: 10
  },
  responsiveBox: {
    width: wp('100%'),
    height: "100%",
    flexDirection: 'column',
  },
  video: {
    width: wp('100%'),
    height: 250,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: "rgba(100,100,100,0.5)"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default HomeVideoPlay
