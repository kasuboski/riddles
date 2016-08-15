import { connect } from 'react-redux';
import { showAnswer, nextRiddle } from '../actions.js';

import RiddlePage from '../components/riddle_page.js';

const mapStateToProps = (state) => {
  return {
    showAnswer: state.showAnswer,
    riddle: state.riddles[state.currentRiddle]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowAnswer: () => { dispatch( showAnswer() ) },
    onNextRiddle: () => { dispatch( nextRiddle() ) }
  };
};

const RiddlePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RiddlePage);

export default RiddlePageContainer;