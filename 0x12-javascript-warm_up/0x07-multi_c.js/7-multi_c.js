#!/usr/bin/node

const { argv } = require('process');
/*
 * A script that prints `x` times
 * `C is fun`
 */

// Get the first argument in the command-line
const x = argv[2];

// Convert the first argument to a number
const num = parseInt(x);

if (isNaN(num)) { console.log('Missing number of occurrences'); } else {
  let i = 0;

  while (i < num) {
    console.log('C is fun');
    i++;
  }
}
