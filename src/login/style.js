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
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  borderRadius: 2,
  height: 45,
},
guestLoginButton: {
  height: 45,
  backgroundColor: 'transparent',
},
};
