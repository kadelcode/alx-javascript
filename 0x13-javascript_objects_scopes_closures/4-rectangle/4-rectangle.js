// A module that contains a `Rectangle` class

class Rectangle {
  /*
   * A class that defines a rectangle
   */
  constructor (w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      return {};
    }
    this.width = w;
    this.height = h;
  }

  // instance method `print`
  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  // instance method `rotate()`
  rotate () {
    const a = this.width;
    this.width = this.height;
    this.height = a;
  }

  // instance method `double()`
  double () {
    this.height = this.height * 2;
    this.width = this.width * 2;
  }
}

// make the `Rectangle` class usable in other js files
module.exports = Rectangle;
