#!/usr/bin/node

/*
 * A function that increments and call a function
 */

exports.addMeMaybe = function (number, theFunction) {
  // increment the number
  number++;

  // call the provided function with the incremented number
  theFunction(number);
};
