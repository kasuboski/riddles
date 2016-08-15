import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './reducers.js';

import RiddlePageContainer from './containers/riddle_page_container.js';

let store = createStore(reducer);

class riddles extends Component {
  render() {
    let question = 'Forward I am heavy, but backward I am not. What am I?';
    let answer = 'A ton.';
    let riddle = { question, answer };

    let showAnswer = false;
    let onShowAnswer = () => {showAnswer = true};
    return (
      <Provider store={store}>
        <RiddlePageContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('riddles', () => riddles);
