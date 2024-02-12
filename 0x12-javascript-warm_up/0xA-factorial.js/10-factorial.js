#!/usr/bin/node

// node process to get the command line argument
const { argv } = require('process');

// first command line argument is converted to
// the corresponding integer in base 10.
let firstArg = parseInt(argv[2]);

if (isNaN(firstArg)) {
  console.log(1);
} else {
  let fact = 1;
  while (firstArg >= 1) {
    fact = fact * firstArg;
    firstArg--;
  }
  console.log(fact);
}
