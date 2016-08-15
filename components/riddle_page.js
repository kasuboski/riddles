import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import BackgroundView from './background_view.js';
import Button from './button.js';

let colors = require('../colors.json');

export default class RiddlePage extends Component {
  render() {
    let renderAnswer = () => {
      if(this.props.showAnswer) {
        return (<Text style={[styles.baseText, styles.answerText]}>{this.props.answer}</Text>);
      }
    };

    return (
      <BackgroundView>
        <Text style={[styles.baseText, styles.riddleText]}>
          {this.props.riddle}      
        </Text>
        {renderAnswer()}
        <Button onPress={this.props.onShowAnswer}>Show Answer</Button>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    textAlign:'center',
    color: colors.seaSerpent,
    fontSize: 24,
  },
  riddleText: {
    marginBottom: 10,
    
  },
  answerText: {
    marginBottom: 10,
  },
});
