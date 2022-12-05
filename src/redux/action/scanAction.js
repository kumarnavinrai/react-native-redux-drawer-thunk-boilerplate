import axios from 'axios';
import {SCAN_USER} from './actions';
import {SCANNEW} from '../../utils/AppUrls';
import ApiServices from '../../Services/ApiServices';

export const savedetails = (data = {}) => {
  try {
    return async dispatch => {
      //const res = await axios.get(`${BASE_URL}`);
      const res = await ApiServices.fetchPostWithoutToken(
        SCANNEW,
        JSON.stringify(data),
      );
      console.log('inside scan action');
      if (res?.status) {
        dispatch({
          type: SCAN_USER,
          payload: {
            status: res?.status,
            msg: res?.msg,
            other_data: {},
          },
        });
      } else {
        dispatch({
          type: SCAN_USER,
          payload: {
            status: res?.status,
            msg: res?.msg,
            other_data: {},
          },
        });
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};
