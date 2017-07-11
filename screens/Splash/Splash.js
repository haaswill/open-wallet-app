import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { Button } from 'react-native-elements';
import { colors } from '../../config/styles';
import styles from './styles';
import { Slides } from '../../components';

const slidesData = [
  { text: 'Welcome to Open Wallet', color: colors.secondaryColor },
  { text: 'A simple way to manage your finances', color: colors.secondaryColor },
  { text: 'And it\'s free!', color: colors.secondaryColor }
];

class Splash extends Component {
  state = { token: null }

  async componentWillMount() {
    //await AsyncStorage.clear();
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
        style={[styles.container, { backgroundColor: slide.color }]}
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
          large
          iconRight
          title="Go To Login!"
          icon={{ name: 'arrow-forward' }}
          color={colors.secondaryColor}
          buttonStyle={styles.button}
          onPress={this.onSlidesComplete}
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
        {this.renderSlides()}
      </Slides>
    );
  }
}

export default Splash;
