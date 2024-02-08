#!/usr/bin/node

const { argv } = require('process');

first_arg = argv[2];

if (first_arg) {
	console.log(first_arg);
}

else {
	console.log("No argument");
}
