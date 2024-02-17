Write a function that executes ```x``` times a function.
- The function must be visible from outside
- Prototype: ```function (x, theFunction)```
- You are not allowed to use ```var```
```
guillaume@ubuntu:~/0x12$ cat 101-main.js
#!/usr/bin/node
const callMeMoby = require('./101-call_me_moby').callMeMoby;
callMeMoby(3, function () {
  console.log('C is fun');
});
guillaume@ubuntu:~/0x12$ ./101-main.js
C is fun
C is fun
C is fun
guillaume@ubuntu:~/0x12$
```
