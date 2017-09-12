import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance } from '../../actions';
import { RefreshableMainScrollView, Header, WalletsListContainer } from '../../components';
import { colors } from '../../config/styles';

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
        title='September'
      />
    );
  }

  renderWallets = wallets => <WalletsListContainer wallets={wallets} />

  render() {
    const {
      loading,
      refreshing
    } = this.state;
    return (
      <RefreshableMainScrollView
        header={this.renderHeader()}
        loading={loading}
        onRefresh={() => this.updateWallets()}
        refreshing={refreshing}
      >
        <StatusBar barStyle='light-content' />
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
