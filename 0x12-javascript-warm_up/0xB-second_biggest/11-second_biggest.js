#!/usr/bin/node

// require node process
const { argv } = require('process');

if (argv.length <= 1) {
  console.log(0);
}

// convert string arguments to numbers
const integers = argv.map(arg => parseInt(arg));

// remove duplicate arg
const uniqueIntegers = Array.from(new Set(integers));

// sort in decending order
const sortedIntegers = uniqueIntegers.sort((a, b) => b - a);

console.log(sortedIntegers[2] || 0);
