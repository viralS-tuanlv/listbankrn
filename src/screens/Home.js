import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import ListItem from '../components/ListItem'
import SearchInput from '../components/SearchInput'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListItem />
        <SearchInput />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
