/*
 * A module that contains a `Rectangle` class.
 * contructor with 2 args: `w` and `h`
 */

class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}

// make the `Rectangle` class available in other js files
module.exports = Rectangle;
