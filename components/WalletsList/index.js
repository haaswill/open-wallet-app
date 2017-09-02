import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchTransactionsByWalletId } from '../../actions';
import { WalletsListItem } from '../WalletsListItem';
import { Spinner } from '../Spinner';
import { formatCurrency } from '../../handlers';
import { colors } from '../../config/styles';
import styles from './styles';

class WalletsList extends Component {
  state = {
    expandedWallet: null,
    loading: true
  }

  onPressWallet = id => {
    console.log(id);
    this.updateTransactions(id);
    this.setState({ expandedWallet: id });
  }

  updateTransactions = id => {
    this.props.fetchTransactionsByWalletId(id);
  }

  renderTransactionsByWalletId = () => {
    const { walletTransactions } = this.props;
    if (!this.state.loading) {
      return walletTransactions.map(transaction => (
        <View style={styles.transactionContainer} key={transaction._id}>
          <Text>{transaction.description}</Text>
          <Text>{transaction.value}</Text>
        </View>
      ));
    }
    return <Spinner size='small' />;
  }

  renderWallets = wallets => wallets.map(wallet => {
    const expanded = this.state.expandedWallet === wallet._id;
    return (
      <WalletsListItem
        color={expanded ? colors.secondaryColor : colors.inactiveColor}
        expanded={expanded}
        id={wallet._id}
        leftIcon={wallet.icon}
        key={wallet._id}
        onPress={this.onPressWallet}
        rightIcon={expanded ? 'chevron-down' : 'chevron-right'}
        subtitle={formatCurrency(wallet.value)}
        subtitleStyle={expanded && { color: colors.secondaryColor }}
        title={wallet.description}
        titleStyle={expanded && { color: colors.secondaryColor }}
      >
        <View style={styles.walletContainer}>
          <Text style={styles.transactionsTitle}>Last Transactions</Text>
          {this.renderTransactionsByWalletId()}
        </View>
      </WalletsListItem>
    );
  });

  render() {
    return (
      <List containerStyle={styles.container}>
        {this.renderWallets(this.props.wallets)}
      </List>
    );
  }
}

const mapStateToProps = ({ transaction }) => {
  const { walletTransactions } = transaction;
  return { walletTransactions };
};

const WalletsListContainer = connect(mapStateToProps, { fetchTransactionsByWalletId })(WalletsList);

export { WalletsListContainer };
