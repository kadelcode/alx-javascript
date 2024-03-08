#!/usr/bin/node
// 101-sorted.js
const { dict } = require('./101-data');

// create a new dictionary
const newDict = {};

for (const userId in dict) {
  const occurrences = dict[userId];

  if (!(occurrences in newDict)) {
    newDict[occurrences] = [];
  }

  newDict[occurrences].push(userId);
}

console.log(newDict);
