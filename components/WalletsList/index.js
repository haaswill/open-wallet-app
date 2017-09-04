import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchTransactionsByWalletId } from '../../actions';
import { WalletsListItem } from '../WalletsListItem';
import { Spinner } from '../Spinner';
import { formatCurrency, formatDate } from '../../handlers';
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
      type='material-community'
    />
  );

  renderEditIcon = (id, color) => (
    <Icon
      color={color}
      containerStyle={styles.transactionsIcon}
      name='chevron-right'
      onPress={() => console.log(id)}
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
      <List
        key={transaction._id}
        containerStyle={styles.container}
      >
        <ListItem
          containerStyle={[styles.transactionsContainer, { borderColor: color, borderBottomColor: color }]}
          leftIcon={this.renderIcon(transaction.transactionCategory.icon, color)}
          rightIcon={this.renderEditIcon(transaction._id, color)}
          rightTitle={formatDate(transaction.date)}
          rightTitleStyle={{ color }}
          subtitle={formatCurrency(transaction.value)}
          subtitleStyle={[styles.transactionsValue, { color }]}
          title={transaction.description}
          titleStyle={[styles.transactionsDescription, { color }]}
        />
      </List>
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

  renderWallets = (wallets) => wallets.map(wallet => {
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
    const {
      wallets,
      walletTransactions
    } = this.props;
    return (
      <List containerStyle={styles.container}>
        {this.renderWallets(wallets, walletTransactions)}
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
