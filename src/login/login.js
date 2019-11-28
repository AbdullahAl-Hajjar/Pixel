import React, { Component } from "react";
import styles from "./style.js";
import {Button, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import firebase from 'firebase';
import Main from '../main/main.js';
import CreateAccount from './createAccount.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';

function Separator() {
    return <View style={styles.separator} />;
  }
  
class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state=
    {
      username:'',
      password:'',
      jsonArray: [],
    }
  }

  componentWillMount()
  {
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
    //firebase.analytics();
    firebase.database().ref('accounts').once('value').then(function(snapshot) {
      jsonArray = snapshot.val();
    });


  }




  render() {
    return (
      
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Spark Your Path</Text>
            <TextInput placeholder="Username" value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" 
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Separator />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
              color="#793FA0"
            />
            <Separator />
            <Button
              buttonStyle={styles.createAccount}
              onPress={() => this.createAccount()}
              title="Create an Account"
              color="#793FA0"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  

  onLoginPress() {
    for (i in jsonArray.clients) {
      if(jsonArray.clients[i].username  === this.state.username && jsonArray.clients[i].password === this.state.password){
        this.props.navigation.navigate('Main', {user: jsonArray.clients[i]})
        return
      }
    }
    alert('Invalid Username or Password');
    return
  }
  

  async createAccount() {
    this.props.navigation.navigate('Create')
  }
}

const RootStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: Main },
  Create: {screen: CreateAccount},
},{headerMode: 'none',
});


export default createAppContainer(RootStack);
