import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class View1 extends Component {
    
    render() {
        return (
            <View style={{flex:1, width:200, height:200}}>
                {this.props.backgroundColor}
            </View>
        );
    }
}