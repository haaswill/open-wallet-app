import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import styles from './styles';
import { facebookLoginAsync, googlekLoginAsync } from '../../actions';
import Spinner from '../../components/Spinner';

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

  renderButtons() {
    const { container, text, facebookButton, googleButton } = styles;
    if (this.props.loading) {
      return (
        <View style={container}>
          <Spinner size='large' />
        </View>
      );
    }
    return (
      <View style={container}>
        <Button
          raised
          large
          iconRight
          title='Access With Facebook'
          icon={{ name: 'facebook', type: 'material-community' }}
          buttonStyle={facebookButton}
          onPress={this.onFacebookButtonPress}
        />
        <Text style={text}>OR</Text>
        <Button
          raised
          large
          iconRight
          title='Access With Google'
          icon={{ name: 'google', type: 'material-community' }}
          buttonStyle={googleButton}
          onPress={this.onGoogleButtonPress}
        />
      </View>
    );
  }

  render() {
    return (
      this.renderButtons()
    );
  }
}

const mapStateToProps = ({ authentication: { user, loading } }) => ({ user, loading });

export default connect(mapStateToProps, { facebookLoginAsync, googlekLoginAsync })(Authentication);
