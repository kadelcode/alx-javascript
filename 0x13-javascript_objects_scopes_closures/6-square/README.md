Write a class ```Square``` that defines a square and inherits from ```Square``` of ```5-square.js```:
- You must use the ```class``` notation for defining your class and ```extends```
- Create an instance method called ```charPrint(c)``` that prints the rectangle using the character ```c```.
	- If ```c``` is ```undefined```, use the character ```X```
```
guillaume@ubuntu:~/0x13$ cat 6-main.js
#!/usr/bin/node
const Square = require('./6-square');

const s1 = new Square(4);
s1.charPrint();

s1.charPrint('C');

guillaume@ubuntu:~/0x13$ ./6-main.js
XXXX
XXXX
XXXX
XXXX
CCCC
CCCC
CCCC
CCCC
guillaume@ubuntu:~/0x13$
```
