import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Header from '../components/Header'
import ListItem from '../components/ListItem'
import SearchInput from '../components/SearchInput'


import { create } from 'apisauce'
import get from '../utils/get'

// const customData = require('../utils/demo-server/db-15.json')

console.log('in here')

export default class Home extends Component {
  constructor(props) {
    super(props)
    console.log('in there')
    this.state = {
      names: [],
      nameSearch: ''
    }
  }

  componentDidMount() {
    console.log("i'm in componentDidmount")
    const api = create({
      baseURL: 'http://api.dev.bonbon24h.com.vn',
      headers: { 'Content-Type': 'application/json' }
    })

    api.get('/api/v2/branchs?bank_id=10').then(response => {
      console.log(response)
      response.ok === true ? console.log('ok') : console.log('not ok')
      this.setState({ names: response.data.data })

      // const names = response.data.data
      //
    })
    // const peoples = get.fetchPeoples()
    // console.log(peoples)
    // this.setState({
    //   peoples: peoples
    // })

    // const api = create({
    //   baseURL: 'http://localhost:5200',
    //   headers: { 'Content-Type': 'application/json'}
    // })
    //
    // api.get('/people').then(response => console.log(response))
  }

  goToDrawer = () => {
    this.props.navigation.openDrawer()
  }

  search = searchValue => {
      console.log(searchValue)
    const newNames = this.state.names.filter(item => {console.log(item); item.name.includes(searchValue)})
      console.log('new', newNames)
    this.setState({ names: newNames, nameSearch: 'searchValue' })
  }

  render() {
    console.log('in render')
    return (
      <View style={styles.container}>
        <Header goToDrawer={this.goToDrawer} />
        <Text style={styles.textInside}>Nearby Place</Text>
          <SearchInput search={this.search} />
        <ListItem dataAbove={this.state.names} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },
  textInside: {
    fontSize: 17,
    paddingLeft: 35
  }
})
