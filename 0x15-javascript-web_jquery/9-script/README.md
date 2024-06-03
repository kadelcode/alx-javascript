Write a JavaScript script that fetches from ```https://hellosalut.stefanbohacek.dev/?lang=fr``` and displays the value of ```hello``` from that fetch in the HTML tag ```DIV#hello```.
- The translation of “hello” must be displayed in the HTML tag ```DIV#hello```
- You can’t use ```document.querySelector``` to select the HTML tag
- You must use the JQuery API
- Your script must work when it is imported from the ```<head>``` tag
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 9-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="9-script.js"></script>
  </head>
  <body>
    <header> 
      Say Hello!
    </header>
    <br />
    <div id="hello"></div>
    <br />
    <footer>
      Holberton School - 2017
    </footer>
  </body>
</html>
guillaume@ubuntu:~/0x15$
```
