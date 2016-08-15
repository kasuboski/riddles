import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

let colors = require('../colors.json');

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor={colors.blueSapphire} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.children}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.maximumBlue,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
  },
});
