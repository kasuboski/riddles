import { connect } from 'react-redux';
import { showAnswer } from '../actions.js';

import RiddlePage from '../components/riddle_page.js';

const mapStateToProps = (state) => {
  return {
    showAnswer: state.showAnswer,
    riddle: state.riddles[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowAnswer: () => { dispatch(showAnswer()) }
  };
};

const RiddlePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RiddlePage);

export default RiddlePageContainer;