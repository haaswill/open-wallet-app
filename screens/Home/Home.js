import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance } from '../../actions';
import { RefreshableMainScrollView, Spinner, Header, WalletsListContainer } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';

class Home extends Component {
  state = {
    loading: true,
    refreshing: false
  };

  componentWillMount() {
    this.updateWallets();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wallets.length > 0 || this.props.wallets.length > 0) {
      this.setState({
        loading: false,
        refreshing: false
      });
    }
  }

  updateWallets = () => {
    this.props.fetchAccountBalance();
  }

  renderHeader() {
    const renderIcon = name => (
      <Icon
        color={colors.white}
        name={name}
        size={35}
        type='material-community'
      />
    );

    return (
      <Header
        elementLeft={renderIcon('chevron-left')}
        elementRight={renderIcon('chevron-right')}
        title='August'
      />
    );
  }

  renderWallets(wallets) {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner size='large' />
        </View>
      );
    }
    return (
      <WalletsListContainer wallets={wallets} />
    );
  }

  render() {
    return (
      <RefreshableMainScrollView
        header={this.renderHeader()}
        onRefresh={() => this.updateWallets()}
        refreshing={this.state.refreshing}
      >
        {this.renderWallets(this.props.wallets)}
      </RefreshableMainScrollView>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  const { wallets, accountBalance } = wallet;
  return { wallets, accountBalance };
};

export default connect(mapStateToProps, {
  fetchAccountBalance
})(Home);
