/**
 * A module containing a class `Rectangle`
 */

class Rectangle {
  /*
  * a class that defines a rectangle
  * constructor takes two arguments: `w` and `h`
  * the instance attribute `width` is initialized with the value of `w`
  * the instance attribute `height` is initialized with the value of `h`
  */

  constructor (w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      // return an empty object if condition is true
      return {};
    }
    this.width = w;
    this.height = h;
  }
}

// used the rectangle file in other js files
module.exports = Rectangle;
