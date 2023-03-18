import React from 'react'
import {
    StyleSheet,
    ScrollView,
    Text, View, Image, TextInput
} from 'react-native'
import { Card } from 'react-native-shadow-cards';
import styles from "./style"
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = ({ navigation }) => {

    return (
        <ScrollView style={styles.responsiveBox}>
            <Card
                style={{ width: "100%", height: 50, borderRadius: 5, flexDirection: "row", alignItems: "center" }}
            >
                <Card style={styles.header}>
                    <Icon name="chevron-back-outline" size={27} color="black" />
                </Card>
                <Text style={styles.headertext}>Profile</Text>
            </Card>

            <View style={styles.profile}>
                <Image source={require("../../../../Assets/Images/tutor_images/arul.jpeg")}
                    style={styles.profileimg}></Image>

                <View style={styles.edit}>
                    <Text style={{ color: "#252525" }}>Edit</Text>
                </View>
            </View>

            <View style={styles.line}></View>
            <View style={styles.flexx}>
                <Text style={styles.left}>Name : </Text>
                <TextInput placeholder='sharon' placeholderTextColor={'#616161'} style={styles.right}></TextInput>
            </View>
            <View style={styles.line}></View>
            <View style={styles.flexx}>
                <Text style={styles.left}>Email : </Text>
                <TextInput placeholder='sharon@gmail.com' placeholderTextColor={'#616161'} style={styles.right}></TextInput>
            </View>
            <View style={styles.line}></View>
            <View style={styles.flexx}>
                <Text style={styles.left}>Phone Number : </Text>
                <TextInput placeholder='9874563210' placeholderTextColor={'#616161'} style={styles.right}></TextInput>
            </View>
            <View style={styles.line}></View>
            <View style={styles.flexx1}>
                <Text style={styles.left1}>About Me :</Text>
                <TextInput placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    placeholderTextColor={'#616161'} textAlignVertical='top'
                    multiline={true}
                    style={styles.right1}></TextInput>
            </View>
            <View style={styles.line}></View>

        </ScrollView>
    )
}



export default Profile
