// FlatList
// Nasser Al Kayal
// This class will create a flatlist
// Nov 25, 2019
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    Animated,
    FlatList,
    Dimensions,

} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import ListItem from './ListItem'

const Item_width = Dimensions.get('window').width

export default class unit111 extends Component{




    render(){

        const columns = this.props.navigation.getParam('data', 'defaultValue') 
        console.log('COLLUMS: '+columns[0].id+', '+columns[0].uri) 

        return (
            
            <View style={styles.container}>
            
            <FlatList
            numColumns={4}
            data={columns}
            renderItem = { ({item})  =>{ 
            return <ListItem itemWidth={(Item_width-10*4)/4} image={item.uri}/>
        } }
        keyExtractor={
            (index)=>{ return index }
        }
             
            />
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#F5FCFF',
    },
});


