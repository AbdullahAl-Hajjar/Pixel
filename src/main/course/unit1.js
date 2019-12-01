
// Sorting cards
// Nasser Al Kayal
// This class will sort the cards as like or unlike
// Nov 25, 2019
import React from 'react';

import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder ,Button} from 'react-native';
import unit2s from './unit111';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';



const SCREEN_HEIGHT = Dimensions.get('window').height

const SCREEN_WIDTH = Dimensions.get('window').width

import Icon from 'react-native-vector-icons/Ionicons'




var selectedImage = new Array();
 


const Challenges = [

  { id: "1", uri: require('../../../assets/challenge-cards/1.png') },

  { id: "2", uri: require('../../../assets/challenge-cards/2.png') },

  { id: "3", uri: require('../../../assets/challenge-cards/3.png') },

  { id: "4", uri: require('../../../assets/challenge-cards/4.png') },

  { id: "5", uri: require('../../../assets/challenge-cards/5.png') },

  // { id: "6", uri: require('../../../assets/challenge-cards/6.png') },

  // { id: "7", uri: require('../../../assets/challenge-cards/7.png') },

  // { id: "8", uri: require('../../../assets/challenge-cards/8.png') },

  // { id: "9", uri: require('../../../assets/challenge-cards/9.png') },

  // { id: "10", uri: require('../../../assets/challenge-cards/10.png') },

  // { id: "11", uri: require('../../../assets/challenge-cards/11.png') },

  // { id: "12", uri: require('../../../assets/challenge-cards/12.png') },

  // { id: "13", uri: require('../../../assets/challenge-cards/13.png') },

  // { id: "14", uri: require('../../../assets/challenge-cards/14.png') },

  // { id: "15", uri: require('../../../assets/challenge-cards/15.png') },

  // { id: "16", uri: require('../../../assets/challenge-cards/16.png') },

  // { id: "17", uri: require('../../../assets/challenge-cards/17.png') },

  // { id: "18", uri: require('../../../assets/challenge-cards/18.png') },

]



 class unit1 extends React.Component {



  constructor() {

    super()



    this.position = new Animated.ValueXY()

    this.state = {

      currentIndex: 0

    }



    this.rotate = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: ['-10deg', '0deg', '10deg'],

      extrapolate: 'clamp'

    })



    this.rotateAndTranslate = {

      transform: [{

        rotate: this.rotate

      },

      ...this.position.getTranslateTransform()

      ]

    }



    this.likeOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [0, 0, 1],

      extrapolate: 'clamp'

    })

    this.dislikeOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [1, 0, 0],

      extrapolate: 'clamp'

    })



    this.nextCardOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [1, 0, 1],

      extrapolate: 'clamp'

    })

    this.nextCardScale = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [1, 0.8, 1],

      extrapolate: 'clamp'

    })



  }

  componentWillMount() {

    this.PanResponder = PanResponder.create({



      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {



        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })

      },

      onPanResponderRelease: (evt, gestureState) => {



        if (gestureState.dx > 120) {

  
         
          selectedImage.push(Challenges[this.state.currentIndex])
          Animated.spring(this.position, {

            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }

          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {

              this.position.setValue({ x: 0, y: 0 })

            })

          })

        }
        else if (gestureState.dy < -120) {
          
          Animated.spring(this.position, {

            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }

          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {

              this.position.setValue({ x: 0, y: 0 })

            })

          })

        }
        else if (gestureState.dx < -120) {
          
          Animated.spring(this.position, {

            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }

          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {

              this.position.setValue({ x: 0, y: 0 })

            })

          })

        }

        else {

          Animated.spring(this.position, {

            toValue: { x: 0, y: 0 },

            friction: 4

          }).start()

        }

      }

    })

  }



  renderChallenges = () => {



    return Challenges.map((item, i) => {

      console.log(item.uri)

      if(this.state.currentIndex == Challenges.length)
      {

        this.props.navigation.navigate('unit2',{ data:selectedImage })
      }



      if (i < this.state.currentIndex) {

        return null

      }

      


      else if (i == this.state.currentIndex) {



        return (

          <Animated.View

            {...this.PanResponder.panHandlers}

            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>

              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>



            </Animated.View>



            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>

              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>DISLIKE</Text>



            </Animated.View>



            <Image

              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}

              source={item.uri} />



          </Animated.View>

        )

      }

      else {

        return (

          <Animated.View



            key={item.id} style={[{

              opacity: this.nextCardOpacity,

              transform: [{ scale: this.nextCardScale }],

              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'

            }]}>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>

              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>



            </Animated.View>



            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>

              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>DISLIKE</Text>



            </Animated.View>



            <Image

              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}

              source={item.uri} />
            


          </Animated.View>

        )

      }

      


    }).reverse()

  
   

  }



  render() {

    return (

      <View style={{ flex: 1 }}>

        <View style={{ height: 10}}>
       


        </View>

        <View style={{ flex: 1 }}>

          {this.renderChallenges()}
          

        </View>



      </View>



    );

  }


}



const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },

});


const Units = createStackNavigator({
  unit1: {screen:unit1},
  unit2: {screen: unit2s},
},{headerMode: 'none',
});

export default createAppContainer(Units);
