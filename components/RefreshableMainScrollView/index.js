import React from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';
import styles from './styles';

const RefreshableMainScrollView = props => {
  const renderSpinner = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Spinner size='large' />
    </View>
  );
  const {
    children,
    header,
    innerContainerStyle,
    loading,
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
        contentContainerStyle={[styles.body, innerContainerStyle]}
      >
        {loading ? renderSpinner() : children}
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
