import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

// import CardView from 'react-native-cardview'

import Star from './Star'

import ImageFood from '../assets/images/Image.png'

export default class Item extends Component {
  render() {
    return (
      <View style={styles.itemSection}>
        <Image source={ImageFood} style={styles.image} />
        <View>
          <Text style={styles.textTitle}>Hummingbied</Text>
          <View style={styles.vote}>
            <Star />
            <Text style={styles.voteNumber}>35</Text>
          </View>
          <Text style={styles.textAddress}>Address</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemSection: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'black',
    // shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 10, height: 10 },
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  image: {
    borderRadius: 500,
    height: 65,
    width: 65,
    backgroundColor: 'grey'
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    // position: 'absolute',
    // top: 10,
    paddingBottom: 5
  },
  vote: {
    // alignItems: 'center'
  },
  voteNumber: {
    color: 'red',
    fontSize: 14,
    backgroundColor: '#666D7C',
    position: 'absolute',
    right: 25
  },
  textAddress: {
    fontSize: 16,
    paddingLeft: 20
  }
})
