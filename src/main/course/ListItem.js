
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    Animated,

} from 'react-native';

export default class ListItem extends Component {
    state = {
        animatePress: new Animated.Value(1)

    }
    animate() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.6,
            duration: 500
        }).start()
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

