const React = require("react-native");
const { StyleSheet } = React;
import { Dimensions } from 'react-native';


export default {
  container: {
    flex: 1
  },

  firstrow: {
    flex: 2,
    flexDirection: "row",
    padding: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  changePassword: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20
  },
  changePasswordText: {
    color: "green",
    backgroundColor: "#f0f0f0"
  },

  secondrow: {
    flex: 2,
    flexDirection: "column"
  },

  thirdrow: {
    flex: 2
  },

  fouthrow: {
    flex: 1
  },

  profile: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 100,
    height: 140,
    margin: 10,
    borderRadius: 10,
    borderColor: "purple",
    borderWidth: 1.5
  },
  company: {
    width: 100,
    height: 140,
    margin: 10,
    borderRadius: 10,
    borderColor: "purple",
    borderWidth: 1.5
  },
  titleText: {
    margin: 10
  },
  manageAccount: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 100,
    justifyContent: "flex-end"

    // flex:0.5
  },

  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#d8d8d8',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 3, 
   
  },
  itemText: {
    color: '#000000',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    width: Dimensions.get('window').width / 2.02,
    height: Dimensions.get('window').width / 3, 
    backgroundColor: 'mediumpurple'
    
  }
};