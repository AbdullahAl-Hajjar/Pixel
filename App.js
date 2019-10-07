import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginScreen from './src/login/login.js';
// import Welcome from './src/activities/welcome.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import firebase from 'firebase';

 class App extends React.Component {

  componentWillMount(){

    var firebaseConfig = {
      apiKey: "AIzaSyDGFnqFvXWXvR8Sfu3JqrsKBT9Hgb-HOcQ",
      authDomain: "sparkpath-6b02e.firebaseapp.com",
      databaseURL: "https://sparkpath-6b02e.firebaseio.com",
      projectId: "sparkpath-6b02e",
      storageBucket: "",
      messagingSenderId: "10959119150",
      appId: "1:10959119150:web:38eb97d4c7bb9c932850bf",
      measurementId: "G-VCSW7Z226R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
  }
  
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


