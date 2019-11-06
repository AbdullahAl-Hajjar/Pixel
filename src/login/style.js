const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
  marginHorizontal: 20,
 
},
separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',

  },
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 28,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#8c3fb5',
  backgroundColor: '#f0f0f0',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
createFormText: {
  height: 17,
  fontSize: 14,
  paddingLeft: 10,
  marginLeft: 10,
  marginRight: 15,
  marginTop: 1,
  marginBottom: 1,

},
loginButton: {
  borderRadius: 2,
  height: 45,
},
createAccount: {
  height: 45,
  backgroundColor: 'transparent',
},
};
