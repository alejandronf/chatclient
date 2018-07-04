var moment = require('moment');

var date = moment();
date.add(1, 'years').subtract(9,'month');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm A'));

createAt=1234;
var date = moment(createAt);
console.log(date.format());
var stimestamp = moment().valueOf();
console.log(stimestamp);
