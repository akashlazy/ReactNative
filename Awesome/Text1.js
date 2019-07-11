import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Text1 extends Component {

    render() {
        return (
            <Text style={{ padding: 10, fontSize: 42 }}>
                {this.props.text}
            </Text>
        );
    }
}