import {SCAN_USER} from '../action/actions';
const initialState = {
  scan: {
    status: 0,
    msg: '',
    other_data: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCAN_USER:

      return {
        ...state,
        scan: action.payload,
      };
    default:
      return state;
  }
};
