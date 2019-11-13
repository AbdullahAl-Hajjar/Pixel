import React, { Component } from "react";
import {Button, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import Unit1C from './unit1';
import Unit2C from './unit2';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';

  
class CourseScreen extends Component {

  constructor(props){
    super(props);
    this.state=
    {
      test:'',
    }
  }


  render() {
    return (

        

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
            <Button
             
              onPress={() => this.unit1()}
              title="Unit1"
              color="#793FA0"
            />
       
            <Button
          
              onPress={() => this.unit2()}
              title="Unit2"
              color="#793FA0"
            />
          </View>
  
    );
  }

  unit1() {
    this.props.navigation.navigate('Unit1')
  }
  

   unit2() {
    this.props.navigation.navigate('Unit2')
  }
}

const Units = createStackNavigator({
  Course: {screen: CourseScreen},
  Unit1: {screen: Unit1C},
  Unit2: {screen: Unit2C},
},{headerMode: 'none',
});

export default createAppContainer(Units);


