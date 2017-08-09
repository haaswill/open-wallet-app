import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';

const TogglableListItem = ({
  containerStyle,
  id,
  isOpened,
  leftIcon,
  onPress,
  rightIcon,
  subtitle,
  subtitleStyle,
  title
  }) => (
    <View style={styles.container}>
      <ListItem
        containerStyle={containerStyle}
        leftIcon={leftIcon}
        onPress={onPress(id)}
        rightIcon={rightIcon}
        subtitle={subtitle}
        subtitleStyle={subtitleStyle}
        title={title}
        titleStyle={styles.title}
      />
      <View style={{ height: isOpened ? 100 : 0 }}>
        <Text>UHUUUUUUL</Text>
      </View>
    </View>
  );

export { TogglableListItem };
