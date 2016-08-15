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
        return (
            <Text style={[styles.baseText, styles.answerText]}>{this.props.riddle.answer}</Text>
        );
      }
    };

    let renderButtons = () => {
      return this.props.showAnswer ? 
        <Button style={styles.button} onPress={this.props.onNextRiddle}>Next Riddle</Button>
        :<Button style={styles.button} onPress={this.props.onShowAnswer}>Show Answer</Button>
    };

    return (
      <BackgroundView>
        <Text style={[styles.baseText, styles.riddleText]}>
          {this.props.riddle.question}      
        </Text>
        { renderAnswer() }
        { renderButtons() }
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    textAlign:'center',
    color: colors.seaSerpent,
    fontSize: 24,
    marginLeft: 10,
    marginRight: 10,
  },
  riddleText: {
    marginBottom: 10,
    
  },
  answerText: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});
