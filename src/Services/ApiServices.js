import {AsyncStorage} from 'react-native';

import Configuration from '../utils/Configuration';
import Global from '../utils/Global';

//NetworkConnection-
import NetworkUtils from '../utils/NetworkUtils';

//Utils-
import {
  getHeaderWithoutToken,
  getHeaderWithToken,
  getHeaderWithTokenFormData,
} from '../utils/Utils';

//BaseUrl-
const BASE_URL = Configuration.BASE_URL;

//Logs-
const API_SERVICES = 'ApiServices=>>>>>>';
const API_ERROR = 'ApiError=>>>>>';

const ApiServices = {
  fetchGet: async function (url) {
    // console.log(API_SERVICES, 'url=>>>', url);
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected === true) {
      return fetch(BASE_URL + url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(responseJson => {
          // console.log(API_SERVICES, 'response=>>>>', responseJson);
          return responseJson;
        })
        .catch(error => {
          console.log('error=>>', error);
        });
    }
    // else{
    //   return isConnected;
    // }
  },

  fetchPostWithoutToken: async function (url, body) {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      console.log(API_SERVICES + 'url ==>>', BASE_URL + url, '  body==', body);

      let headers = getHeaderWithoutToken();
      return fetch(BASE_URL + url, {
        method: 'POST',
        body: body,

        headers: headers,
      })
        .then(response => response.json())
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          console.log(API_ERROR, error);
        });
    }
  },

  fetchGetWithToken: async function (url) {
    Global.token = await AsyncStorage.getItem('auth_token');
    console.log(',BASE_URL + url', BASE_URL + url);
    let headers = getHeaderWithToken();
    console.log('header : ==========>>>>>>>> 1: ' + JSON.stringify(headers));
    //let headers = getHeaderWithTokenFormData()
    // console.log(API_SERVICES, 'url=>>>', url, 'token==>', headers);
    return fetch(BASE_URL + url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        console.log(response.status, 'my status');
        if (response?.status === 401) {
          return {};
        }
        return response.json();
      })
      .then(responseJson => {
        // console.log(API_SERVICES, 'response=>>>>', responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log('error=>>', error);
      });
  },

  fetchDeleteWithToken: async function (url) {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      Global.token = await AsyncStorage.getItem('auth_token');
      let headers = getHeaderWithToken();

      // console.log(API_SERVICES, 'url=>>>', url);
      return fetch(BASE_URL + url, {
        method: 'DELETE',
        headers: headers,
      })
        .then(response => {
          if (response?.status === 401) {
            return {};
          }
          return response.json();
        })
        .then(responseJson => {
          // console.log(API_SERVICES, 'response=>>>>', responseJson);

          return responseJson;
        })
        .catch(error => {
          console.log('error=>>', error);
        });
    }
    // else{
    //   return isConnected;
    // }
  },
  fetchPostWithToken: async function (url, body) {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {

      Global.token = await AsyncStorage.getItem('auth_token');
      let headers = getHeaderWithToken();

      // console.log(API_SERVICES + 'url ==>>', BASE_URL + url, '  body==', body);

      return fetch(BASE_URL + url, {
        method: 'POST',
        body: body,
        headers: headers,
      })
        .then(response => {
          if (response?.status === 401) {
            return {};
          }
          return response.json();
        })
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          console.log(API_ERROR, error);
        });
    }
    // else{
    //   return isConnected;
    // }
  },
  fetchPutWithToken: async function (url, body) {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      Global.token = await AsyncStorage.getItem('auth_token');
      let headers = getHeaderWithToken();

      // console.log(API_SERVICES + 'url ==>>', BASE_URL + url, '  body==', body);

      return fetch(BASE_URL + url, {
        method: 'PUT',
        body: body,
        headers: headers,
      })
        .then(response => {
          if (response?.status === 401) {
            return {};
          }
          return response.json();
        })
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          console.log(API_ERROR, error);
        });
    }
    // else{
    //   return isConnected;
    // }
  },

  fetchPutWithOutToken: async function (url, body) {
    // console.log(API_SERVICES + 'url ==>>', BASE_URL + url, '  body==', body);
    const isConnected = await NetworkUtils.isNetworkAvailable();
    let headers = getHeaderWithoutToken();
    if (isConnected) {
      return fetch(BASE_URL + url, {
        method: 'PUT',
        body: body,
        headers: headers,
      })
        .then(response => {
          if (response?.status === 401) {
            return {};
          }
          return response.json();
        })
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          console.log(API_ERROR, error);
        });
    }
    // else{
    //   return isConnected;
    // }
  },

  fetchPostFormDataWithToken: async function (url, body) {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      Global.token = await AsyncStorage.getItem('auth_token');
      let headers = getHeaderWithTokenFormData();

      console.log(
        API_SERVICES + 'url ==>>',
        BASE_URL + url,
        '  body==',
        body,
        'headers----',
        headers,
      );
      //console.log('Base URL', BASE_URL, url);
      //console.log('BODY', JSON.stringify(body), body);
      console.log('Headers', headers);
      return fetch(BASE_URL + url, {
        method: 'POST',
        body: body,
        headers: headers,
      })
        .then(response => {
          if (response?.status === 401) {
            return {};
          }
          return response.json();
        })
        .then(responseJson => {
          return responseJson;
        })
        .catch(error => {
          console.log(API_ERROR, error);
        });
    }
    // else{
    //   return isConnected;
    // }
  },
};

export default ApiServices;
