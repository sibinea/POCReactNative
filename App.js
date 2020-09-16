/**
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from './src/screens/detail/DetailsScreen';
import HomeScreen from './src/screens/home/HomeList';
import LoginScreen from './src/screens/Login';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import SignUpScreen from './src/screens/SignUp';
import TermAndConditions from './src/screens/TermAndConditions';

const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Screen name="Details" component={DetailsScreen} />
        <Screen name="TermAndConditions" component={TermAndConditions} />
        <Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Navigator>
    </NavigationContainer>
  );
}
