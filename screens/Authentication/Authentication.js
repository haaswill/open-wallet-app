import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native-elements';
import styles from './styles';
import { facebookLoginAsync, googleLoginAsync } from '../../actions';
import { MainView, Spinner, Header } from '../../components';

class Authentication extends Component {
  componentWillReceiveProps(nextProps) {
    this.onAuthenticationComplete(nextProps);
  }

  onFacebookButtonPress = () => {
    this.props.facebookLoginAsync();
  }

  onGoogleButtonPress = () => {
    this.props.googleLoginAsync();
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
      <MainView
        header={this.renderHeader()}
        innerContainerStyle={container}
      >
        <Button
          buttonStyle={facebookButton}
          iconRight
          icon={{ name: 'facebook', type: 'material-community' }}
          large
          onPress={this.onFacebookButtonPress}
          raised
          title='Access With Facebook'
        />
        <Text h1 style={text}>or</Text>
        <Button
          buttonStyle={googleButton}
          iconRight
          icon={{ name: 'google', type: 'material-community' }}
          large
          onPress={this.onGoogleButtonPress}
          raised
          title='Access With Google'
        />
      </MainView>
    );
  }

  renderHeader() {
    return (
      <Header
        title='Authentication'
      />
    );
  }

  render() {
    return (
      this.renderButtons()
    );
  }
}

const mapStateToProps = ({ authentication }) => authentication;

export default connect(mapStateToProps, { facebookLoginAsync, googleLoginAsync })(Authentication);
