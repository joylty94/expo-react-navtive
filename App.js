import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import LoginScreen from './Screen/LoginScreen';
import HomeScreenTabNavigator from './Screen/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   LoginScreen: { screen : LoginScreen },
//   HomeScreenTabNavigator: { screen: HomeScreenTabNavigator },
// })

const AppDrawerNavigator = createDrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreenTabNavigator: { screen: HomeScreenTabNavigator },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
