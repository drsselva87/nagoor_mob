import React, { useState, useEffect, Component ,useRef} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Pressable, ImageBackground, Animated, FlatList, Modal, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Card } from 'react-native-shadow-cards';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';


export default function UploadContent(props, navigation) {
const [video,setvideo]=useState('')
const [FilePath,setFilePath]=useState('')

    const { width, height } = Dimensions.get("window")
    const cameraRef = useRef(null);
    const videoRecord = async () => {
       if( cameraRef && cameraRef.current ) {
         cameraRef.current.open({ maxLength: 30 },(data) => {
           console.log('captured data', data); // data.uri is the file path
         });
       }
    }

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };



    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };



    const chooseFile = (type) => {
        let options = {
            base64: true,
            mediaType: type,
            multiple: true,
            videoQuality: "high",
            includeBase64: true, multiple: true,
            storageOptions: {
                skipBackup: true,
                path: 'video',
            },

        };

        launchImageLibrary(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            // if (pic.length <= 3) {
            //     setPic(response.assets[0].base64);
            // }
            //   console.log('base6415615615654 -> ', response.assets[0].base64);
            // console.log('uri -> ', response.assets[0].uri);
            // console.log('width -> ', response.assets[0].width);
            // console.log('height -> ', response.assets[0].height);
            // console.log('fileSize -> ', response.assets[0].fileSize);
            // console.log('type -> ', response.assets[0].type);
            // console.log('fileName -> ', response.assets[0].fileName);
            setFilePath(response.assets[0]);
            setvideo(response.assets[0])
            // console.log(response.assets[0].base64,"sssssssss")
         
        });
    };
    const back = () => {
        props.navigation.goBack()
    }
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
                    <VideoRecorder ref={cameraRef} />
                    <TouchableOpacity onPress={ () => videoRecord() }>
                        <View style={{ width: 98, height: 116, backgroundColor: "#D8FFF2", borderWidth: 1, borderColor: "rgba(39, 188, 127, 0.3)", borderRadius: 4 }}>
                            <Image style={{ width: 33.33, height: 24.62, resizeMode: "contain", alignSelf: "center", marginTop: 25 }} source={require("../../../Assets/camera.png")} />
                            <View style={{ backgroundColor: "#27BC7F", position: "absolute", bottom: 0, width: "100%" }}>
                                <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "400", color: "#2B2B2B", marginTop: 10, marginBottom: 10 }}>Take Video</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>chooseFile("video")}>
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

                    <View style={{ height: 50, width: "70%", alignSelf: "center", backgroundColor: "#0B774B", borderRadius: 8, borderColor: "#EEFCF6", borderWidth: 0.5, marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "#FFFFFF" }}>Submit</Text>
                    </View>
                </ScrollView>


            </View>



        </View>



    )
}
