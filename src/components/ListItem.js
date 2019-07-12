import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Item from './Item'

export default class ListItem extends React.Component {
  renderItemThis = item => {
    return <Item item={item} />
  }

  render() {
      console.log(this.props)
    return (
        <View style={styles.container}>
            <FlatList
                data={this.props.dataAbove}
                renderItem={this.renderItemThis}
                enableEmptySections={true}
                keyExtractor={(id) => id.id}
            />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
      // height: '100%',
    // alignItems: 'stretch',
    backgroundColor: 'white',
    // justifyContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 10
  }
})
