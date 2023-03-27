import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';
import { SearchBar } from '@rneui/themed'
import { CoursesDetails } from '../../../Constants/Courses'

import NavTab from '../Commons/student_bottom_tab'
import { Button_Name } from '../../../Constants/Button_Name'
import { Button } from '@react-native-material/core'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { TextInput } from 'react-native-gesture-handler';
// import { Pressable } from 'react-native';

const Instructordetail = ({ navigation, route }) => {
    const [showw, setshoww] = useState(false)

    const showfun = (value) => {
        if (value == true) {
            setshoww(true)
        }
        else if (value == false) {
            setshoww(false)
        }
        else {
            setshoww(false)
        }
    }

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
                    Instructor
                </Text>

            </Card>
            <ScrollView>

                <View style={{ height: "95%" }}>

                    {/* <View style={{ height: "100%" }}> */}


                    <View style={{ marginTop: 3, alignSelf: "center", width: "95%", marginBottom: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginTop: 5 }}>
                            <Image
                                source={require("../../../Assets/Images/course_images/react.jpeg")}
                                style={{
                                    width: 80,
                                    height: 80,

                                    marginLeft: 15, marginTop: 10, marginBottom: 10, borderRadius: 50
                                }}>
                            </Image>
                            <View style={{ marginLeft: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: wp('2%'),
                                        fontWeight: 'bold',
                                        width: "95%", color: "#00301C"
                                    }}
                                >
                                    Kaylynn Schleifer
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 8,
                                        marginLeft: wp('2%'),
                                        fontWeight: 'bold', marginTop: 5, color: "#252525"
                                    }}
                                >
                                    Mobile App Development
                                </Text>
                                <Text style={{
                                    color: '#252525',
                                    fontSize: 9, marginLeft: wp('2%'), marginTop: 3

                                }}>2563 Students</Text>
                                <Text style={{
                                    color: '#252525',
                                    fontSize: 9, marginLeft: wp('2%'), marginTop: 3

                                }}>12 Courses</Text>
                                <View style={{ width: "89%", flexDirection: "row", alignItems: "center", marginTop: 3 }}>


                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 10 }}></Image>
                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>
                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>
                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>
                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>

                                </View>


                            </View>
                        </View>


                        {/* </View> */}


                    </View>
                    <View style={{ width: "95%", alignSelf: "center" }}>
                        <Text style={{ color: "#263238", fontSize: 14, fontWeight: "500", }}>About Me</Text>

                        <Text style={{ color: "#263238", fontSize: 14, fontWeight: "400", }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco

                        </Text>

                        {showw == true ?
                            <Text style={{ color: "#263238", fontSize: 14, fontWeight: "400", marginTop: 10 }}>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                            : null}
                        {showw == false ?
                            <TouchableOpacity onPress={() => showfun(true)}>
                                <Text style={{ color: "#FF6E15", marginTop: 6 }}>Show More</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => showfun(false)}>
                                <Text style={{ color: "#FF6E15", marginTop: 6 }}>Show Less</Text>
                            </TouchableOpacity>
                        }

                        <View
                            style={{


                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'space-between',
                                marginRight: wp('5%'),
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#343434',
                                    marginTop: 20, fontWeight: "500"
                                }}
                            >
                                My Courses
                            </Text>
                            <Pressable
                                style={{
                                    color: 'orange',
                                    marginTop: 20,
                                    paddingLeft: wp('28%'),
                                }}
                              onPress={() => navigation.navigate('Instructorcourses')}
                            >
                                <Text
                                    style={{
                                        color: 'orange',
                                    }}
                                >
                                    See all
                                </Text>
                            </Pressable>
                        </View>


                        <FlatList
                            data={CoursesDetails}

                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("HomeVideoPlay")}>


                                    <View key={key} style={{ marginTop: 3, alignSelf: "center", width: "95%", marginBottom: 5 }}>
                                        <Card style={{ flexDirection: "row", alignItems: "center", width: "100%", marginTop: 5 }}>
                                            <Image
                                                source={item.img}
                                                style={{
                                                    width: 80,
                                                    height: 80,

                                                    marginLeft: 15, marginTop: 10, marginBottom: 10,
                                                }}>
                                            </Image>
                                            <View style={{ marginLeft: 10 }}>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        marginLeft: wp('2%'),
                                                        fontWeight: 'bold',
                                                        width: "70%", color: "#00301C"
                                                    }}
                                                >
                                                    Mobile App Development using Kotlin and
                                                    Jetpack Compose
                                                </Text>

                                                <Text
                                                    style={{
                                                        fontSize: 8,
                                                        marginLeft: wp('2%'),
                                                        fontWeight: 'bold', marginTop: 5, color: "#252525"
                                                    }}
                                                >
                                                    Arul Jeyaraj
                                                </Text>


                                                <View style={{ width: "89%", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                    <Text style={{
                                                        color: '#252525',
                                                        fontSize: 9, marginLeft: wp('2%'),

                                                    }}>4.5</Text>

                                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 10 }}></Image>
                                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>
                                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>
                                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>
                                                    <Image source={require("../../../Assets/star.png")} style={{ width: 7, height: 7, resizeMode: "contain", marginLeft: 5 }}></Image>

                                                    <Text style={styles.text3}>(2564)</Text>
                                                </View>
                                                <Text style={{
                                                    color: '#252525',
                                                    fontSize: 9, marginLeft: wp('2%'), marginTop: 3, fontWeight: "500"

                                                }}>$ 125</Text>

                                            </View>
                                        </Card>
                                    </View>

                                </TouchableOpacity>


                            )
                            }
                        />
                    </View>
                </View>

            </ScrollView>
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
        height: "100%",
        flexDirection: 'column',
    },
    text3: {
        color: '#252525',
        fontSize: 9,
        width: "94%", alignSelf: "center", marginLeft: 10
    },
})

export default Instructordetail
