**(Advanced)**<br>
Write a script that imports an array and computes a new array.
- Your script must import ```list``` from the file ```100-data.js```
- You must use a ```map```. [Tips](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control)
- A new list must be created with each value equal to the value of the initial list, multipled by the index in the list
- Print both the initial list and the new list
```
guillaume@ubuntu:~/0x13$ cat 100-data.js
#!/usr/bin/node
exports.list = [1, 2, 3, 4, 5];
guillaume@ubuntu:~/0x13$ ./100-map.js 
[ 1, 2, 3, 4, 5 ]
[ 0, 2, 6, 12, 20 ]
guillaume@ubuntu:~/0x13$
```
