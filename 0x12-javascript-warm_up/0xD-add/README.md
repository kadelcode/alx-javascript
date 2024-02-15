Write a function that returns the addition of 2 integers.
- The function must be visible from outside
- The name of the function must be ```add```
- You are not allowed to use ```var```

[Tip](https://51elliot.blogspot.com/2012/01/simple-intro-to-nodejs-module-scope.html)
```
guillaume@ubuntu:~/0x12$ cat 13-main.js
#!/usr/bin/node
const add = require('./13-add').add;
console.log(add(3, 5));
guillaume@ubuntu:~/0x12$ ./13-main.js
8
guillaume@ubuntu:~/0x12$
```
