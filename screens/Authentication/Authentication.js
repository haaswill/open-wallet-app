import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
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
