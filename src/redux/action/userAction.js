import axios from 'axios';
import {LOGIN_USER, SIGNUP_USER, BASE_URL} from './actions';
import {LOGIN, SIGNUP} from '../../utils/AppUrls';
import ApiServices from '../../Services/ApiServices';

export const login = (email = '', password = '') => {
  try {
    return async dispatch => {
      //const res = await axios.get(`${BASE_URL}`);
      const res = await ApiServices.fetchPostWithoutToken(
        LOGIN,
        JSON.stringify({
          email: email,
          password: password,
        }),
      );

      if (res?.token) {
        dispatch({
          type: LOGIN_USER,
          //payload: res.data,
          payload: {
            user_id: res?.user_id,
            role: res?.user?.user_data?.role,
            token: res?.token,
            user_data: {
              name: res?.user?.user_data?.name,
              image: res?.user?.user_data?.logo,
              other_data: {response: res},
            },
          },
        });
      } else {
        dispatch({
          type: LOGIN_USER,
          payload: {
            user_id: 0,
            role: 0,
            token: res?.token,
            user_data: {
              name: '',
              image: '',
              other_data: {response: res},
            },
          },
        });
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const signup = (data = {}) => {
  try {
    return async dispatch => {
      //const res = await axios.get(`${BASE_URL}`);
      const res = await ApiServices.fetchPostWithoutToken(
        SIGNUP,
        JSON.stringify({
          data: data,
        }),
      );
      if (res?.data || res?.user) {
        dispatch({
          type: SIGNUP_USER,
          payload: {
            user_id: 0,
            role: 0,
            token: '',
            user_data: {
              name: '',
              image: '',
              other_data: {response: res},
            },
          },
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};
