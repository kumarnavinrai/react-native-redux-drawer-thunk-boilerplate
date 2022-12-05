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

const DashboardContainer = () => {
  const navigation = useNavigation();

  const init = async () => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     navigation.navigate('Login');
    //     resolve(true);
    //   }, 3000),
    // );
  };

  useEffect(() => {
    init();
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
            height: 50,
            width: 300,
          }}
          source={{
            uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/wellness_to_fingerprint_scanner.png',
          }}
          resizeMode={'contain'}
        />
      </View>
      {/* start box */}
      <View
        elevation={5}
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#cccccc',
          shadowOpacity: 0.9,
          shadowRadius: 2,
          shadowOffset: {
            height: 0.5,
            width: 0.5,
          },
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{
              height: 70,
              width: 70,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/rectangle_58.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 40,
                width: 40,
                margin: 15,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/fingerscanimg.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
        </View>
        <TouchableOpacity
          style={{
            flex: 0.7,
            flexDirection: 'row',
          }}
          onPress={() => {
            navigation.navigate('GetingStarted');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                marginRight: 40,
              }}>
              Submit new Scans
            </Text>
            <Image
              style={{
                height: 20,
                width: 20,
                alignSelf: 'flex-end',
                marginRight: 30,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/arrow.png',
              }}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* end box */}
      {/* start box */}
      <View
        elevation={5}
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#cccccc',
          shadowOpacity: 0.9,
          shadowRadius: 2,
          shadowOffset: {
            height: 0.5,
            width: 0.5,
          },
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{
              height: 70,
              width: 70,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/rectangle_58.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 40,
                width: 40,
                margin: 15,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/oldreports.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              marginRight: 40,
            }}>
            Old Reports
          </Text>
          <Image
            style={{
              height: 20,
              width: 20,
              alignSelf: 'flex-end',
              marginRight: 30,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/arrow.png',
            }}
            resizeMode={'contain'}
          />
        </View>
      </View>
      {/* end box */}
      {/* start box */}
      <View
        elevation={5}
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#cccccc',
          shadowOpacity: 0.9,
          shadowRadius: 2,
          shadowOffset: {
            height: 0.5,
            width: 0.5,
          },
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{
              height: 70,
              width: 70,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/rectangle_58.png',
            }}
            resizeMode={'contain'}>
            <Image
              style={{
                height: 40,
                width: 40,
                margin: 15,
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/modifyscan.png',
              }}
              resizeMode={'contain'}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              marginRight: 40,
            }}>
            Modify Scans
          </Text>
          <Image
            style={{
              height: 20,
              width: 20,
              alignSelf: 'flex-end',
              marginRight: 30,
            }}
            source={{
              uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/dashboard/arrow.png',
            }}
            resizeMode={'contain'}
          />
        </View>
      </View>
      {/* end box */}
      <View style={{flex: 0.2}}></View>
      <View style={{flex: 0.2}}></View>
    </View>
  );
};

export default DashboardContainer;
