import React, { Component } from "react";
import {Button, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, AsyncStorage, FlatList, Dimensions,ScrollView,TouchableHighlight } from 'react-native';
import Unit1C from './unit1';
import Unit2C from './unit2';
import styles from "./style.js";
import ListItem from './ListItem';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';

const data = [
  { key: 'Unit 3' }, { key: 'Unit 4' }, { key: 'Unit 5' },
   { key: 'Unit 6' }, { key: 'Unit 7' }, { key: 'Unit 8' },
    { key: 'Unit 9' }, { key: 'Unit 10' }, { key: 'Unit 11' }, { key: 'Unit 12' },{ key: 'Unit 13' }, { key: 'Unit 14' }, 

];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};
const numColumns = 2;
  
class CourseScreen extends Component {

  constructor(props){
    super(props);

  }

  _unit1() {
    this.props.navigation.navigate('Unit1')
  }
  

  _unit2() {
    this.props.navigation.navigate('Unit2')
  }

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
      ;
    }
    return (

   
      
      <View
        style={styles.item}
      >

        <Text style={styles.itemText}>{item.key}</Text>
      </View>


    );
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container} >
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={() => this._unit1()} underlayColor='#f1c40f'>
    <Text style={styles.itemText}>Unit 1</Text>
</TouchableHighlight>
  </View>
  <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={() => this._unit2()} underlayColor='#f1c40f'>
      <Text style={styles.itemText}>Unit 2</Text>
  </TouchableHighlight>
  </View>
  </View>


      <FlatList
        data={formatData(data, numColumns)}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
      </View>
      </ScrollView>

    );
  }

  
}

const Units = createStackNavigator({
  Course: {screen: CourseScreen},
  Unit1: {screen: Unit1C},
  Unit2: {screen: Unit2C},
},{headerMode: 'none',
});


export default createAppContainer(Units);


