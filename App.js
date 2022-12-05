import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ApplicationNavigator from './src/Navigators/Application';
import {store} from './src/redux/store';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};

export default App;
