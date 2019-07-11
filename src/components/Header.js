import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native'

import RightImage from '../assets/images/rightCorn.png'
import BorderImage from '../assets/images/newRectangle10.png'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends Component {
  render() {
    // console.log({
    //   width: Dimensions.get('window').width,
    //   height: Dimensions.get('window').height
    // })
    return (
      <ImageBackground source={BorderImage} style={styles.headerSection}>
        <View style={styles.headerSection}>
          <Image source={RightImage} style={styles.image} />
          <View>
            <Text style={styles.title}>CariMakan</Text>
            <Text style={styles.detail}>Discover Eatery Around You</Text>
          </View>
          <Image source={RightImage} style={styles.image} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  headerSection: {
    width: '100%',
    height: 150,
    // resizeMode: 'stretch',
    // borderRadius: 120 / 60,
    // textAlign: 'center'
    justifyContent: 'space-between',
    flexDirection: 'row'
    // backgroundColor: 'yellow', // background se che mat iamge nen phai bo di
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    // elevation: 24
  },
  title: {
    paddingLeft: 27,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 0,
    color: 'pink',
    fontSize: 28,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  detail: {
    fontSize: 19
  },
  image: {
    margin: 15,
    height: 22,
    width: 22
  }
})
