import {Alert, Dimensions} from 'react-native';

import SimpleToast from 'react-native-simple-toast';
import Global from './Global';
import STRINGS from '../Assets/strings';
const standardWidth = 375.0;
const standardHeight = 767.0;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function getHeaderWithoutToken() {
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return header;
}

export function getHeaderWithToken() {
  // var token = await AsyncStorage.getItem('auth_token');

  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: Global.token,
  };

  return header;
}

export function getHeaderWithTokenFormData() {
  // var token = await AsyncStorage.getItem('auth_token');

  let header = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    authorization: Global.token,
  };
  return header;
}

export function navigationToScreen(ScreenName, props, passObject) {
  console.log(ScreenName, props, passObject, 'on navigaton...');
  props.navigation.navigate(ScreenName, passObject);
}

export function isValidOtp(number) {
  const tempNumber = number.trim();
  let isNumCheck = true;
  for (let count = 0; count < tempNumber.length; count++) {
    const NumberCharacter = tempNumber.charAt(count);
    if (NumberCharacter < '0' || NumberCharacter > '9') {
      isNumCheck = false;
      break;
    }
  }
  return isNumCheck;
}
export function isValidNumber(number) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (number.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}
export function isValidateEmail(emailId) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
  if (re.test(String(emailId).toLowerCase())) {
    return true;
  }
  return false;
}
export function widthScale(dimensionWidth) {
  return (dimensionWidth / standardWidth) * screenWidth;
}

export function heightScale(dimensionHeight) {
  return (dimensionHeight / standardHeight) * screenHeight;
}

export function showToast(message) {
  return SimpleToast.show(message);
}
