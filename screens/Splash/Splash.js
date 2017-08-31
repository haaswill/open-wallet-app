import React, { Component } from 'react';
import { View, Text, AsyncStorage, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Button } from 'react-native-elements';
import { colors } from '../../config/styles';
import styles from './styles';
import { Slides } from '../../components';

const slidesData = [
  { text: 'Welcome to Open Wallet' },
  { text: 'A simple way to manage your finances' },
  { text: 'And it\'s free!' }
];

class Splash extends Component {
  state = { token: null }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('Authentication');
  }

  renderSlides() {
    return slidesData.map((slide, index) => (
      <View
        key={slide.text}
        style={styles.container}
      >
        <Text style={styles.text}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    ));
  }

  renderLastSlide(index) {
    if (index === slidesData.length - 1) {
      return (
        <Button
          backgroundColor={colors.secondaryColor}
          color={colors.primaryColor}
          fontWeight='bold'
          icon={{ name: 'arrow-forward', color: colors.primaryColor }}
          iconRight
          large
          onPress={this.onSlidesComplete}
          raised
          title="Go To Login!"
        />
      );
    }
  }

  render() {
    if (this.state.token === null) {
      return <AppLoading />;
    }
    return (
      <Slides>
        <StatusBar barStyle='light-content' />
        {this.renderSlides()}
      </Slides>
    );
  }
}

export default Splash;
