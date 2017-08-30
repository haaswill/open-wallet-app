import React, { Component } from 'react';
import { Animated, View, Easing } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';

class WalletsListItem extends Component {
  state = {
    height: new Animated.Value(0),
    opacity: new Animated.Value(0)
  }

  onPress = (expanded, id, onPress) => {
    if (expanded) {
      this.toggle(0, 0);
      onPress(null);
    } else {
      this.toggle(200, 1);
      onPress(id);
    }
  }

  toggle = (finalHeight, finalOpacity) => {
    Animated.parallel([
      Animated.timing(
        this.state.opacity,
        { toValue: finalOpacity, duration: 10000, useNativeDriver: true }
      ),
      Animated.timing(
        this.state.height,
        { toValue: finalHeight, duration: 10000 }
      )
    ]).start(this.updateState(finalHeight, finalOpacity));
  }

  updateState = (finalHeight, finalOpacity) => {
    this.setState({
      height: new Animated.Value(finalHeight),
      opacity: new Animated.Value(finalOpacity)
    });
  }

  render() {
    const {
      children,
      expanded,
      id,
      leftIcon,
      onPress,
      rightIcon,
      subtitle,
      title
    } = this.props;
    return (
      <View style={styles.container}>
        <ListItem
          containerStyle={styles.itemContainer}
          leftIcon={leftIcon}
          onPress={() => this.onPress(expanded, id, onPress)}
          rightIcon={rightIcon}
          subtitle={subtitle}
          subtitleStyle={styles.subtitle}
          title={title}
          titleStyle={styles.title}
        />
        <Animated.View
          style={{
            height: this.state.height,
            opacity: this.state.opacity
          }}
        >
          {children}
        </Animated.View >
      </View>
    );
  }
}

export { WalletsListItem };
