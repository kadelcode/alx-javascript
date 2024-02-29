// A module containing `Square`
// import the rectangle class from `4-rectangle`
const Rectangle = require('../4-rectangle/4-rectangle');

class Square extends Rectangle {
	/*
	A child class `Square` that defines a
	square and inherits from `Rectangle`
	*/

	constructor(size) {
		/*
		 * call the constructor of the parent class
		 * `Rectangle` with size of both width and height
		 */
		super(size, size);
	}
}

// make the Square class available to other js files
module.exports = Square;
