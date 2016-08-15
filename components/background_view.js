import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

let colors = require('../colors.json');

export default class BackgroundView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.bondiBlue,
  },
});
