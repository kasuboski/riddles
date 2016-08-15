import {SHOW_ANSWER, LOAD_RIDDLES_SUCCESS, OUT_OF_RIDDLES, INCREMENT_CURRENT_RIDDLE} from './actions.js';

const initialState = {
  showAnswer: false,
  currentRiddle: 0,
  riddles: [{ question: '', answer: '' }]
};

export function reducer(state = initialState, action) {
  let newState = {};
  switch(action.type) {
    case SHOW_ANSWER:
      newState = {showAnswer: true};
      return {...state, ...newState};
    case LOAD_RIDDLES_SUCCESS:
      newState = {riddles: action.riddles};
      return {...state, ...newState};
    case OUT_OF_RIDDLES:
      //TODO: make show error or something
      newState = {currentRiddle: 0};
      return {...state, ...newState};
    case INCREMENT_CURRENT_RIDDLE:
      newState = {showAnswer: false, currentRiddle: state.currentRiddle + 1};
      return {...state, ...newState};
    default:
      return state;
  }
};
