// 6-square.js
//
// import Square of 5-square.js
const iSquare = require('../5-square/5-square');

class Square extends iSquare {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

// export this module
module.exports = Square;
