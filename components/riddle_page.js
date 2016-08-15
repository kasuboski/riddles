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
  constructor(props) {
    super(props);

    this.state = {showAnswer: false};
  }

  showAnswer() {
    this.setState({showAnswer: true});
  }

  render() {
    let renderAnswer = () => {
      if(this.state.showAnswer) {
        return (<Text style={[styles.baseText, styles.answerText]}> A ton.</Text>);
      }
    };

    return (
      <BackgroundView>
        <Text style={[styles.baseText, styles.riddleText]}>
          Forward I am heavy, but backward I am not. What am I?       
        </Text>
        {renderAnswer()}
        <Button onPress={this.showAnswer.bind(this)}>Show Answer</Button>
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
