import numeral from 'numeral';

export const formatCurrency = value => numeral(value).format('$0,0.00');
