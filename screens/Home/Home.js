import React, { Component } from 'react';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchAccountBalance } from '../../actions';
import { MainScrollView, Spinner, Header, WalletsList } from '../../components';
import { colors } from '../../config/styles';
import styles from './styles';

class Home extends Component {
  state = {
    loading: true
  };

  componentWillMount() {
    this.updateWallets();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wallets.length > 0 || this.props.wallets.length > 0) {
      this.setState({ loading: false });
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
        title='August'
      />
    );
  }

  renderWallets(wallets) {
    if (this.state.loading) {
      return <Spinner size='large' />;
    }
    return (
      <WalletsList wallets={wallets} />
    );
  }

  render() {
    const {
      wallets
    } = this.props;
    return (
      <MainScrollView header={this.renderHeader()}>
        <Button
          large
          title="Update"
          onPress={() => this.updateWallets()}
        />
        {this.renderWallets(wallets)}
      </MainScrollView>
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
