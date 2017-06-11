import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import styles from './styles';
import { facebookLoginAsync, googlekLoginAsync } from '../../actions';

class Authentication extends Component {
  componentWillReceiveProps(nextProps) {
    this.onAuthenticationComplete(nextProps);
  }

  onFacebookButtonPress = () => {
    this.props.facebookLoginAsync();
  }

  onGoogleButtonPress = () => {
    this.props.googlekLoginAsync();
  }

  onAuthenticationComplete(props) {
    if (props.user) {
      this.props.navigation.navigate('Home');
    }
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

const mapStateToProps = ({ authentication }) => ({ user: authentication.user });

export default connect(mapStateToProps, { facebookLoginAsync, googlekLoginAsync })(Authentication);
