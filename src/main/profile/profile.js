import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style.js";


class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerTitle: (
        <Image
          style={{ width: 100 }}
          source={require("../../../assets/Logo_En_Black_200x55.png")}
          resizeMode="contain"
        />
      ),
      headerRight: (
        <View style={{ padding: 10 }}>
          <Icon name="cog" size={20} />
        </View>
      ),
      headerStyle: {
        backgroundColor: "#f0f0f0"
      }
    };
  };

  render() {
    const { user } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.firstrow}>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Icon name="question-circle-o" size={30} />
          </View>
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              source={require("../../../assets/profile_image.jpeg")}
            />
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
            <TouchableHighlight style={styles.changePassword}>
              <Text style={styles.changePasswordText}>Change Password</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <TouchableHighlight
              style={{
                padding: 10,
                backgroundColor: "#793FA0",
                borderRadius: 20
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Go Pro
              </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.secondrow}>
          <Text style={styles.titleText}>Your Challenge Cards</Text>
          <ScrollView horizontal={true}>
            <Image
              style={styles.card}
              source={require("../../../assets/challenge-cards/1.png")}
            />
            <Image
              style={styles.card}
              source={require("../../../assets/challenge-cards/2.png")}
            />
            <Image
              style={styles.card}
              source={require("../../../assets/challenge-cards/3.png")}
            />
            <Image
              style={styles.card}
              source={require("../../../assets/challenge-cards/4.png")}
            />
          </ScrollView>
        </View>

        <View style={styles.thirdrow}>
          <Text style={styles.titleText}>Companies</Text>
          <ScrollView horizontal={true}>
            <Image
              style={styles.company}
              source={require("../../../assets/card_4.eabfdea9.png")}
            />
            <Image
              style={styles.company}
              source={require("../../../assets/card_5.f9678f7a.png")}
            />
            <Image
              style={styles.company}
              source={require("../../../assets/card_6.47c59ba7.png")}
            />
          </ScrollView>
        </View>
        <View style={styles.fouthrow}>
          <TouchableHighlight style={styles.manageAccount}>
            <Text style={styles.changePasswordText}>Manage Account</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;