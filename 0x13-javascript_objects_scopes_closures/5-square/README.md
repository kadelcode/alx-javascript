Write a class ```Square``` that defines a square and inherits from ```Rectangle``` of ```4-rectangle.js```:
- You must use the ```class``` notation for defining your class and ```extends```
- The constructor must take 1 argument: ```size```
- The constructor of ```Rectangle``` must be called (by using ```super()```)
```
guillaume@ubuntu:~/0x13$ cat 5-main.js
#!/usr/bin/node
const Square = require('./5-square');

const s1 = new Square(4);
s1.print();
s1.double();
s1.print();

guillaume@ubuntu:~/0x13$ ./5-main.js
XXXX
XXXX
XXXX
XXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
guillaume@ubuntu:~/0x13$
```
