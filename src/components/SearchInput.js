import React, { Component } from 'react'
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchInput extends Component {
  handleSearch = () => {
    console.log(this)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.searchSection}>
        <TextInput
          onChangeText={this.handleSearch}
          placeholder='Search other place...'
          style={styles.input}
          underlineColorAndroid='transparent'
        />
        <Icon
          style={styles.searchIcon}
          name='ios-search'
          size={20}
          color='#000'
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingTop: 50
  },
  searchIcon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 50
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    backgroundColor: '#fff',
    color: '#424242'
  }
})
