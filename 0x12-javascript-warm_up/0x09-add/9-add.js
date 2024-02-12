#!/usr/bin/node

/*
 * A script that prints the addition of 2 integers
 *
 */

// node process
const { argv } = require('process');

function add (a, b) {
  return a + b;
}

const firstArg = parseInt(argv[2]);

const secondArg = parseInt(argv[3]);

console.log(add(firstArg, secondArg));
