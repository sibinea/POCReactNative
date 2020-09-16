import {Body, Card, CardItem} from 'native-base';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HomeListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('listItem.key', this.props.listItem.key);
            this.props.navigation.navigate('Details', {
              key: this.props.listItem.key,
            });
          }}
          style={styles.listItem}>
          <Card style={styles.cardStyle}>
            <CardItem cardBody style={styles.topCardStyle}>
              <Image
                source={{uri: this.props.listItem.media[0]}}
                style={styles.image}
                resizeMode="cover"
              />
            </CardItem>
            <CardItem style={styles.footerCardStyle}>
              <Body>
                <Text>{this.props.listItem.title}</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: null,
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  listItem: {
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  cardStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
    borderRadius: 10,
  },
  topCardStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  footerCardStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
