// A module that contains a class `Rectangle`

class Rectangle {
  /*
  * A this class defines a rectangle
  * A constructor that takes two arguments: `w` and `h`
  */
  constructor (w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) { return {}; }
    // initialize instance attributes
    this.width = w;
    this.height = h;
  }

  // instance method
  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}

// make the Rectangle class reusable in other js files
module.exports = Rectangle;
