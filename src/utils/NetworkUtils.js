import NetInfo from '@react-native-community/netinfo';
import SimpleToast from 'react-native-simple-toast';
import STRINGS from '../Assets/strings';

export default class NetworkUtils {
  static async isNetworkAvailable() {
    const response = await NetInfo.fetch();
    if (response.isConnected) {
      return true;
    } else {
      SimpleToast.show(STRINGS.PLEASE_PROVIDE_INTERNET_CONNECTION);
      return false;
    }
  }
}
