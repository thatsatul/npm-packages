const test = require('./index');
const { getJSDateObj } = test.dateHelper;
const dtHelper = require('./utils/datehelper');
const emailHelper = require('./utils/emailhelper');

test.printMsg();
// Date helper
console.log(getJSDateObj('22/08/2022'));
console.log(dtHelper.getJSDateObj('12/08/2022'));

// Email helper
console.log('Email valid: atu11anand : ', emailHelper.validateEmail('atu11anand'));
console.log('Email valid: atu11anand@ : ', emailHelper.validateEmail('atu11anand@'));
console.log('Email valid: atu11anand@gmail : ', emailHelper.validateEmail('atu11anand@gmail'));
console.log('Email valid: atu11anand@gmail. : ', emailHelper.validateEmail('atu11anand@gmail.'));
console.log('Email valid: atu11anand@gmail.c : ', emailHelper.validateEmail('atu11anand@gmail.c'));
console.log('Email valid: atu11anand@gmail.co : ', emailHelper.validateEmail('atu11anand@gmail.co'));
console.log('Email valid: atu11anand@gmail.com : ', emailHelper.validateEmail('atu11anand@gmail.com'));
console.log('Email valid: atu1*anand@gmailcom : ', emailHelper.validateEmail('atu1*anand@gmail.com'));