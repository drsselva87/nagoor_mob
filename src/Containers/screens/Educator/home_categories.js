import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable, FlatList,
  Dimensions,
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

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={DATA}

        renderItem={({ item, key }) => (
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

        )
        }
      />
      {/* <ScrollView> */}

      {/* <Card
        width={width}
        height={50}
        borderRadius={5}
        containerStyle={{ backgroundColor: '#27BC7F', margin: 0, padding: 0 }}
      >
        <Card
          width={30}
          height={30}
          borderRadius={10}
          containerStyle={{
            padding: 0,
            marginTop: 8,
            left: 0,
            width: 30,
          }}
        >
          <Icon name="chevron-back-outline" size={27} color="black" />
        </Card>
        <Text
          style={{
            color: 'white',
            marginLeft: 60,
            marginTop: -25,
            fontSize: 16,
          }}
        >
          Browse Categories
        </Text>
      </Card>
      <Card width={width} marginLeft={0} marginTop={0}>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('../../../Assets/Images/development.jpeg')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Development</Text>
          <Icon
            name="chevron-forward"
            size={27}
            style={{ marginLeft: 205, marginTop: 0 }}
            color="black"
          />
        </ScrollView>
      </Card>

      <Card width={width} marginLeft={0} marginTop={0}>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('../../../Assets/Images/development.jpeg')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>IT & Software</Text>
          <Icon
            name="chevron-forward"
            size={27}
            style={{ marginLeft: 200, marginTop: 0 }}
            color="black"
          />
        </ScrollView>
      </Card>
      <Card width={width} marginLeft={0} marginTop={0}>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('../../../Assets/Images/development.jpeg')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Finance</Text>
          <Icon
            name="chevron-forward"
            size={27}
            style={{ marginLeft: 240, marginTop: 0 }}
            color="black"
          />
        </ScrollView>
      </Card>
      <Card width={width} marginLeft={0} marginTop={0}>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('../../../Assets/Images/development.jpeg')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Design</Text>
          <Icon
            name="chevron-forward"
            size={27}
            style={{ marginLeft: 245, marginTop: 0 }}
            color="black"
          />
        </ScrollView>
      </Card>
      <Card width={width} marginLeft={0} marginTop={0}>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('../../../Assets/Images/development.jpeg')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Marketing</Text>
          <Icon
            name="chevron-forward"
            size={27}
            style={{ marginLeft: 220, marginTop: 0 }}
            color="black"
          />
        </ScrollView>
      </Card>
      <Card width={width} marginLeft={0} marginTop={0}>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('../../../Assets/Images/development.jpeg')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Productivity</Text>
          <Icon
            name="chevron-forward"
            size={27}
            style={{ marginLeft: 205, marginTop: 0 }}
            color="black"
          />
        </ScrollView>
      </Card> */}

      {/* </ScrollView> */}
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
