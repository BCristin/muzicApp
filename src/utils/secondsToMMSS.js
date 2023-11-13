import moment from 'moment/moment';

export default (seconds) => moment(seconds * 1000).format('mm:ss');
