import React, {Component} from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'

import Header from '../components/Header'
import ListItem from '../components/ListItem'
import SearchInput from '../components/SearchInput'

import {create} from 'apisauce'


export default class Home extends Component {
    constructor(props) {
        super(props)
        // console.log('in there')
        this.state = {
            names: [],
            isLoading: true,
            nameSearch: ''
        }
    }

    componentDidMount() {
        // console.log("i'm in componentDidmount")
        const api = create({
            baseURL: 'http://api.dev.bonbon24h.com.vn',
            headers: {'Content-Type': 'application/json'}
        })

        api.get('/api/v2/branchs?bank_id=10').then(response => {
            // console.log(response)
            response.ok === true ? console.log('ok') : console.log('not ok')


            // let dataNeedAdd = require('../utils/demo-server/db-15.json').people
            //
            // console.log(dataNeedAdd)
            // let restDatatoAdd = dataNeedAdd.people.map((item) => {
            //     return {
            //         a, b, ...c
            //     }
            // })
            //
            // console.log(restDatatoAdd)
            //
            let newdata = response.data.data.map((item) => {
                return {
                    ...item,
                    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg",
                    voteNumber: 2,
                    votePeople: 19,
                    address: "504 Jones Lane"
                }
            })



            this.setState({names: newdata, isLoading: false})

            // const datafetched = response.data.data
            // const newdata = datafetched.forEach((item) => item = [...item, ])
            // console.log(newdata, 'new')
        }).catch(() => setState({isLoading: true}))
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
        if (searchValue === '') {
            this.setState({names: this.state.names})
        }
        // console.log(searchValue)
        const newNames = this.state.names.filter(item => item.name.includes(searchValue))
        // console.log('new', newNames)


        this.setState( {names: newNames, nameSearch: 'searchValue'})
    }

    render() {
        // const customData = require('../utils/demo-server/db-15.json')
        // console.log(customData)

        console.log('in render')


        return (
            <View style={styles.container}>
                <Header goToDrawer={this.goToDrawer}/>
                <Text style={styles.textInside}>Nearby Place</Text>

                <ListItem dataAbove={this.state.names} isLoading={this.state.isLoading}/>
                <SearchInput search={this.search}/>
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
