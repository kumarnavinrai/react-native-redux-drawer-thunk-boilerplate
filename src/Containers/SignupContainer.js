import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
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
import {confirmpasswordValidator} from '../helpers/confirmpasswordValidator';
import {nameValidator} from '../helpers/nameValidator';
import {login, signup} from '../redux/action/userAction';

export default function RegisterScreen({navigation}) {
  const [isLoading, setisLoading] = useState(false);
  const [name, setName] = useState({value: '', error: ''});
  const [phone, setPhone] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmpassword, setConfirmpassword] = useState({
    value: '',
    error: '',
  });
  const responseusersignup = useSelector(state => state.user);

  const dispatch = useDispatch();

  const signupUser = () =>
    dispatch(
      signup({email: email, phone: phone, password: password, name: name}),
    );

  useEffect(() => {
    if (
      responseusersignup?.user?.user_data?.other_data?.response?.status === 200
    ) {
      setName({value: '', error: ''});
      setEmail({value: '', error: ''});
      setPhone({value: '', error: ''});
      setPassword({value: '', error: ''});
      setConfirmpassword({value: '', error: ''});
      setisLoading(false);
      Alert.alert('Signup successful. Please login!');
    }
    if (
      responseusersignup?.user?.user_data?.other_data?.response?.status === 401
    ) {
      setisLoading(false);
      Alert.alert(
        responseusersignup?.user?.user_data?.other_data?.response?.msg,
      );
    }
  }, [responseusersignup]);

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
    setisLoading(true);
    signupUser();
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Image
        style={{
          height: 30,
          width: '100%',
        }}
        source={{
          uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/login/sign_up.png',
        }}
        resizeMode={'contain'}
      />
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Phone number"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone({value: text, error: ''})}
        error={!!phone.error}
        errorText={phone.error}
      />
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
      {isLoading === true ? (
        <ActivityIndicator size={'large'} color="#A6ADB3" />
      ) : null}
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={text => setConfirmpassword({value: text, error: ''})}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{marginTop: 24}}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
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
});
