const test = require('./index');
const { getJSDateObj } = test.dateHelper;
const dtHelper = require('./utils/datehelper');
const emailHelper = require('./utils/emailhelper');

test.printMsg();
// Date helper
console.log(getJSDateObj('22/08/2022'));
console.log(dtHelper.getJSDateObj('12/08/2022'));

console.log(dtHelper.isFutureDate(new Date('2023-02-23'))); // true
console.log(dtHelper.isFutureDate(new Date('2023-01-30'))); // false

console.log(dtHelper.isPastDate(new Date('2023-02-23'))); // false
console.log(dtHelper.isPastDate(new Date('2023-01-30'))); // true

console.log(dtHelper.getMonDDYYYY(new Date('2023-02-22'))); // Feb 22, 2023

const x1 = dtHelper.addDays('2023-02-20', 3);
console.log(dtHelper.getMonDDYYYY(x1)); // Feb 23, 2023


// Email helper
console.log('Email valid: test1test : ', emailHelper.validateEmail('test1test')); // false
console.log('Email valid: test1test@ : ', emailHelper.validateEmail('test1test@')); // false
console.log('Email valid: test1test@gmail : ', emailHelper.validateEmail('test1test@gmail')); // false
console.log('Email valid: test1test@gmail. : ', emailHelper.validateEmail('test1test@gmail.')); // false
console.log('Email valid: test1test@gmail.c : ', emailHelper.validateEmail('test1test@gmail.c')); // false
console.log('Email valid: test1test@gmail.co : ', emailHelper.validateEmail('test1test@gmail.co')); // false
console.log('Email valid: test1test@gmail.com : ', emailHelper.validateEmail('test1test@gmail.com')); // true
console.log('Email valid: test1*test@gmailcom : ', emailHelper.validateEmail('test1*test@gmail.com')); // true
