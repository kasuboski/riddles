export const SHOW_ANSWER = 'SHOW_ANSWER';
export const LOAD_RIDDLES_SUCCESS = 'LOAD_RIDDLES_SUCCESS';

export function showAnswer() {
  return { type: SHOW_ANSWER };
}

function loadRiddlesSuccess(riddles) {
  return { type: LOAD_RIDDLES_SUCCESS, riddles: riddles };
}

export function loadRiddles() {
  return (dispatch) => {
    dispatch(loadRiddlesSuccess([{
      question: 'Forward I am heavy, but backward I am not. What am I?',
      answer: 'A ton.' 
    }]))
  };
}