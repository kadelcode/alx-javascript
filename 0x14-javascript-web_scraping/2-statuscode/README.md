Write a script that display the status code of a GET request.
- The first argument is the URL to request (```GET```)
- The status code must be printed like this ```code: <status code>```
- You must use the module ```request```
```
guillaume@ubuntu:~/0x14$ ./2-statuscode.js https://alx-intranet.hbtn.io/status
code: 200
guillaume@ubuntu:~/0x14$ ./2-statuscode.js https://alx-intranet.hbtn.io/doesnt_exist
code: 404
guillaume@ubuntu:~/0x14$
```
