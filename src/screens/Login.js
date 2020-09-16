import React, {Component} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import logoImg from '../assets/logo.png';
import AppButton from '../components/CustomButton';
import ImageView from '../components/ImageFromAsset';
import TextView from '../components/TextView';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    if (this.isValid()) {
      this.props.navigation.replace('Home');
    } else {
      Alert.alert(
        'Validation Error',
        'Please enter a valid email-id or password',
      );
    }
  }
  isValid() {
    const {username, password} = this.state;
    let valid = true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(username) === false) {
      valid = false;
      this.setState({error: 'You must enter an email address'});
    } else if (password.length === 0) {
      valid = false;
      this.setState({error: 'You must enter a password'});
    }

    return valid;
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <View style={styles.innerBody}>
            <ImageView src={logoImg} imageStyle={styles.image} />
            <TextView text="Welcome back!" textStyle={styles.welcomeText} />
            <TextView text="Signin" textStyle={styles.signInText} />
            {/* <Form
            userName={this.state.username}
            // eslint-disable-next-line prettier/prettier
            userNameChangeText={username => this.setState({username})}
            password={this.state.password}
            // eslint-disable-next-line prettier/prettier
            passwordChangeText={password => this.setState({password})}
          /> */}
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <TextInput
                style={styles.input}
                value={this.state.username}
                // eslint-disable-next-line prettier/prettier
                onChangeText={username => this.setState({username})}
                placeholder="Username"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                placeholderTextColor="#265670"
                underlineColorAndroid="transparent"
                keyboardType="email-address"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                value={this.state.password}
                // eslint-disable-next-line prettier/prettier
                onChangeText={password => this.setState({password})}
                placeholder="Password"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholderTextColor="#265670"
                underlineColorAndroid="transparent"
              />
            </KeyboardAvoidingView>
            <AppButton
              title="Signin"
              buttonStyle={styles.signInButton}
              onPress={this.onLogin.bind(this)}
              // onPress={() => this.props.navigation.replace('Home')}
            />
            <View style={styles.separatorView}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>
            <AppButton
              title="SignUp"
              buttonStyle={styles.signUpbutton}
              onPress={() => this.props.navigation.navigate('SignUp')}
              // onPress={() => {}}
            />
          </View>
          <View style={styles.bottomRow}>
            <TextView
              text="Policy Privacy"
              textStyle={styles.privacyText}
              onPress={() =>
                this.props.navigation.navigate('TermAndConditions')
              }
            />
            <TextView
              text="Terms and Conditions"
              textStyle={styles.termsText}
              onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
            />
          </View>
        </View>
      </>
    );
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
