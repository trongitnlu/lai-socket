/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';

import RootNavigator from './src/routers/RootNavigator';

const App = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
