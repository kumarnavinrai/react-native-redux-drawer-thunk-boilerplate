import {LOGIN_USER, SIGNUP_USER} from '../action/actions';
// redux/reducers/countReducer.js
const initialState = {
  user: {
    user_id: 0,
    role: 0,
    token: '',
    user_data: {name: '', image: '', other_data: {}},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:

      return {
        ...state,
        user: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
