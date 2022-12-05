import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

const StartupContainer = () => {
  const navigation = useNavigation();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        navigation.navigate('Login');
        resolve(true);
      }, 3000),
    );
  };

  useEffect(() => {
    init();
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.1,
            marginTop: 150,
          }}>
          <Image
            style={{
              height: 100,
              width: 100,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/logo.png',
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 0.3,
          }}>
          <Image
            style={{
              height: 200,
              width: 200,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/fingerprint_scanner.png',
            }}
            resizeMode={'contain'}
          />
        </View>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
          }}
          resizeMode="contain"
          source={{
            uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/background.png',
          }}>
          <View
            style={{
              flex: 0.6,
              marginTop: 50,
            }}>
            <Image
              style={{
                height: 300,
                width: 300,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/splashmain.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default StartupContainer;
