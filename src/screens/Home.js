import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { create } from 'apisauce'

import Header from '../components/Header'
import ListItem from '../components/ListItem'
import SearchInput from '../components/SearchInput'

const url = 'localhost:3000'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  conponentDidMount() {
    const api = create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' }
    })

    api
      .get('/people')
      .then(response => {
        console.log(response)
        const newData = response.filter(item => item.address.includes())
        this.setState({ isLoading: false, dataSource: newData })
      })
      .catch(error => console.error(error))
  }

  goToDrawer = () => {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header goToDrawer={this.goToDrawer} />
        <Text style={styles.textinside}>Nearby Place</Text>
        <ListItem />
        <SearchInput />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },
  textinside: {
    fontSize: 17,
    paddingLeft: 35
  }
})
