
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    Animated,

} from 'react-native';


var imageArray = [];
var clicked = 0;

export default class ListItem extends Component {
 
    constructor(props)
    {
      super(props)

    this.state = {
        animatePress: new Animated.Value(1)
        

   
    }

    }

    animate() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.6,
            duration: 500
            
        }).start()
        console.log("IMAGES CLICKED"+this.props.image)
        imageArray.push(this.props.image)
        clicked+=1;
        if(clicked === 3){
            alert('Great! Now naviagate back and complete Unit 2 ')
        }
    }
    render() {
        const {itemWidth} = this.props
        return (


            <TouchableWithoutFeedback onPress={() => this.animate()}>

                <Animated.View style={{
                    margin:5,
                    
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                    <Image style={{ width:itemWidth, height: 100 }} source={this.props.image}></Image>
                </Animated.View>
            </TouchableWithoutFeedback >

        )
    }
}


