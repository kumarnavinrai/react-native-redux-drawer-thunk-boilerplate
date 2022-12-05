import {COUNT_INCRESE, COUNT_DECRESE} from '../action/actions';
// redux/reducers/countReducer.js
const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNT_INCRESE:
      console.log('increment reducer called called');
      console.log(state.count);
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_DECRESE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
