import React from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RefreshableMainScrollView = props => {
  const {
    header,
    children,
    innerContainerStyle,
    onRefresh,
    refreshing
  } = props;
  return (
    <View style={styles.container}>
      {header}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={[styles.body, innerContainerStyle]}
      >
        {children}
      </ScrollView>
    </View >
  );
};

RefreshableMainScrollView.defaultProps = {
  innerContainerStyle: [],
  refreshing: false
};

RefreshableMainScrollView.propTypes = {
  header: PropTypes.element,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool
};

export { RefreshableMainScrollView };
