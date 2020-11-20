import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = { errMess: null, feedbacks:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload;
        return { ...state, feedbacks: state.comments.concat(feedback)};

    default:
      return state;
  }
};