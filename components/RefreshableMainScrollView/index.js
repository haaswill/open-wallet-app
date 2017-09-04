import React from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';
import styles from './styles';

const RefreshableMainScrollView = props => {
  const {
    children,
    header,
    loading,
    onRefresh,
    refreshing
  } = props;
  const renderSpinner = () => (
    <View style={styles.spinner}>
      <Spinner size='large' />
    </View>
  );
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
        contentContainerStyle={[styles.body, loading && { flex: 1 }]}
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
