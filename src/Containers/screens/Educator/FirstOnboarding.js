import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Pagination } from 'react-native-snap-carousel'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper'
import { Button } from '@rneui/base'
import { TouchableOpacity } from 'react-native-gesture-handler';

const FirstOnboarding = ({ navigation }) => {

  const DATA = [
    {
      title: 'Hello, Welcome to GRIT Studies',
      title1: 'Give yourself the BEST education has to offer',
      image: require('../../../Assets/Images/girl.jpeg')
    },
    {
      title: 'Learn from professionals as tutors',
      title1: 'Admissions are going on for Certified Courses. It is time to expand your horizons and pave the way for the future with GRIT Studies.',
      image: require('../../../Assets/Images/boy.jpeg')
    },
    {
      title: 'Hello, Welcome to GRIT Studies',
      image: require('../../../Assets/Images/boy_2.jpeg'),
      title1: 'Give yourself the BEST education has to offer',
    },
    {
      title1: 'GRIT Studies empowers educators through well researched and customermade training programs bringing greater results for schools and colleges.',
      title: 'Empowering Educators',
      image: require('../../../Assets/Images/girl_2.jpeg')
    },
  ];
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   <View>
    //     <Pressable
    //       onPress={() => {
    //         navigation.navigate('LoginFirst')
    //       }}
    //     >
    //       <Text
    //         style={{
    //           marginTop: 20,
    //           paddingLeft: 70,
    //           color: '#0B774B',
    //           fontSize: 15,
    //           fontWeight: 'bold',
    //           marginLeft: 200,
    //         }}
    //       >
    //         Skip
    //       </Text>
    //     </Pressable>
    //     <Image
    //       source={require('../../../Assets/Images/girl.jpeg')}
    //       style={{ width: 300, height: 300, marginTop: 30 }}
    //     />
    //   </View>
    //   <Text
    //     style={{
    //       marginTop: 20,
    //       textAlign: 'center',
    //       fontSize: 20,
    //       fontWeight: 'bold',
    //     }}
    //   >
    //     Hello, Welcome to GRIT Studies
    //   </Text>
    //   <Text
    //     style={{
    //       marginTop: 20,
    //       width: 300,
    //       textAlign: 'center',
    //       fontSize: 15,
    //       color: '#747474',
    //     }}
    //   >
    //     Give yourself the BEST education has to offer
    //   </Text>
    //   <Pagination
    //     dotsLength={4}
    //     activeDotIndex={0}
    //     dotStyle={{
    //       width: 10,
    //       height: 10,
    //       borderRadius: 5,
    //       marginHorizontal: 0,
    //       backgroundColor: '#0B774B',
    //       marginTop: 40,
    //     }}
    //     inactiveDotOpacity={0.4}
    //     inactiveDotScale={0.6}
    //     tappableDots={false}
    //   />
    //   <Icon
    //     style={{
    //       backgroundColor: '#0B774B',
    //       borderRadius: 50,
    //       size: 30,
    //       justifyContent: 'center',
    //       width: 50,
    //       height: 50,
    //       paddingLeft: 12,
    //       paddingTop: 10,
    //       marginTop: 5,
    //       alignSelf: 'center',
    //     }}
    //     name="right"
    //     size={30}
    //     color="white"
    //     onPress={() => navigation.navigate('Onboarding_Second')}
    //   />
    // </ScrollView>
    <View style={{
      width: "100%", height: "100%", backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Pressable
        onPress={() => {
          navigation.navigate('Educatorlogin')
        }}
      >
        <Text
          style={{
            marginTop: 20,
            paddingLeft: 70,
            color: '#0B774B',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 200,
          }}
        >
          Skip
        </Text>
      </Pressable>
      <View style={{ width: "100%",height:"75%", marginTop: 10 }}>
        <Swiper
          autoplay={true}
          timeout={2}
          loop={true}
          dotColor={'#96F2D4'}
          activeDotColor={'#146356'}
          controlsProps={{
            prevPos: false,
            nextPos: false,
          }}>

          <View style={{ width: "100%", alignItems: "center", }}>
            <Image style={styles.image} resizeMode='contain' source={require('../../../Assets/Images/girl.jpeg')} />
            <Text style={styles.text1}>Hello, Welcome to GRIT Studies</Text>
            <Text style={styles.text2}>Give yourself the BEST education has to offer</Text>

          </View>
          <View style={{ width: "100%", alignItems: "center", }}>
            <Image style={styles.image} source={require('../../../Assets/Images/boy.jpeg')} />
            <Text style={styles.text1}>Learn from professionals as tutors</Text>
            <Text style={styles.text2}>Admissions are going on for
              Certified Courses. It is time to expand
              your horizons and pave the way
              for the future with GRIT Studies.</Text>

          </View>
          <View style={{ width: "100%", alignItems: "center", }}>
            <Image style={styles.image} source={require('../../../Assets/Images/boy_2.jpeg')} />
            <Text style={styles.text1}>Learn New Skills every day!</Text>
            <Text style={styles.text2}>Making E-learning Affordable for millions.
              We are the shapers of great minds and
              honorable values for greater good.</Text>

          </View>
          <View style={{ width: "100%", alignItems: "center", }}>
            <Image style={styles.image} source={require('../../../Assets/Images/girl_2.jpeg')} />
            <Text style={styles.text1}>Empowering Educators</Text>
            <Text style={styles.text2}>GRIT Studies empowers educators through well researched and customermade training programs bringing greater results for schools and colleges.</Text>

          </View>
        </Swiper>

      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Educatorlogin')}>
        <View style={styles.button}>
          <Text style={{ fontSize: 19, color: "white", fontWeight: "bold" }}>Get Started</Text>
          <Icon
            style={styles.icons}
            name="right"
            size={20}
            color="white"

          />

        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 700,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300, height: 300, marginTop: 10, resizeMode: "contain"
  },
  text1: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 20,
    width: 300,
    textAlign: 'center',
    fontSize: 15,
    color: '#747474',
  },
  icons: {
    size: 30,
    marginLeft: 15
  },
  button:
  {
    flexDirection: "row",
    height: 50,
    width: 220,
    alignContent: 'center',
    margin: 0,
    backgroundColor: '#0B774B',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  }
})

export default FirstOnboarding
