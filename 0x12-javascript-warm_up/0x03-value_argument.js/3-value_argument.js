#!/usr/bin/node

const { argv } = require('process');

const firstArg = argv[2];

if (firstArg) {
  console.log(firstArg);
} else {
  console.log('No argument');
}
