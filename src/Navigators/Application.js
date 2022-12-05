import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import { StartupContainer, SignupContainer, LoginContainer } from '@/Containers'
// import { useTheme } from '@/Hooks'
// import MainNavigator from './Main'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import StartupContainer from '../Containers/StartupContainer';
import Loginnew from '../Containers/LoginNewContainer';
import RegisterScreen from '../Containers/SignupContainer';
import DrawerNavigator from './Main';

const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={StartupContainer}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Login"
            component={Loginnew}
            options={{title: ''}}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Dashboard"
            component={DrawerNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ApplicationNavigator;
