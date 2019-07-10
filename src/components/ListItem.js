import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Item from './Item'

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Item />
        <Item />
        <Item />
        <Item />
        {/* <Item /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'stretch',
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 10
  }
})
