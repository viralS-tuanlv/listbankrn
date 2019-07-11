import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'

// import StarImage from '../assets/images/star.png'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Star extends Component {
  randomStar = () => {
    let times = Math.floor(Math.random() * 5) + 1
    console.log(times)
    let data = []
    for (let i = 0; i < times; i++) {
      data.push(i)
    }

    console.log(data)
    // let props = {
    //   styles.starIcon ,name='md-star', size={ 20}, color='yellow'
    // }
    // let icon = (
    //   <Icon style={styles.starIcon} name='md-star' size={20} color='yellow' />
    // )

    return data.map(item => (
      <Icon key={item} name='md-star' size={16} color='orange' />
    ))
  }

  render() {
    return <View style={styles.starSection}>{this.randomStar()}</View>
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
