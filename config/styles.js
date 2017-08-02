import { Dimensions, Platform, StatusBar } from 'react-native';
// Global Colors
const colors = {
  primaryColor: '#1693a5',
  secondaryColor: '#ecf0f1',
  errorColor: '#ff0000',
  successColor: '#7fff24',
  warningColor: '#ff9900',
  facebookColor: '#3b5998',
  googlePlusColor: '#d34836',
  borderColor: '#ddd',
  white: '#ffffff',
  black: '#000000',
  incomeColor: '#27ae60',
  expenseColor: '#e74c3c'
};

const sizes = {
  screenWidth: Dimensions.get('window').width,
  statusBar: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  primaryTextSize: 18,
  primaryTextWeight: 'bold',
  secondaryTextSize: 12
};

export { colors, sizes };
