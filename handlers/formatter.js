import numeral from 'numeral';
import moment from 'moment';

export const formatCurrency = value => numeral(value).format('$0,0.00');
export const formatDate = value => moment(value).format('MM/DD/YYYY');
