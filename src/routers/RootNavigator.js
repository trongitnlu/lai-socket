import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationServices from '../utils/navigationServices';
// Screen Import
import {TransitionPresets} from '@react-navigation/stack';
import GetStartContainer from '../scenes/getStart/GetStart.container';
import SCENE_NAMES from '../constants/sceneName';
const Stack = createStackNavigator();

function RootNavigator({onNavigationStateChange}) {
  return (
    <NavigationContainer
      onStateChange={onNavigationStateChange}
      ref={navigatorRef => {
        NavigationServices.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: null,
          headerTitleAlign: 'center',
          headerTruncatedBackTitle: null,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={SCENE_NAMES.GET_START}>
        <Stack.Screen
          options={{headerShown: false}}
          name={SCENE_NAMES.GET_START}
          component={GetStartContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
