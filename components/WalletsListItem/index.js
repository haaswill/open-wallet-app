import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { colors } from '../../config/styles';
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
      color,
      expanded,
      id,
      leftIcon,
      onPress,
      rightIcon,
      subtitle,
      subtitleStyle,
      title,
      titleStyle
    } = this.props;
    return (
      <View style={styles.container}>
        <ListItem
          containerStyle={styles.itemContainer}
          leftIcon={
            <Icon
              color={color}
              iconStyle={styles.icon}
              name={leftIcon}
              size={40}
              type='material-community'
            />
          }
          onPress={() => this.onPress(expanded, id, onPress)}
          rightIcon={{
            color,
            name: rightIcon,
            size: 60,
            type: 'material-community'
          }}
          subtitle={subtitle}
          subtitleStyle={[styles.subtitle, subtitleStyle]}
          title={title}
          titleStyle={[styles.title, titleStyle]}
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
