Write a JavaScript script that updates the text color of the ```<header>``` element to red (```#FF0000```) when the user clicks on the tag ```DIV#red_header```:
- You can’t use document.querySelector to select the HTML tag
- You must use the JQuery API
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 2-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  </head>
  <body>
    <header> 
      First HTML page
    </header>
    <div id="red_header">Red header</div>
    <footer>
      Holberton School - 2017
    </footer>
    <script type="text/javascript" src="2-script.js"></script>
  </body>
</html>
guillaume@ubuntu:~/0x15$
```
