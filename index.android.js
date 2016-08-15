import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers.js';
import { loadRiddles } from './actions.js';

import RiddlePageContainer from './containers/riddle_page_container.js';

let store = createStore(reducer, applyMiddleware(thunk));

class riddles extends Component {
  componentDidMount() {
    store.dispatch(loadRiddles());
  }

  render() {
    return (
      <Provider store={store}>
        <RiddlePageContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('riddles', () => riddles);
