import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
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

export default function ChangePasswordScreen({navigation}) {
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
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Image
        style={{
          height: 30,
          width: '100%',
        }}
        source={{
          uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/newscan/change_password.png',
        }}
        resizeMode={'contain'}
      />
      <TextInput
        label="Email ID"
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
        label="Old Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="New Password"
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
        Save
      </Button>
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
