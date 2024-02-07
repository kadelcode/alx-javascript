#!/usr/bin/node

const { argv } = require('process');

// Total number of arguments
const argLength = argv.length - 2;

if (argLength === 0) {
  console.log('No argument found');
} else if (argLength === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
