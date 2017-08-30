import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';

const CustomLayoutAnimation = {
  duration: 200,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
  },
};

class WalletsListItem extends Component {
  state = {
    height: 0,
    opacity: 0
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded) {
      this.updateState(200, 1);
    } else {
      this.updateState(0, 0);
    }
  }

  onPress = (expanded, id, onPress) => {
    if (expanded) {
      onPress(null);
    } else {
      onPress(id);
    }
  }

  updateState = (finalHeight, finalOpacity) => {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    this.setState({
      height: finalHeight,
      opacity: finalOpacity
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
        <View
          style={{
            height: this.state.height,
            opacity: this.state.opacity
          }}
        >
          {children}
        </View >
      </View>
    );
  }
}

export { WalletsListItem };
