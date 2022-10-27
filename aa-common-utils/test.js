const test = require('./index');
const { getJSDateObj } = test.dateHelper;
const dtHelper = require('./utils/datehelper');

test.printMsg();
console.log(getJSDateObj('22/08/2022'));
console.log(dtHelper.getJSDateObj('12/08/2022'));
