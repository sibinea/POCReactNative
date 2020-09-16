import axios from 'axios';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import AppButton from '../../components/CustomButton';
import TextView from '../../components/TextView';
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
      isLoading: true,
      error: '',
    };
  }

  getDataFromAPI = () => {
    const {route} = this.props;
    const params = route.params;

    const url = 'https://bakesaleforgood.com/api/deals/' + params.key;
    console.log('url', url);
    this.setState({isLoading: true});
    axios
      .get(url)
      // eslint-disable-next-line prettier/prettier
      .then(res => {
        console.log('getting details', res.data);
        this.setState({isLoading: false, dataSource: res.data});
      })
      .catch(() => {
        this.setState({isLoading: false, error: 'Something just went wrong'});
      });
  };

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.body}>
          <ActivityIndicator color={'#326079'} size={30} />
        </View>
      );
    }
    return (
      <>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.image}>
              <ImageSlider
                loopBothSides={true}
                images={this.state.dataSource.media}
                autoPlayWithInterval={1000}
                loop={true}
              />
            </View>
            <View style={styles.child}>
              <TextView
                text={this.state.dataSource.title}
                textStyle={styles.titleText}
              />
              <TextView
                text={'\nPrice : $' + this.state.dataSource.price}
                textStyle={styles.smallText}
              />
              <TextView
                text={'Location : ' + this.state.dataSource.geoLocation}
                textStyle={styles.smallText}
              />

              <TextView
                text={'\nOverview :\n' + this.state.dataSource.description}
                textStyle={styles.description}
              />
              <AppButton
                title="Buy This Deal!"
                buttonStyle={styles.dealButton}
                onPress={createTwoButtonAlert}
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const createTwoButtonAlert = () =>
  Alert.alert(
    'Congrats !!!!!',
    'Thank you buying this awesome deal...',
    [{text: 'OK', onPress: () => {}}],
    {cancelable: false},
  );

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  child: {
    margin: 10,
  },

  description: {
    color: 'grey',
    fontSize: 22,
  },
  smallText: {
    color: 'grey',
    fontSize: 18,
  },
  image: {
    height: 250,
    width: null,
  },
  titleText: {
    color: '#34B5FE',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 24,
    alignSelf: 'flex-start',
  },
  dealButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4f18a8',
    marginTop: 20,
    marginBottom: 20,
  },
});
