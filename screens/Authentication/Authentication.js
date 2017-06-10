import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import styles from './styles';
import { facebookLogin } from '../../actions';

class Authentication extends Component {
  onFacebookButtonPress = () => {
    this.props.facebookLogin();
  }

  onGoogleButtonPress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          large
          iconRight
          title='Access With Facebook'
          icon={{ name: 'facebook', type: 'material-community' }}
          buttonStyle={styles.facebookButton}
          onPress={this.onFacebookButtonPress}
        />
        <Text style={styles.text}>OR</Text>
        <Button
          raised
          large
          iconRight
          title='Access With Google'
          icon={{ name: 'google', type: 'material-community' }}
          buttonStyle={styles.googlePlusButton}
          onPress={this.onGoogleButtonPress}
        />
      </View>
    );
  }
}

export default connect(null, { facebookLogin })(Authentication);
