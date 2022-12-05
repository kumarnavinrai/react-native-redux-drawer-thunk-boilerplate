import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/action/countAction';
import {login, signup} from '../redux/action/userAction';

const GetStartedContainer = () => {
  const navigation = useNavigation();
  //const {movies} = useSelector(state => state.moviesReducer);
  const temp = useSelector(state => state.count);
  const tempuser = useSelector(state => state.user);
  const dispatch = useDispatch();
  const tempIncrement = () => dispatch(increment());
  const tempUser = () => dispatch(login());

  const init = async () => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     navigation.navigate('Login');
    //     resolve(true);
    //   }, 3000),
    // );
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('temp temp temp temp temp temp');
      console.log(temp);
    }, 2000);
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <View style={{flex: 0.2}}>
        <Image
          style={{
            height: 25,
            width: 300,
          }}
          source={{
            uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/getstarted/how_to_get_best_fingerprint.png',
          }}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 0.4}}>
        <Image
          style={{
            height: 150,
            width: 200,
          }}
          source={{
            uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/getstarted/getstartedimg.png',
          }}
          resizeMode={'contain'}
        />
      </View>
      {/* start box */}
      <View
        style={{
          flex: 0.4,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text
            style={{
              color: '#7455f6',
              fontSize: 32,
              fontWeight: 'bold',
              lineHeight: 30,
              textAlignVertical: 'center',
            }}>
            {'\u2022'}
          </Text>
          <Text style={{flex: 1, paddingLeft: 5, color: '#343638'}}>
            Use fingerprint scanner for accuracy{'temp' + temp.count}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text
            style={{
              color: '#7455f6',
              fontSize: 32,
              fontWeight: 'bold',
              lineHeight: 30,
              textAlignVertical: 'center',
            }}>
            {'\u2022'}
          </Text>
          <Text style={{flex: 1, paddingLeft: 5, color: '#343638'}}>
            Keep you finger on the center of the scanner{' '}
            {'temp user' + tempuser?.user?.user_id}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text
            style={{
              color: '#7455f6',
              fontSize: 32,
              fontWeight: 'bold',
              lineHeight: 30,
              textAlignVertical: 'center',
            }}>
            {'\u2022'}
          </Text>
          <Text style={{flex: 1, paddingLeft: 5, color: '#343638'}}>
            Keep you finger on the center of the scanner
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text
            style={{
              color: '#7455f6',
              fontSize: 32,
              fontWeight: 'bold',
              lineHeight: 30,
              textAlignVertical: 'center',
            }}>
            {'\u2022'}
          </Text>
          <Text style={{flex: 1, paddingLeft: 5, color: '#343638'}}>
            You can also use camera for fingerprint scanning
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text
            style={{
              color: '#7455f6',
              fontSize: 32,
              fontWeight: 'bold',
              lineHeight: 30,
              textAlignVertical: 'center',
            }}>
            {'\u2022'}
          </Text>
          <Text style={{flex: 1, paddingLeft: 5, color: '#343638'}}>
            While using camera for scanning use ink to make prints on white
            papers for better capture of the fingerprints
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 40}}>
          <Text
            style={{
              color: '#7455f6',
              fontSize: 32,
              fontWeight: 'bold',
              lineHeight: 30,
              textAlignVertical: 'center',
            }}>
            {'\u2022'}
          </Text>
          <Text style={{flex: 1, paddingLeft: 5, color: '#343638'}}>
            You have to submit 3 image or scans for each finger
          </Text>
        </View>
      </View>
      {/* end box */}
      {/* start box */}
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddScanDetails');
          }}>
          <Image
            style={{
              height: 100,
              width: 300,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/getstarted/getstartedbtn.png',
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      {/* end box */}
    </View>
  );
};

export default GetStartedContainer;
