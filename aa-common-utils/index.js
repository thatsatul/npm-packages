const dateHelper = require('./utils/datehelper');
const emailHelper = require('./utils/emailHelper');

function printMsg () {
  console.log("This is a demo message");
}

module.exports = {
  printMsg,
  dateHelper,
  emailHelper
};
