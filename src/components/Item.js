import React, {Component} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

// import CardView from 'react-native-cardview'

import Star from './Star'

// import ImageFood from '../assets/images/circle-cropped2.png'

export default class Item extends Component {
    render() {
        const {item} = this.props


        return (
            <View style={styles.itemSection}>
                <View style={styles.borderImage}>
                    <Image source={{uri: item.item.avatar}} style={styles.image}/>
                </View>
                <View>
                    <Text style={styles.textTitle}>{item.item.name}</Text>
                    <View style={styles.vote}>
                        <Star/>
                        <Text style={styles.voteNumber}>{item.item.votePeople}</Text>
                    </View>
                    <Text style={styles.textAddress}>{item.item.address}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemSection: {
        alignItems: 'center',
        padding: 5,
        borderRadius: 4,
        backgroundColor: '#fff',

        marginBottom: 16,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 10
    },
    image: {
        borderRadius: 33,
        height: 60,
        width: 60,
        backgroundColor: 'grey'
    },
    borderImage: {

        height: 64,
        width: 64,
        borderRadius: 37,
        backgroundColor: '#D2C3CB',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 20,
        // position: 'absolute',
        // top: 10,
        paddingBottom: 5
    },
    vote: {
        // alignItems: 'center'
    },
    voteNumber: {
        color: 'red',
        fontSize: 14,
        backgroundColor: '#D2C3CB',
        position: 'absolute',
        right: 25,
        paddingLeft: 4,
        paddingRight: 4
    },
    textAddress: {
        fontSize: 16,
        paddingLeft: 20
    }
})
