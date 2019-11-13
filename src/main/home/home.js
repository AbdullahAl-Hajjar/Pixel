import React, { Component } from "react";
import {
View, 
Text, 
StyleSheet, 
Image 
} from 'react-native';
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";
//import * as Animatable from 'react-native-animatable'
// import styles from "./style.js";

class HomeScreen extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
          <Image
              style={styles.logoImage}
              source={require("../../../assets/logo.png")}
            />
           
          <Text style={styles.welcome}>
            
          Discover the challenges that you want to work on.
          Experience a transformative approach to career discovery today.
            

          </Text>
          
          <Text style={styles.note}>
          Get Started
          </Text>  

           

        </View>
      );
    }
  }

      
        
      
  
  

  export default HomeScreen;
  