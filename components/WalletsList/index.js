import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchTransactionsByWalletId } from '../../actions';
import { WalletsListItem } from '../WalletsListItem';
import { Spinner } from '../Spinner';
import { formatCurrency } from '../../handlers';
import { colors } from '../../config/styles';
import styles from './styles';

class WalletsList extends Component {
  state = {
    expandedWallet: null
  }

  onPressWallet = id => {
    this.updateTransactions(id);
    this.setState({ expandedWallet: id });
  }

  updateTransactions = id => this.props.fetchTransactionsByWalletId(id);

  renderIcon = (name, color) => <Icon
    color={color}
    containerStyle={{ flex: 1 }}
    name={name}
    size={20}
    type='material-community'
  />;


  renderTransactionsByWalletId = () => {
    const { walletTransactions } = this.props;
    if (walletTransactions === null) {
      return <Spinner size='small' />;
    } else if (walletTransactions.length === 0) {
      return (
        <View style={styles.transactionsNotFoundContainer}>
          <Text style={styles.transactionsNotFound}>No transactions found...</Text>
        </View>
      );
    }
    console.log(walletTransactions[0]);
    return walletTransactions.map(transaction => {
      const color = transaction.type === 'Expense' ? colors.expenseColor : colors.incomeColor;
      return (
        <View
          style={[styles.transactionsContainer,
          { borderColor: color }]}
          key={transaction._id}
        >
          <Text
            style={[styles.transactionsDescription,
            { color }]}
          >
            {transaction.description}
          </Text>
          <Text
            style={[styles.transactionsDescription,
            { color }]}
          >
            {formatCurrency(transaction.value)}
          </Text>
          {this.renderIcon(transaction.transactionCategory.icon, color)}
        </View>
      );
    });
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
