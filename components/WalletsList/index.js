import React, { Component } from 'react';
import { Text } from 'react-native';
import { List, Icon } from 'react-native-elements';
import { WalletsListItem } from '../WalletsListItem';
import { formatCurrency } from '../../handlers';
import { colors } from '../../config/styles';
import styles from './styles';

class WalletsList extends Component {
  state = {
    expandedWallet: null
  }

  onPressRightIcon = id => {
    this.setState({ expandedWallet: id });
  }

  renderWallets = wallets => wallets.map(wallet => (
    <WalletsListItem
      id={wallet._id}
      expanded={this.state.expandedWallet === wallet._id}
      key={wallet._id}
      leftIcon={
        <Icon
          color={colors.inactiveColor}
          iconStyle={styles.icon}
          name={wallet.icon}
          size={40}
          type='material-community'
        />
      }
      onPress={this.onPressRightIcon}
      rightIcon={{
        name: 'chevron-right',
        type: 'material-community',
        size: 60
      }}
      subtitle={formatCurrency(wallet.value)}
      title={wallet.description}
    >
      <Text>UHUUUL</Text>
    </WalletsListItem>
  ));

  render() {
    const {
      wallets
    } = this.props;
    return (
      <List containerStyle={styles.container}>
        {this.renderWallets(wallets)}
      </List>
    );
  }
}

export { WalletsList };
