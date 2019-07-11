import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = (props) => (
    <View style={styles.tags}>
        <Text style={styles.tagsText}>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    tags: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        padding: 8,
        margin:4
    },
    tagsText: {
        color: 'white'
    }
})

export default ListItem