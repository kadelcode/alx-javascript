Write a function that converts a number from base 10 to another base passed as argument:
- Prototype: ```exports.converter = function (base)```
- You are not allowed to import any file
- You are not allowed to declare any new variable (```var```, ```let```, etc..)
```
guillaume@ubuntu:~/0x13$ cat 10-main.js
#!/usr/bin/node
const converter = require('./10-converter').converter;

let myConverter = converter(10);

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));


myConverter = converter(16);

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));

guillaume@ubuntu:~/0x13$ ./10-main.js
2
12
89
2
c
59
guillaume@ubuntu:~/0x13$
```
