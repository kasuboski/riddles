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
    let riddle = 'Forward I am heavy, but backward I am not. What am I?';
    let answer = 'A ton.';
    let showAnswer = false;
    let onShowAnswer = () => {showAnswer = true};
    return (
      <RiddlePage showAnswer={showAnswer} riddle={riddle} answer={answer} onShowAnswer={onShowAnswer}/>
    );
  }
}

AppRegistry.registerComponent('riddles', () => riddles);
