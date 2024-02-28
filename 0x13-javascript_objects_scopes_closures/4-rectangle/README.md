Write a class ```Rectangle``` that defines a rectangle:
- You must use the ```class``` notation for defining your class
- The constructor must take 2 arguments: ```w``` and ```h```
- Initialize the instance attribute ```width``` with the value of ```w```
- Initialize the instance attribute ```height``` with the value of ```h```
- If ```w``` or ```h``` is equal to 0 or not a positive integer, create an empty object
- Create an instance method called ```print()``` that prints the rectangle using the character X
- Create an instance method called ```rotate()``` that exchanges the ```width``` and the ```height``` of the rectangle
- Create an instance method called ```double()``` that multiples the ```width``` and the ```height``` of the rectangle by 2
```
guillaume@ubuntu:~/0x13$ cat 4-main.js
#!/usr/bin/node
const Rectangle = require('./4-rectangle');

const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();

console.log('Double:');
r1.double();
r1.print();

console.log('Rotate:');
r1.rotate();
r1.print();

guillaume@ubuntu:~/0x13$ ./4-main.js
Normal:
XX
XX
XX
Double:
XXXX
XXXX
XXXX
XXXX
XXXX
XXXX
Rotate:
XXXXXX
XXXXXX
XXXXXX
XXXXXX
guillaume@ubuntu:~/0x13$
```
