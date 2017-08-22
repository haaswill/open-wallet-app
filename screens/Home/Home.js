import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon, List } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance } from '../../actions';
import { MainScrollView, Spinner, Header, TogglableListItem } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';
import { formatCurrency } from '../../handlers';

class Home extends Component {
  state = {
    loading: true,
    openedWallet: null
  };

  componentWillMount() {
    this.props.fetchAccountBalance();
  }

  onClickRightIcon = id => {
    this.setState({ openedWallet: id });
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
    return (
      <Icon
        color={colors.white}
        name={name}
        size={35}
        type='material-community'
      />
    );
  }

  renderAccountBalance() {
    const { accountBalance } = this.props;
    if (this.props.wallets === []) {
      return (
        <Spinner size='small' />
      );
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

  renderList() {
    if (this.props.wallets === []) {
      return (
        <Spinner size='large' />
      );
    }
    return (
      <List containerStyle={styles.container}>
        {this.renderWallets()}
      </List>
    );
  }

  renderWallets() {
    return this.props.wallets.map(wallet => (
      <TogglableListItem
        containerStyle={styles.itemContainer}
        id={wallet._id}
        isOpened={this.state.openedWallet === wallet._id}
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
        onPress={this.onClickRightIcon}
        rightIcon={{
          name: 'chevron-right',
          type: 'material-community',
          size: 60
        }}
        subtitle={formatCurrency(wallet.value)}
        subtitleStyle={styles.subtitle}
        title={wallet.description}
        titleStyle={styles.title}
      />
    ));
  }

  render() {
    return (
      <MainScrollView header={this.renderHeader()}>
        {this.renderList()}
      </MainScrollView>
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
