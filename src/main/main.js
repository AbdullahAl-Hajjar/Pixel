import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator, Header } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome5";
import MIcon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./home/home";
import CourseScreen from "./course/course";
import ProfileScreen from "./profile/profile";
import SearchScreen from "./search/search";

// const ProfileStack = createStackNavigator({ ProfileScreen });

const MainTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={17} color={tintColor} />
        )
      }
    },
    Course: {
      screen: CourseScreen,
      navigationOptions: {
        title: "Course",
        tabBarIcon: ({ tintColor }) => (
          <MIcon name="assignment" size={17} color={tintColor} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" size={17} color={tintColor} />
        )
      }
    },
    Profile: {
      // screen: ProfileStack,
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <MIcon name="person-outline" size={17} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#793FA0"
    }
  }
);

export default MainTabs;