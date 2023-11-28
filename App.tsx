/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/Navigation/Navigation';
function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}

export default App;
