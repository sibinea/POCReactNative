import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <></>;
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#326079',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    alignContent: 'center',
  },
  innerBody: {
    alignContent: 'center',
    flex: 1,
  },
  bottomRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginLeft: 15,
    marginRight: 15,
    position: 'absolute',
    bottom: 0,
  },
  privacyText: {
    color: '#34B5FE',
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  termsText: {
    color: '#34B5FE',
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  signInText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
  },

  welcomeText: {
    color: '#34B5FE',
    backgroundColor: 'transparent',
    marginTop: 70,
    alignSelf: 'flex-start',
  },
  image: {
    width: 80,
    height: 40,
    resizeMode: 'cover',
    marginTop: 70,
    alignSelf: 'center',
  },
  separatorView: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 25,
    height: 20,
    backgroundColor: 'rgba(255,255,255,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    fontSize: 18,
    fontWeight: 'normal',
    width: 40,
    textAlign: 'center',
    color: 'white',
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#34B5FE',
  },
  signUpbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4f18a8',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //width: DEVICE_WIDTH - 30,
    height: 50,
    color: '#265670',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingStart: 10,
    paddingEnd: 10,
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
