import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import { MainView, Header } from '../../components';
import styles from './styles';

class Settings extends Component {
  logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Authentication');
  }

  renderHeader() {
    return (
      <Header title='Settings' />
    );
  }

  render() {
    return (
      <MainView header={this.renderHeader()}>
        <Button
          large
          title='Log out!'
          onPress={this.logOut}
        />
      </MainView>
    );
  }
}

export default connect(null, {
  logOut
})(Settings);
