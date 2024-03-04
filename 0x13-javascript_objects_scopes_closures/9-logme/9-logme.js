// 9-logme.js
let numArgsPrinted = 0;

exports.logMe = function (item) {
  console.log(`${numArgsPrinted}: ${item}`);
  numArgsPrinted++;
};
