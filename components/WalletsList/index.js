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

  renderIcon = (name, color) => (
    <Icon
      color={color}
      containerStyle={styles.transactionsIcon}
      name={name}
      size={20}
      type='material-community'
    />
  );

  renderEditIcon = (id, color) => (
    <Icon
      color={color}
      containerStyle={styles.transactionsIcon}
      name='pencil'
      size={20}
      type='material-community'
    />
  );

  renderTransactionNotFound = () => (
    <View style={styles.transactionsNotFoundContainer}>
      <Text style={styles.transactionsNotFound}>No transactions found...</Text>
    </View>
  );

  renderTransactionDescription = (content, color) => (
    <Text
      style={[styles.transactionsDescription,
      { color }]}
    >
      {content}
    </Text>
  );

  renderTransactionValue = (content, color) => (
    <Text
      style={[styles.transactionsValue,
      { color }]}
    >
      {formatCurrency(content)}
    </Text>
  );

  renderTransaction = transaction => {
    const color = transaction.type === 'Expense' ? colors.expenseColor : colors.incomeColor;
    console.log(transaction);
    return (
      <View
        key={transaction._id}
        style={[styles.transactionsContainer,
        { borderColor: color }]}
      >
        {this.renderIcon(transaction.transactionCategory.icon, color)}
        {this.renderTransactionDescription(transaction.description, color)}
        {this.renderTransactionValue(transaction.value, color)}
        {this.renderEditIcon(transaction._id, color)}
      </View>
    );
  }

  renderTransactionsByWalletId = () => {
    const { walletTransactions } = this.props;
    if (walletTransactions === null) {
      return <Spinner size='small' />;
    } else if (walletTransactions.length === 0) {
      return this.renderTransactionNotFound();
    }
    return walletTransactions.map(transaction => this.renderTransaction(transaction));
  }

  renderWallets = wallets => wallets.map(wallet => {
    const expanded = this.state.expandedWallet === wallet._id;
    return (
      <WalletsListItem
        color={expanded ? colors.secondaryColor : colors.inactiveColor}
        expanded={expanded}
        id={wallet._id}
        key={wallet._id}
        leftIcon={wallet.icon}
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
