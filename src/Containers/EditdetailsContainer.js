import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Text} from 'react-native-paper';
import Background from '../Components/Background';
import Logo from '../Components/Logo';
import Header from '../Components/Header';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
import BackButton from '../Components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {nameValidator} from '../helpers/nameValidator';
import {savedetails} from '../redux/action/scanAction';

export default function EditDetailsScreen({navigation}) {
  const [isLoading, setisLoading] = useState(false);
  const [name, setName] = useState({value: '', error: ''});
  const [phone, setPhone] = useState({value: '', error: ''});
  const [pincode, setPincode] = useState({value: '', error: ''});
  const [city, setCity] = useState({value: '', error: ''});
  const [state, setState] = useState({value: '', error: ''});
  const [address, setAddress] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});

  const dispatch = useDispatch();
  const responsescan = useSelector(state => state.scan);
  const scanUser = () =>
    dispatch(
      savedetails({
        email: email,
        name: name,
        phone: phone,
        pincode: pincode,
        city: city,
        state: state,
        address: address,
      }),
    );
  useEffect(() => {
    if (responsescan?.scan?.status === 200) {
      setName({value: '', error: ''});
      setPhone({value: '', error: ''});
      setPincode({value: '', error: ''});
      setEmail({value: '', error: ''});
      setCity({value: '', error: ''});
      setState({value: '', error: ''});
      setAddress({value: '', error: ''});
      setisLoading(false);

      navigation.reset({
        index: 0,
        routes: [{name: 'NewScanDetails'}],
      });
    }
    if (responsescan?.scan?.status === 401) {
      setisLoading(false);
      Alert.alert('Not saved!');
    }
  }, [navigation, responsescan]);

  const onSavePressed = () => {
    const nameError = nameValidator(name.value);
    const phoneError = nameValidator(phone.value);
    const emailError = emailValidator(email.value);

    if (emailError || nameError || phoneError) {
      setName({...name, error: nameError});
      setPhone({...phone, error: phoneError});
      setEmail({...email, error: emailError});

      return;
    }
    console.log('save pressed')
    setisLoading(true);
    scanUser();
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
      <ScrollView
        contentContainerStyle={{width: 340, marginTop: 40, paddingBottom: 50}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>
          Details
        </Text>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={!!name.error}
          errorText={name.error}
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
        {isLoading === true ? (
          <ActivityIndicator size={'large'} color="#A6ADB3" />
        ) : null}
        <TextInput
          label="Phone Number *"
          returnKeyType="done"
          value={phone.value}
          onChangeText={text => setPhone({value: text, error: ''})}
          error={!!phone.error}
          errorText={phone.error}
        />
        <TextInput
          label="Pincode"
          returnKeyType="done"
          value={pincode.value}
          onChangeText={text => setPincode({value: text, error: ''})}
          error={!!pincode.error}
          errorText={pincode.error}
        />
        <TextInput
          label="City"
          returnKeyType="done"
          value={city.value}
          onChangeText={text => setCity({value: text, error: ''})}
          error={!!city.error}
          errorText={city.error}
        />
        <TextInput
          label="State"
          returnKeyType="done"
          value={state.value}
          onChangeText={text => setState({value: text, error: ''})}
          error={!!state.error}
          errorText={state.error}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          label="Address"
          returnKeyType="done"
          value={address.value}
          onChangeText={text => setAddress({value: text, error: ''})}
          error={!!address.error}
          errorText={address.error}
        />
        <Button
          mode="contained"
          onPress={onSavePressed}
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
