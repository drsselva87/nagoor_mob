import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-shadow-cards';
import { SearchBar } from '@rneui/themed'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles"


const StudentAttendanceList = ({ navigation }) => {
    return (
        <View style={styles.responsiveBox}>
            <ScrollView>
                <Card
                    style={styles.header}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()} 
                    style={styles.back}>
                        <Icon name="chevron-back-outline" size={27} color="black" />
                    </TouchableOpacity >
                    <Text
                        style={styles.headertext}
                    >
                        Student Attendance
                    </Text>

                </Card>

                <Text style={styles.topic}>Mobile Application Development</Text>
                <TouchableOpacity onPress={() => navigation.navigate("StudentAttendance")}>
                    <View style={styles.listview}>
                        <Image source={require("../../../../Assets/Images/tutor_images/arul.jpeg")} 
                        style={styles.imagee}></Image>
                        <Text style={styles.listtext}>Miracle Lipshutz</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.topic}>React JS Development</Text>
                <TouchableOpacity onPress={() => navigation.navigate("StudentAttendance")}>
                    <View style={styles.listview}>
                        <Image source={require("../../../../Assets/Images/tutor_images/arul.jpeg")} 
                        style={styles.imagee}></Image>
                        <Text style={styles.listtext}>Miracle Lipshutz</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}



export default StudentAttendanceList
