import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance, fetchExpenses, fetchIncomes } from '../../actions';
import { MainView, Spinner } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';

class Home extends Component {
  componentWillMount() {
    this.props.fetchAccountBalance();
    this.props.fetchExpenses();
    this.props.fetchIncomes();
  }

  renderAccountBalance() {
    if (this.props.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Text style={styles.accountBalanceTitle}>
        {this.props.accountBalance}
      </Text>
    );
  }

  renderWallets() {
    if (this.props.loading && !this.props.wallets) {
      return <Spinner size='small' />;
    }
    return this.props.wallets.map(wallet => (
      <View
        key={wallet._id}
        style={styles.walletContainer}
      >
        <Icon
          name={wallet.icon || ''}
          type='material-community'
          color={wallet.color}
          containerStyle={styles.walletIcon}
        />
        <View style={styles.walletDescription}>
          <Text style={styles.title}>{wallet.description}</Text>
          <Text style={styles.text}>{wallet.value}</Text>
        </View>
        <Icon
          name='chevron-right'
          type='material-community'
          color={colors.primaryColor}
          containerStyle={styles.walletIcon}
        />
      </View>
    ));
  }

  renderExpenses() {
    if (this.props.loading && !this.props.expenses) {
      return <Spinner size='small' />;
    }
    return this.props.expenses.map(expense => (
      <View key={expense._id} style={styles.transaction}>
        <View style={styles.transactionDescription}>
          <Text style={styles.text}>{expense.description}</Text>
        </View>
        <Icon
          name='chevron-right'
          type='material-community'
          color={colors.primaryColor}
          containerStyle={styles.walletIcon}
        />
      </View>
    ));
  }

  renderIncomes() {
    if (this.props.loading && !this.props.incomes) {
      return <Spinner size='small' />;
    }
    return this.props.incomes.map(income => (
      <View key={income._id} style={styles.transaction}>
        <View style={styles.transactionDescription}>
          <Text style={styles.text}>{income.description}</Text>
        </View>
        <Icon
          name='chevron-right'
          type='material-community'
          color={colors.primaryColor}
          containerStyle={styles.walletIcon}
        />
      </View>
    ));
  }

  render() {
    return (
      <MainView>
        <ScrollView>
          <View style={styles.accountBalance}>
            <Text style={styles.accountBalanceTitle}>Account Balance</Text>
            {this.renderAccountBalance()}
          </View>
          <Divider style={styles.divider} />
          <View style={styles.container}>
            {this.renderWallets()}
          </View>
          <Divider style={styles.divider} />
          <View style={styles.container}>
            <Text style={styles.title}>Week Expenses</Text>
            {this.renderExpenses()}
            <Text style={styles.title}>Week Incomes</Text>
            {this.renderIncomes()}
          </View>
        </ScrollView>
      </MainView>
    );
  }
}

const mapStateToProps = ({ wallet, transaction }) => {
  const { wallets, accountBalance } = wallet;
  const { expenses, incomes } = transaction;
  return { wallets, accountBalance, expenses, incomes };
};

export default connect(mapStateToProps, {
  fetchAccountBalance,
  fetchExpenses,
  fetchIncomes
})(Home);
