import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native'

import LeftImage from '../assets/images/Group42.png'
import RightImage from '../assets/images/rightCorn.png'
import BorderImage from '../assets/images/newRectangle10.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends Component {
  handlePress = () => {
    this.props.goToDrawer()
  }

  render() {
    // const { navigate } = this.props.navigation
    // console.log({
    //   width: Dimensions.get('window').width,
    //   height: Dimensions.get('window').height
    // })
    return (
      <ImageBackground source={BorderImage} style={styles.headerSection}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            style={styles.borderImage}
            onPress={this.handlePress}
          >
            <Image source={LeftImage} style={styles.image1} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>CariMakan</Text>
            <Text style={styles.detail}>Discover Eatery Around You</Text>
          </View>
          <View style={styles.borderImage}>
            <Image source={RightImage} style={styles.image2} />
          </View>
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
  },
  title: {
    paddingLeft: 27,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 0,
    color: '#F60B8A',
    fontSize: 28,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  detail: {
    fontSize: 19
  },
  image1: {
    marginLeft: 35,
    marginTop: 15,
    height: 20,
    width: 20
    // borderColor: 'white'
  },
  image2: {
    marginRight: 35,
    marginTop: 15,
    height: 20,
    width: 20
    // borderColor: 'white'
  },
  borderImage: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 5
  }
})
