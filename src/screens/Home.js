import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Header from '../components/Header'
import ListItem from '../components/ListItem'
import SearchInput from '../components/SearchInput'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.textinside}>Nearby Place</Text>
        <ListItem />
        <SearchInput />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textinside: {
    fontSize: 17,
    paddingLeft: 35
  }
})
