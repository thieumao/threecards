import { UPDATE_ETS2020, UPDATE_PART, ADD_PROJECT_ACTION, UPDATE_DATA_ACTION, TEST_ACTION, INCREASE_ACTION } from '../actionTypes/actionType';
import { PERSIST_REHYDRATE } from 'redux-offline/lib/constants';

const defaultState = {
  number: 1,
  rehydrated: false,
  test1: { name: 'Test 1' },
  test2: { name: 'Test 2' },
  test3: { name: 'Test 3' },
  test4: { name: 'Test 4' },
  test5: { name: 'Test 5' },
  test6: { name: 'Test 6' },
  test7: { name: 'Test 7' },
  test8: { name: 'Test 8' },
  test9: { name: 'Test 9' },
  test10: { name: 'Test 10' },
};

export default function ets2020Reducer(state, action) {
  const currentState = state || defaultState;
  switch (action.type) {
    // case PERSIST_REHYDRATE: {
    //   console.log('>>>>>>> PERSIST_REHYDRATE');
    //   return {
    //     ...state,
    //     rehydrated: true
    //   };
    // }
    case ADD_PROJECT_ACTION: {
      return {
        ...state,
        details: {
          ...state.details,
          [action.key]: action.value
        }
      };
    }
    case UPDATE_DATA_ACTION: {
      if (action.key) {
        return {
          ...state,
          [action.key]: action.value,
        };
      }
      return {
        ...state,
        ...action.value,
      };
    }
    case INCREASE_ACTION: {
      console.log('Vao roi >>>>>> ');
      console.log(action.value);
      if (action.key) {
        return {
          ...state,
          [action.key]: action.value + 1,
        };
      }
      return {
        ...state,
        ...action.value + 1,
      };
    }
    case TEST_ACTION: {
      if (action.key) {
        return {
          ...state,
          [action.key]: action.value,
        };
      }
      return {
        ...state,
        ...action.value,
      };
    }
    case UPDATE_ETS2020: {
      if (action.key) {
        return {
          ...state,
          [action.key]: action.value,
        };
      }
      return {
        ...state,
        ...action.value,
      };
    }
    case UPDATE_PART: {
      const value = action.value;
      return {
        ...state,
        [action.testName]: {
          ...state[action.testName],
          [action.partName]: value,
        },
      };
    }
    default:
      return currentState;
  }
}
