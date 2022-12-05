import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../Components/Background';
import Logo from '../Components/Logo';
import Header from '../Components/Header';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
import BackButton from '../Components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import {confirmpasswordValidator} from '../helpers/confirmpasswordValidator';
import {nameValidator} from '../helpers/nameValidator';

export default function ActionScanScreen({navigation}) {
  const [name, setName] = useState({value: '', error: ''});
  const [phone, setPhone] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmpassword, setConfirmpassword] = useState({
    value: '',
    error: '',
  });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmpasswordError = confirmpasswordValidator(
      confirmpassword.value,
      password.value,
    );
    if (emailError || passwordError || nameError || confirmpasswordError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      setConfirmpassword({...confirmpassword, error: confirmpasswordError});
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <BackButton goBack={navigation.goBack} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 50,
          }}>
          <Image
            style={{
              height: 30,
              width: 300,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/left_hand.png',
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop:20,
            marginBottom:20,
          }}>
          <Image
            style={{
              height: 20,
              width: 300,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/thumb.png',
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <ImageBackground
            style={{
              height: 250,
              width: '100%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/rectangle_147999.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 50,
                width: 70,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/logo_upload.png',
              }}
              resizeMode={'contain'}
            />
            <Image
              style={{
                height: 50,
                width: 200,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/take_the_photograph_of_your_fingerprint.png',
              }}
              resizeMode={'contain'}
            />
            <Image
              style={{
                height: 40,
                width: 70,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/reupload.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop:20,
          }}>
          <ImageBackground
            style={{
              height: 100,
              width: '100%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/rectangle_thumb.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/thumbpic.png',
              }}
              resizeMode={'contain'}
            />
            <Image
              style={{
                height: 30,
                width: 40,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/left_side.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
          <ImageBackground
            style={{
              height: 100,
              width: '100%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/rectangle_thumb.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/thumbpic.png',
              }}
              resizeMode={'contain'}
            />
            <Image
              style={{
                height: 25,
                width: 30,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/centre.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
          <ImageBackground
            style={{
              height: 100,
              width: '100%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/rectangle_thumb.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/thumbpic.png',
              }}
              resizeMode={'contain'}
            />
            <Image
              style={{
                height: 30,
                width: 40,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/right_side.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
        </View>
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{marginTop: 24}}>
          Save
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
