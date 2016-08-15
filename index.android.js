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

import RiddlePage from './components/riddle_page.js';

class riddles extends Component {
  render() {
    return (
      <RiddlePage />
    );
  }
}

AppRegistry.registerComponent('riddles', () => riddles);
