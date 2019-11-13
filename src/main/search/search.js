import React, { Component } from "react";
import {View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
//import * as Animatable from 'react-native-animatable'
// import styles from "./style.js";

class SearchScreen extends React.Component {
    render() {
      return (

          <View style={{ flex: 1}}>
           
            <View style={{height: 80,
             backgroundColor: '#7c4ea5',
             justifyContent: 'center',
             paddingHorizontal: 5}}>
              
              <View animation="slideInRight" duration={500} style={{height: 50,
               backgroundColor: 'white',
               flexDirection: 'row', 
               padding:5, 
               alignItems: 'center'}}>
                <Icon name="ios-search" style={{ fontSize: 24}}/>
                <TextInput placeholder= "Search" style={{fontSize:24, 
                 marginLeft:15}}/>
              </View>
             
            </View>
    
          </View>
      );
    }
  }

  export default SearchScreen;
  