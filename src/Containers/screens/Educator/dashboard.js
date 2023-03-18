import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// import { Card } from '@rneui/themed'
import { Card } from 'react-native-shadow-cards';

import { Avatar, Surface, Button } from '@react-native-material/core'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { LineChart } from 'react-native-chart-kit'
import NavTab from './topNavTab'

const Dashboard = ({ navigation }) => {
  return (
    <>
      <View style={styles.responsiveBox}>
        <ScrollView>
          <Card style={{ width: "100%", borderRadius: 5, backgroundColor: 'white', justifyContent: "center", height: 50 }}

          >
            <View style={{ flexDirection: 'row', }}>
              <View>
                <Icon name="menu-outline" size={27} color="black" />
              </View>
              <View style={{ width: "80%" }} >
                <Text style={{ color: 'black', fontSize: 22, textAlign: "center" }}>Dashboard</Text>
              </View>
              <Image
                source={require('../../../Assets/Images/avatar.jpeg')}
                style={{ width: 38, height: 38, resizeMode: "contain", borderRadius: 50 }}
              />
            </View>
          </Card>
          <NavTab />
          <View
            style={{ width: wp('100%'), marginLeft: wp('5%'), marginTop: 10 }}
          >
            <Text style={{ color: 'black' }}>Students Joined</Text>
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                  },
                ],
              }}
              width={wp('90%')} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#27BC7F',
                backgroundGradientFrom: '#80EBBF',
                backgroundGradientTo: '#27BC7F',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <View style={{ width: wp('95%') }}>
            <View
              style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
              }}
            >
              <Text style={{ marginLeft: wp('5%'), color: 'black' }}>
                Attendance Details
              </Text>
              <Text style={{ marginLeft: wp('5%'), color: 'black' }}>
                View All
              </Text>
            </View>
            <View style={{ width: "100%", justifyContent: "space-evenly", flexDirection: "row", marginTop: 15 }}>
              <Card style={{ width: "45%" }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-around',marginTop:10 }}>
                  <Text style={{ color: 'black' }}>Mentors</Text>
                  <Text style={{ color: 'black' }}>View all</Text>

                </View>
                <Image
                  style={{ margin: 20 }}
                  source={require('../../../Assets/Images/mentor.jpeg')}
                />

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 10 ,width:"60%",marginLeft:10 }}>Total Teachers</Text>
                  <Text style={{ color: 'black', fontSize: 10,width:"20%"   }}>108</Text>
                  <Image
                  style={{ }}
                  source={require('../../../Assets/right.png')}
                />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',marginTop:5

                  }}
                >
                  <Text style={{  color: 'black', fontSize: 10 ,width:"60%",marginLeft:10 }}>Present</Text>
                  <Text style={{  color: 'black', fontSize: 10,width:"20%" }}>104</Text>
                  <Image
                  style={{ }}
                  source={require('../../../Assets/right.png')}
                />
                </View>
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',marginTop:10,marginBottom:10
                }}
              >
             <View style={{backgroundColor:"#00AB65",borderRadius:4}}>
              <Text style={{margin:8,color:"white",fontSize:12}}>Add</Text>
             </View>
             <View style={{borderColor:"#00AB65",borderWidth:1,borderRadius:4}}>
              <Text style={{margin:8,color:"#00AB65",fontSize:12}}>Remove</Text>
             </View>
              </View>
              </Card>

              <Card style={{ width: "45%" }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-around',marginTop:10 }}>
                  <Text style={{ color: 'black' }}>Learners</Text>
                  <Text style={{ color: 'black' }}>View all</Text>

                </View>
                <Image
                style={{ margin: 20 }}
                source={require('../../../Assets/Images/learner.jpeg')}
              />
              
              <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 10 ,width:"60%",marginLeft:10 }}>Total Learners</Text>
                  <Text style={{ color: 'black', fontSize: 10,width:"20%"   }}>108</Text>
                  <Image
                  style={{ }}
                  source={require('../../../Assets/right.png')}
                />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',marginTop:5

                  }}
                >
                  <Text style={{  color: 'black', fontSize: 10 ,width:"60%",marginLeft:10 }}>Present</Text>
                  <Text style={{  color: 'black', fontSize: 10,width:"20%" }}>104</Text>
                  <Image
                  style={{ }}
                  source={require('../../../Assets/right.png')}
                />
                </View>
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',marginTop:10,marginBottom:10
                }}
              >
             <View style={{backgroundColor:"#00AB65",borderRadius:4}}>
              <Text style={{margin:8,color:"white",fontSize:12}}>Add</Text>
             </View>
             <View style={{borderColor:"#00AB65",borderWidth:1,borderRadius:4}}>
              <Text style={{margin:8,color:"#00AB65",fontSize:12}}>Remove</Text>
             </View>
              </View>
              </Card>
            </View>

            <View style={{ width: wp('95%') }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',marginTop:15
                }}
              >
                <Text style={{ marginLeft: wp('5%'), color: 'black' }}>
                  Recent Transaction
                </Text>
                <Text style={{ marginLeft: wp('5%'), color: 'black' }}>
                  View all
                </Text>
              </View>
              <ScrollView>
                <Surface
                  style={{
                    width: wp('100%'),
                    height: 80,
                    padding: 10,
                    marginLeft: wp('1%'),
                    marginTop:5
                  }}
                >
                  <View style={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
                    <Image style={{width:50,borderRadius:50,height:50,borderRadius:50}}
                      source={require('../../../Assets/Images/avatar.jpeg')}
                    />
                    <View style={{marginLeft:5}}>
                      <Text style={{ color: 'black',fontSize:14 }}>
                        Paid to Syndra Thomas
                      </Text>
                      <Text style={{ color: '#848484',fontSize:12 }}>12:48 am, 2 days ago</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        padding: 10,
                        marginLeft: 30,
                        color: '#00AB65',
                      }}
                    >
                      9800 INR
                    </Text>
                  </View>
                </Surface>
                <Surface
                  style={{
                    width: wp('100%'),
                    height: 80,
                    padding: 10,
                    marginLeft: wp('1%'),
                  }}
                >
                  <View style={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
                    <Image  style={{width:50,borderRadius:50,height:50,borderRadius:50}}
                      source={require('../../../Assets/Images/avatar.jpeg')}
                    />
                    <View style={{ marginLeft:5 }}>
                      <Text style={{ color: 'black',fontSize:14 }}>
                        Paid to Syndra Thomas
                      </Text>
                      <Text style={{ color: '#848484',fontSize:12  }}>12:48 am, 2 days ago</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        padding: 10,
                        marginLeft: 30,
                        color: '#00AB65',
                      }}
                    >
                      9800 INR
                    </Text>
                  </View>
                </Surface>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
    paddingRight: 10,
  },
  linearGradient: {
    padding: 10,
    marginLeft: 30,
    borderRadius: 10,
    height: 150,
    width: 352,
  },
  responsiveBox: {
    width: wp('100%'),
    backgroundColor: 'white',
    flexDirection: 'column',
    height: "100%"
  },
})

export default Dashboard
