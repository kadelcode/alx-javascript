Write a file that modifies the value of ```myVar``` to ```333```
```
guillaume@ubuntu:~/0x12$ cat 100-main.js
#!/usr/bin/node
myVar = 89;
require('./100-let_me_const')
console.log(myVar);
guillaume@ubuntu:~/0x12$ ./100-main.js
333
guillaume@ubuntu:~/0x12$
```
Hint: Scope
**This exercise doesn’t pass** ```semistandard``` so don’t worry about it.
