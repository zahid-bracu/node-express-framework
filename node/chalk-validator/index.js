var validator = require('validator'); // validator import
const chalk = require('chalk'); // chalk import

//email validator checker
var result=validator.isEmail('zahid.mym@gmail.com')


//ternary + chalk + result
result=result ? chalk.green.bgRed(result) : chalk.red.inverse.bgBlue(result);
console.log(result);