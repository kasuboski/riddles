import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import BackgroundView from './background_view.js';
import Button from './button.js';

let colors = require('../colors.json');

export default class HomePage extends Component {
  render() {
    return (
      <BackgroundView>
        <Text style={styles.welcome}>
          Welcome to Riddles!
        </Text>
        <Button onPress={()=>console.log("pressed")}>Play!</Button>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    color: colors.seaSerpent,
  },
});
