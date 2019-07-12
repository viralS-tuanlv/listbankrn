import React, { Component } from 'react'
import { StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchInput extends Component {
  handleSearch = (searchValue) => {
    this.props.search(searchValue)
  }

  // pressSearchIcon =() => {
  //   this.props.search()
  // }

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
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 10
  },
  searchIcon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 20
  },
  input: {
    flex: 1,
    paddingTop: 2,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    // marginBottom: 15,
    backgroundColor: '#fff',
    color: '#424242'
  }
})
