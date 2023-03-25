import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable, FlatList,
  Dimensions, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
// import NavTab from '../nav_tab'
import { Card } from 'react-native-shadow-cards';


const HomeCategories = ({ navigation }) => {
  var width = Dimensions.get('window').width //full width
  var height = Dimensions.get('window').height //full height
  const DATA = [
    {
      title: 'Development',
    },
    {
      title: 'IT & Software',
    },
    {
      title: 'Finance',
    },
    {
      title: 'Design',
    },
    {
      title: 'Marketing',
    },
    {
      title: 'Productivity',
    },

  ];


  const datasend = (valuee) => {
    navigation.navigate("Categorieslist",
     {
      categoryname: valuee
    })
  }
  return (
    <View style={{ width: "100%", height: "100%" }}>
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
            color: 'white',
            marginLeft: 15,

            fontSize: 16,
          }}
        >
          Browse Categories
        </Text>

      </Card>
      <FlatList
        data={DATA}

        renderItem={({ item, key }) => (
          <TouchableOpacity onPress={() => datasend(item.title)}>
            <Card style={{ flexDirection: "row", width: "100%", height: 50, alignItems: "center", justifyContent: "center", marginTop: 4, marginBottom: 4 }}>
              <Image
                source={require('../../../Assets/Images/development.jpeg')}
                style={{
                  height: 25,
                  width: 25, marginLeft: 10
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: 'black',
                  marginLeft: 25,
                  fontSize: 16, width: "72%"
                }}
              >
                {item.title}
              </Text>
              <Icon
                name="chevron-forward"
                size={27}
                style={{ marginLeft: 10, marginTop: 0 }}
                color="black"
              />
            </Card>
          </TouchableOpacity>
        )
        }
      />

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
})

export default HomeCategories
