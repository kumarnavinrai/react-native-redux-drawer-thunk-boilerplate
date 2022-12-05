import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Background from '../Components/Background';
import Logo from '../Components/Logo';
import Header from '../Components/Header';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
import BackButton from '../Components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {login, signup} from '../redux/action/userAction';

export default function LoginScreen({navigation}) {
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const dispatch = useDispatch();
  const responseuserlogin = useSelector(state => state.user);
  const loginUser = () => dispatch(login(email, password));

  useEffect(() => {
    if (
      responseuserlogin?.user?.user_data?.other_data?.response?.status === 200
    ) {
      setEmail({value: '', error: ''});
      setPassword({value: '', error: ''});
      setisLoading(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    }
    if (
      responseuserlogin?.user?.user_data?.other_data?.response?.status === 401
    ) {
      setisLoading(false);
      Alert.alert(
        responseuserlogin?.user?.user_data?.other_data?.response?.msg,
      );
    }
  }, [navigation, responseuserlogin]);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    setisLoading(true);
    loginUser();

 
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <ImageBackground
        style={{
          width: '100%',
          height: 300,
        }}
        resizeMode="contain"
        source={{
          uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/rectangle_41326.png',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
          width: '100%',
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
      {isLoading === true ? (
        <ActivityIndicator size={'large'} color="#A6ADB3" />
      ) : null}
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => {
            alert('Forgot password');
            //navigation.navigate('ResetPasswordScreen');
          }}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
