import { ADD_SCORE, REMOVE_ALL_SCORES } from '../actionTypes/actionType';
import { PERSIST_REHYDRATE } from 'redux-offline/lib/constants';

const defaultState = {
  scores: []
};

export default function ets2020Reducer(state, action) {
  const currentState = state || defaultState;
  switch (action.type) {
    case ADD_SCORE: {
      return {
        ...state,
        'scores': [...state.scores, action.score]
      };
    }
    case REMOVE_ALL_SCORES: {
      return {
        ...state,
        'scores': []
      };
    }
    default:
      return currentState;
  }
}
