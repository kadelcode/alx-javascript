#!/usr/bin/node

/*
 * A script that prints a square
 */

// require node process
const { argv } = require('process');

// get the first command-line argument
const firstArg = argv[2];

// convert argument to an integer
const num = parseInt(firstArg);

if (isNaN(num)) {
  console.log('Missing size');
} else {
  let i = 0;

  while (i < num) {
    let row = '';
    let j = 0;
    while (j < num) {
      row += 'X';
      j++;
    }
    i++;
    console.log(row);
  }
}
