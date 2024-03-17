#!/usr/bin/node

// import file system
const fs = require('fs');

const filePath = process.argv[2]; // first argument
const content = process.argv[3]; // second argument

fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
