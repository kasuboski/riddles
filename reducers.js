import {SHOW_ANSWER} from './actions.js';

const initialState = {
  showAnswer: false,
  riddle: {
    question: 'Forward I am heavy, but backward I am not. What am I?',
    answer: 'A ton.' 
  }
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_ANSWER:
      let newState = {showAnswer: true};
      return {...state, ...newState};
    default:
      return state;
  }
};
