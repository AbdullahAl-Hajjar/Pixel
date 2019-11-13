import React, { Component } from "react";
import styles from "./style.js";
import {Button, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import firebase from 'firebase';
import Main from '../main/main.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';

function Separator() {
    return <View style={styles.separator} />;
  }
  
class CreateAccount extends Component {

  constructor(props){
    super(props);
    this.state=
    {
      username:'',
      password:'',
      passwordMatch:'',
      email:'',
      favoriteChallenge:'',
      favoriteCompany:'',
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
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
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
          <Text style={styles.logoText}>Create an Account</Text>
          <Text style={styles.createFormText}>Username</Text>
            <TextInput placeholder="Type your new username" value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Text style={styles.createFormText}>Password</Text>
            <TextInput placeholder="●●●●●●●●"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Text style={styles.createFormText}>Re-type Password</Text>
            <TextInput placeholder="●●●●●●●●"
            value={this.state.passwordMatch}
            onChangeText={passwordMatch => this.setState({passwordMatch})}
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Text style={styles.createFormText}>E-mail</Text>
            <TextInput  placeholder="email@example.com"value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Separator />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.createAccount()}
              title="Sign Up"
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

  

  createAccount() {
    if (this.state.password !== "" && this.state.username !== "" &&
        this.state.passwordMatch !== "" && this.state.email !== "") {
        if (this.state.password !== this.state.passwordMatch) {
            alert("Passwords don't match");
        } else {
            firebase.database().ref('accounts/clients').push({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                favoriteChallenge: this.state.favoriteChallenge,
                favoriteCompany: this.state.favoriteCompany
            });

            this.props.navigation.navigate('Home')
        }
    } else {
        alert("Fill in the blanks");
    }
}

}

const RootStack = createStackNavigator({
  Login: { screen: CreateAccount },
  Main: { screen: Main },
},{headerMode: 'none',
});


export default createAppContainer(RootStack);

