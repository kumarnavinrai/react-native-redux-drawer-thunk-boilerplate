import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const [inProgress, onChangeInProgress] = useState(false)
  const [email, onChangeEmail] = useState('')
  const [emailError, onChangeEmailError] = useState('')

  const [password, onChangePassword] = useState('')
  const [passwordError, onChangePasswordError] = useState('')

  const { t } = useTranslation()

  const validateEmail = email => {
    var res = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )

    return res?.length === undefined ? false : true
  }

  const validatePassword = password => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return re.test(password)
  }

  const onLogin = async () => {
    switch (true) {
      case validateEmail(email) === false:
        onChangeEmailError('Not valid email')
        return false
      case validatePassword(password) === false:
        onChangePasswordError('Not valid password')
        return false

      default:
        break
    }

    onChangeEmailError('')
    onChangePasswordError('')
    onChangeInProgress(true)
    await new Promise(resolve =>
      setTimeout(() => {
        navigateAndSimpleReset('Main')
        resolve(true)
      }, 3000),
    )
    
  }

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 10000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    //navigateAndSimpleReset('Signup')
  }

  const navigateToSignUp = () => {
    navigateAndSimpleReset('Signup')
  }

  const navigateTotermsAndConditions = () => {
    alert('Terms and conditions')
    //navigateAndSimpleReset('Signup')
  }

  useEffect(() => {
    init()
  })

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }}
      extraScrollHeight={100}
      enableOnAndroid={true}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <ImageBackground
              style={{
                width: '100%',
                height: 300,
              }}
              resizeMode="contain"
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/rectangle_41326.png',
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{
                    height: 200,
                    width: 200,
                  }}
                  source={{
                    uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/finger_print_isometric.png',
                  }}
                  resizeMode={'contain'}
                />
              </View>
            </ImageBackground>
            <Image
              style={{
                height: 30,
                width: '60%',
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/welcome_to_fingerprint_scanner.png',
              }}
              resizeMode={'contain'}
            />
            <Image
              style={{
                height: 20,
                width: '50%',
              }}
              source={{
                uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/ready_to_get_started.png',
              }}
              resizeMode={'contain'}
            />
            <Text style={{ textAlign: 'left', width: '80%', marginTop: 20 }}>
              Email
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email Id"
              onChangeText={e => {
                onChangeEmail(e)
              }}
              value={email}
            />
            {emailError !== '' ? (
              <>
                <Text
                  style={{
                    textAlign: 'left',
                    width: '80%',
                    marginTop: 5,
                    color: '#FF0000',
                  }}
                >
                  Not valid email
                </Text>
              </>
            ) : null}

            <Text style={{ textAlign: 'left', width: '80%' }}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter Password"
              onChangeText={onChangePassword}
              value={password}
            />
            {passwordError !== '' ? (
              <>
                <Text
                  style={{
                    textAlign: 'left',
                    width: '80%',
                    marginTop: 5,
                    color: '#FF0000',
                  }}
                >
                  Not valid password
                </Text>
              </>
            ) : null}

            <TouchableOpacity
              onPress={onLogin}
              style={{
                height: 80,
                width: '100%',
              }}
            >
              <Image
                style={{
                  height: 100,
                  width: '100%',
                }}
                source={{
                  uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/login_btn.png',
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToSignUp}
              style={{
                height: 20,
                width: '70%',
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: '100%',
                }}
                source={{
                  uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/group_144889.png',
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateTotermsAndConditions}
              style={{
                height: 20,
                width: '70%',
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: '100%',
                }}
                source={{
                  uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/flight_search.png',
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        {inProgress ? (
          <>
            <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
          </>
        ) : null}
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#b3b3b3',
    width: '80%',
    padding: 10,
  },
})

export default LoginContainer
