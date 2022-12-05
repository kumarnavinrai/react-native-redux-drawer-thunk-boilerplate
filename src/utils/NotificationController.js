import {Component} from 'react';
import {Platform} from 'react-native';

//Firebase-
// import firebase from 'react-native-firebase';
import firebase from '@react-native-firebase/app';

//Api-services
import ApiServices from '../services/ApiServices';

//Api-method
import {UPDATE_FIREBASE_TOKEN} from './AppUrls';

//Global-
import Global from './Global';

//Redux-
import {connect} from 'react-redux';

var channel = '';
class NotificationController extends Component {
  // componentWillUnmount() {
  //     this.createNotificationListeners()
  //     this.onFirebaseNotificatioOpenListener()
  // }

  // componentDidMount() {
  //     // Global.userDetails = this.props.userData
  //     this.createNotificationListeners();
  //     this.onFirebaseNotificatioOpenListener();
  //     this.getInitialNotification();
  //     this.updateFcmToken()
  // }
  updateFcmToken = async () => {
    // if (this.props.isToken) {
    await firebase.messaging().requestPermission();
    firebase
      .messaging()
      .getToken()
      .then(async (response) => {
        Global.firebaseToken = response;
        this.updateFirebaseToken();
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  };

  /**
   * this method is used to update the firebase token on backend
   * @param {*} firebaseToken : it contains the firebase token
   */
  updateFirebaseToken = () => {
    // const body = JSON.stringify({
    //     token: Global.firebaseToken,
    //     enable: true
    // })
    // ApiServices.fetchPutWithToken(UPDATE_FIREBASE_TOKEN, body, this).then(response => {
    // }).catch(error => {
    //     console.log(error)
    // })
  };

  getInitialNotification = async () => {
    await firebase
      .notifications()
      .getInitialNotification((remoteMessage) => {});
  };

  onFirebaseNotificatioOpenListener = async () => {
    firebase.notifications().onNotificationOpened((remoteMessage) => {
      console.log(remoteMessage, 'App.useEffect.onNotificationOpenedListener');
    });
  };
  createNotificationListeners = async () => {
    channel = new firebase.notifications.Android.Channel(
      Global.CHANNEL_ID,
      Global.CHANNEL_NAME,
      firebase.notifications.Android.Importance.High,
    );
    firebase.notifications().onNotification(async (remoteMessage) => {
      firebase.notifications().android.createChannel(channel);
      const localNotif = new firebase.notifications.Notification()
        .setTitle(remoteMessage._title)
        .setBody(remoteMessage._body)
        .setData(remoteMessage._data);
      if (Platform.OS === 'android') {
        localNotif.android.setChannelId(channel._channelId);
      }
      firebase.notifications().displayNotification(localNotif);
    });
  };

  render() {
    return null;
  }
}

let mapstatetoprop = (state) => {
  return {
    // isToken: state.LoginReducer.isToken,
  };
};

export default connect(mapstatetoprop)(NotificationController);
