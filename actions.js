export const SHOW_ANSWER = 'SHOW_ANSWER';
export const LOAD_RIDDLES_SUCCESS = 'LOAD_RIDDLES_SUCCESS';
export const OUT_OF_RIDDLES = 'OUT_OF_RIDDLES';
export const INCREMENT_CURRENT_RIDDLE = 'INCREMENT_CURRENT_RIDDLE';

export function showAnswer() {
  return { type: SHOW_ANSWER };
}

function loadRiddlesSuccess(riddles) {
  return { type: LOAD_RIDDLES_SUCCESS, riddles: riddles };
}

function outOfRiddles() {
  return { type: OUT_OF_RIDDLES };
}

function incrementCurrentRiddle() {
  return { type: INCREMENT_CURRENT_RIDDLE };
}

export function loadRiddles() {
  return (dispatch) => {
    let riddles = require('./riddles.json');
    dispatch( loadRiddlesSuccess(riddles) );
  };
}

export function nextRiddle() {
  return (dispatch, getState) => {
    let state = getState();
    //if out of riddles
    if(state.currentRiddle + 1 >= state.riddles.length) {
      dispatch( outOfRiddles() );
    } else {
      dispatch( incrementCurrentRiddle() );
    }
  };
}