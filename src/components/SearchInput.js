import React, { Component } from 'react'
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchInput extends Component {
  handleSearch = () => {
    console.log(this)
  }

  render() {
    return (
      <View style={styles.searchSection}>
        <TextInput
          onChangeText={this.handleSearch}
          placeholder='Search other place...'
          style={styles.input}
          underlineColorAndroid='transparent'
        />
        <Icon
          style={styles.searchIcon}
          name='ios-search'
          size={25}
          color='#000'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingTop: 10,
    marginLeft: 35,
    marginRight: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  searchIcon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 50
  },
  input: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 10,
    marginLeft: 30,
    backgroundColor: '#fff',
    color: '#424242'
  }
})
