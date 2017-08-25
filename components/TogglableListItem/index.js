import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';

class TogglableListItem extends Component {
  state = {
    toggleHeight: new Animated.Value(0)
  };

  toggleView = () => {
    Animated.timing(
      this.state.toggleHeight,
      {
        toValue: 200,
        duration: 1000
      }
    ).start();
  };

  returnChildren = (isOpened, children) => {
    if (isOpened) {
      return (
        <Animated.View style={{ height: this.state.toggleHeight }}>
          {children}
        </Animated.View>
      );
    }
    return null;
  };

  render() {
    const {
      children,
      containerStyle,
      id,
      isOpened,
      leftIcon,
      onPress,
      rightIcon,
      subtitle,
      subtitleStyle,
      title
    } = this.props;

    return (
      <View style={styles.container} >
        <ListItem
          containerStyle={containerStyle}
          leftIcon={leftIcon}
          onPress={() => onPress(id)}
          rightIcon={rightIcon}
          subtitle={subtitle}
          subtitleStyle={subtitleStyle}
          title={title}
          titleStyle={styles.title}
        />
        {this.returnChildren(isOpened, children)}
      </View >
    );
  }
}

export { TogglableListItem };
