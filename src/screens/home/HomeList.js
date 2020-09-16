import axios from 'axios';
import React, {Component} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import HomeListItem from './HomeListItem';

export default class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true,
      error: '',
      searchText: '',
    };
  }

  getDataFromAPI = () => {
    const url = 'https://bakesaleforgood.com/api/deals';
    this.setState({isLoading: true});
    axios
      .get(url)
      // eslint-disable-next-line prettier/prettier
      .then(res => {
        console.log('getting data from fetch', res.data);
        this.setState({isLoading: false, dataSource: res.data});
      })
      .catch(() => {
        this.setState({isLoading: false, error: 'Something just went wrong'});
      });
  };

  SearchFunction(searchText) {
    const url =
      'https://bakesaleforgood.com/api/deals?searchTerm=' + searchText;
    this.setState({searchText: searchText});
    axios
      .get(url)
      // eslint-disable-next-line prettier/prettier
      .then(res => {
        console.log('getting data from fetch', res.data);
        this.setState({
          isLoading: false,
          dataSource: res.data,
          searchText: searchText,
        });
      })
      .catch(() => {
        this.setState({isLoading: false, error: 'Something just went wrong'});
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={styles.body}>
    //       <ActivityIndicator color={'#326079'} size={30} />
    //     </View>
    //   );
    // }
    return (
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.topRow}>
            <TextInput
              style={styles.input}
              value={this.state.searchText}
              // eslint-disable-next-line prettier/prettier
              onChangeText={searchText => this.SearchFunction(searchText)}
              placeholder="Search Here"
              returnKeyType={'done'}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholderTextColor="#265670"
              underlineColorAndroid="transparent"
            />
          </View>

          <FlatList
            data={this.state.dataSource}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isLoading}
                onRefresh={this.getDataFromAPI.bind(this)}
              />
            }
            renderItem={({item}) => (
              <HomeListItem
                listItem={item}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: '#326079',
    justifyContent: 'center',
    // flex: 1,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //width: DEVICE_WIDTH - 30,
    height: 50,
    color: '#265670',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    paddingStart: 10,
    paddingEnd: 10,
    fontSize: 18,
  },
  topRow: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
});
