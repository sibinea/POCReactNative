import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class TextView extends Component {
  render() {
    return (
      <View>
        <Text style={this.props.textStyle} onPress={this.props.onPress}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

// TextView.propTypes = {
//   text: PropTypes.string.isRequired,
//   textStyle: PropTypes.object,
// };
// TextView.defaultProps = {
//   textStyle: styles.text,
// };
