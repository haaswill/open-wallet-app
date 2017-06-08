import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../../config/styles';
import Slides from '../../components/Slides';

const slidesData = [
  { text: 'Welcome to Open Wallet', color: styles.secondaryColor },
  { text: 'A simple way to manage your finances', color: styles.secondaryColor },
  { text: 'Start now!', color: styles.secondaryColor }
];

class Splash extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
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
          title="Finish!"
          raised
          color={styles.primaryColor}
          buttonStyle={styles.button}
          onPress={this.onSlidesComplete}
        />
      );
    }
  }

  render() {
    return (
      <Slides>
        {this.renderSlides()}
      </Slides>
    );
  }
}

export default Splash;
