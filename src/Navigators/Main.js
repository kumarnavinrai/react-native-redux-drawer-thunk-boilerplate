import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import DashboardContainer from '../Containers/dashboard';
import {DefaultTheme} from 'react-native-paper';
import ChangePasswordScreen from '../Containers/ChangePasswordContainer';
import GetStartedContainer from '../Containers/getstarted';
import EditDetailsScreen from '../Containers/EditdetailsContainer';
import NewScanScreen from '../Containers/NewScanContainer';
import EditScanScreen from '../Containers/EditScanContainer';
import ActionScanScreen from '../Containers/ActionScanContainer';

export const theme = {
  ...DefaultTheme,
};

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function NotificationsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notifications Page</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Page</Text>
    </View>
  );
}

// // @refresh reset
// const MainNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={ExampleContainer}
//         options={{
//           tabBarIconStyle: {display: 'none'},
//           tabBarLabelPosition: 'beside-icon',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const scanStack = createStackNavigator();

function ScanHeap() {
  return (
    <scanStack.Navigator
      initialRouteName={'gettingStarted'}
      screenOptions={{headerShown: false}}>
      <scanStack.Screen
        name="gettingStarted"
        component={GetStartedContainer}
        options={{title: ''}}
      />
      <scanStack.Screen name="AddScanDetails" component={EditDetailsScreen} />
      <scanStack.Screen name="NewScanDetails" component={NewScanScreen} />
    </scanStack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={DashboardContainer}
      />
      <Drawer.Screen
        name="Submit new prints"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={ChangePasswordScreen}
      />
      <Drawer.Screen
        name="Check reports"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={ScanHeap}
      />
      <Drawer.Screen
        name="Support"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={NewScanScreen}
      />
      <Drawer.Screen
        name="Terms & conditions"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={ActionScanScreen}
      />
      <Drawer.Screen
        name="Privacy policy"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={EditDetailsScreen}
      />
      <Drawer.Screen
        name="Rate us"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={EditScanScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={AboutScreen}
      />
      <Drawer.Screen
        name="GetingStarted"
        options={{
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#f3f3f3',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={ScanHeap}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
