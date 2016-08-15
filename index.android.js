/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomePage from './components/home_page.js';

class riddles extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

AppRegistry.registerComponent('riddles', () => riddles);
