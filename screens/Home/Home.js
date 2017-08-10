import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Icon, List } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance } from '../../actions';
import { MainView, Spinner, Header, TogglableListItem } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';
import { formatCurrency } from '../../handlers';

class Home extends Component {
  state = {
    loading: false,
    openedWallet: null
  };

  componentWillMount() {
    this.props.fetchAccountBalance();
  }

  onClickRightIcon = id => {
  }

  renderHeader() {
    return (
      <Header
        elementLeft={this.renderIcon('chevron-left')}
        elementRight={this.renderIcon('chevron-right')}
        title='August'
      />
    );
  }

  renderIcon(name) {
    return (<Icon
      color={colors.white}
      name={name}
      size={35}
      type='material-community'
    />);
  }

  renderAccountBalance() {
    const { loading, accountBalance } = this.props;
    if (loading) {
      return <Spinner size='small' />;
    }
    return (
      <Text
        style={[
          styles.accountBalanceTitle,
          { color: accountBalance > 0 ? colors.incomeColor : colors.expenseColor }
        ]}
      >
        {formatCurrency(accountBalance)}
      </Text>
    );
  }

  renderWallets() {
    const { wallets } = this.props;
    const { loading } = this.state;
    if (loading && !wallets) {
      return <Spinner size='small' />;
    }
    return wallets.map(wallet => (
      <TogglableListItem
        containerStyle={styles.itemContainer}
        id={wallet._id}
        isOpened
        key={wallet._id}
        leftIcon={<Icon
          color={colors.inactiveColor}
          iconStyle={styles.icon}
          name={wallet.icon}
          size={40}
          type='material-community'
        />}
        onPress={this.onClickRightIcon}
        rightIcon={{ name: 'chevron-right', type: 'material-community', size: 60 }}
        subtitle={formatCurrency(wallet.value)}
        subtitleStyle={styles.subtitle}
        title={wallet.description}
        titleStyle={styles.title}
      />
    ));
  }

  render() {
    console.log('rendered');
    return (
      <MainView header={this.renderHeader()}>
        <ScrollView>
          <List style={styles.container}>
            {this.renderWallets()}
          </List>
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
  fetchAccountBalance
})(Home);
