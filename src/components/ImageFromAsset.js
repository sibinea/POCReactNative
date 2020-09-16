import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, View} from 'react-native';

export default class ImageView extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.src} style={this.props.imageStyle} />
      </View>
    );
  }
}
ImageView.propTypes = {
  src: PropTypes.number.isRequired,
  imageStyle: PropTypes.object.isRequired,
};
