import React from 'react'
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native'

import Item from './Item'

export default class ListItem extends React.Component {


    renderItemThis = item => {

        return <Item item={item}/>
    }

    render() {
        console.log(this.props)

        if (this.props.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    data={this.props.dataAbove}
                    renderItem={this.renderItemThis}
                    enableEmptySections={true}
                    keyExtractor={(item) => item.id}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // justifyContent: 'center',


        paddingTop: 10,
        position: 'absolute',
        top: 180,
        left: 25,
        right: 25,
        bottom: 100
    },
    flatlist: {
        // top: 200,
        height: 500
    }
})
