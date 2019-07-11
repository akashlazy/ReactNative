import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/Component/ListItem/ListItem'

import Text1 from './Text1';
import View1 from './View1';

export default class ABC extends Component {

  state = {
    name: '',
    places: []
  }
  funcChange = (change) => {
    this.setState({
      name: change
    });
  }

  buttonPress = () => {
    if (this.state.name.trim === "") {
      return;
    }
    this.setState(prev => {
      return {
        places: prev.places.concat(prev.name)
      }
    })
  }

  render() {

    const output = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));

    return (
      < View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={{ padding: 8 }}>Hello {this.state.places}</Text>
        <Text style={{ padding: 8 }}>Hello {this.state.name}</Text>
        <Text1 style={{ padding: 8 }} text="akash"> </Text1>

        <View style={styles.innerContainer}>
          <TextInput style={styles.placeInput}
            value={this.state.name}
            placeholder="Enter Name"
            onChangeText={this.funcChange}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.buttonPress}
          />
        </View>
        <View style={styles.placeTags}>
          {output}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:16,    
  },
  placeInput: {
    width:'80%',
    borderColor: 'red',
    borderWidth: 1,
    padding:8,
  },
  placeButton: {
    width:'25%',
    padding:4,
  },
  placeTags: {
    flexDirection:'row'
  }
});
