Write a function that prints the number of arguments already printed and the new argument value. (see example below)
- Prototype: ```exports.logMe = function (item)```
- Output format: ```<number arguments already printed>: <current argument value>```
```
guillaume@ubuntu:~/0x13$ cat 9-main.js
#!/usr/bin/node
const logMe = require('./9-logme').logMe;

logMe("Hello");
logMe("Best");
logMe("School");

guillaume@ubuntu:~/0x13$ ./9-main.js
0: Hello
1: Best
2: School
guillaume@ubuntu:~/0x13$
```
