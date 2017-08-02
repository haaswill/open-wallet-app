import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance, fetchExpenses, fetchIncomes } from '../../actions';
import { MainView, Spinner, MainCard } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';

class Home extends Component {
  componentWillMount() {
    this.props.fetchAccountBalance();
    this.props.fetchExpenses();
    this.props.fetchIncomes();
  }

  renderAccountBalance() {
    const { loading, accountBalance } = this.props;
    if (loading) {
      return <Spinner size='small' />;
    }
    return (
      <Text style={[styles.accountBalanceTitle, { color: accountBalance > 0 ? colors.incomeColor : colors.expenseColor }]}>
        {accountBalance}
      </Text>
    );
  }

  renderWallets() {
    const { loading, wallets } = this.props;
    if (loading && !wallets) {
      return <Spinner size='small' />;
    }
    return wallets.map(wallet => (
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
    const { loading, expenses } = this.props;
    if (loading && !expenses) {
      return <Spinner size='small' />;
    }
    return expenses.map(expense => (
      <View key={expense._id} style={styles.transaction}>
        <Icon
          name={expense.transactionCategory.icon || ''}
          type='material-community'
          color={expense.color}
          containerStyle={styles.walletIcon}
        />
        <View style={styles.transactionDescription}>
          <Text style={styles.text}>{expense.description}</Text>
          <Text style={[styles.text, { color: '#ff0000' }]}>{expense.value}</Text>
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
    const { loading, incomes } = this.props;
    if (loading && !incomes) {
      return <Spinner size='small' />;
    }
    return incomes.map(income => (
      <View key={income._id} style={styles.transaction}>
        <Icon
          name={income.transactionCategory.icon || ''}
          type='material-community'
          color={income.color}
          containerStyle={styles.walletIcon}
        />
        <View style={styles.transactionDescription}>
          <Text style={styles.text}>{income.description}</Text>
          <Text style={[styles.text, { color: '#00ff00' }]}>{income.value}</Text>
        </View>
        <Icon
          name='chevron-right'
          type='material-community'
          color={colors.primaryColor}
          containerStyle={styles.walletIcon}
        />
      </View >
    ));
  }

  render() {
    return (
      <MainView>
        <ScrollView>
          <MainCard title='Account Balance'>
            {this.renderAccountBalance()}
          </MainCard>
          <MainCard title='Wallets'>
            {this.renderWallets()}
          </MainCard>
          <MainCard title='Expenses'>
            {this.renderExpenses()}
          </MainCard>
          <MainCard title='Incomes'>
            {this.renderIncomes()}
          </MainCard>
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
