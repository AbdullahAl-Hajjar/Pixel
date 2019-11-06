import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginScreen from './src/login/login.js';
// import Welcome from './src/activities/welcome.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import firebase from 'firebase';

 class App extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
    );
  }
}

const Application = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
},{headerMode: 'none',
});


export default createAppContainer(Application);


