import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.props.text}
          onChangeText={this.props.changeText}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="#265670"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

// UserInput.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   secureTextEntry: PropTypes.bool,
//   autoCorrect: PropTypes.bool,
//   autoCapitalize: PropTypes.string,
//   returnKeyType: PropTypes.string,
// };

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 30,
    height: 50,
    color: '#265670',
    borderRadius: 10,
    margin: 10,
    marginStart: 10,
    alignSelf: 'stretch',
    paddingStart: 10,
    paddingEnd: 10,
    fontSize: 18,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});
