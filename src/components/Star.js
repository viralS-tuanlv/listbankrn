import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

// import StarImage from '../assets/images/star.png'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Star extends Component {
  render() {
    return (
      <View style={styles.starSection}>
        {/* <Image source={StarImage} style={styles.starImage} /> */}
        <Icon style={styles.starIcon} name='md-star' size={20} color='yellow' />
        <Icon style={styles.starIcon} name='md-star' size={20} color='yellow' />

        <Icon style={styles.starIcon} name='md-star' size={20} color='yellow' />

        <Icon style={styles.starIcon} name='md-star' size={20} color='yellow' />
        {/* <Icon
          style={styles.starIcon}
          name='md-star-outlined'
          size={20}
          color='yellow'
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  starSection: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    paddingLeft: 22
  },
  starImage: {
    width: 15,
    height: 15,
    borderRadius: 500
  }
})
