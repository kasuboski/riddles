import {SHOW_ANSWER, LOAD_RIDDLES_SUCCESS} from './actions.js';

const initialState = {
  showAnswer: false,
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
    default:
      return state;
  }
};
