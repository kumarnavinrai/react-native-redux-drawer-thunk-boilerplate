import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
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

export default function NewScanScreen({navigation}) {
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
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/scan_the_fingerprints.png',
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginLeft: 10,
            marginRight: 20,
            marginTop: 50,
          }}>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 25,
                width: 100,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/left_hand.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Thumb</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Index Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                  
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Middle Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Ring Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Little Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginLeft: 10,
            marginRight: 20,
            marginTop: 50,
          }}>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 25,
                width: 100,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/right_hand.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Thumb</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Index Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Middle Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Ring Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            height: 50,
            borderTopWidth: 1,
            borderTopColor: '#eaeaea',
            borderBottomColor: '#eaeaea',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#979191'}}>Little Finger</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('scan');
              }}
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#7455f6',
                paddingVertical: 0,
                paddingHorizontal: 25,
                elevation: 2,
                backgroundColor: '#e7e7e7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#7455f6',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingBottom: 5,
                  paddingTop: 3,
                }}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/righttick.png',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/scan/round.png',
              }}
              resizeMode={'contain'}
            />
          </View>
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
