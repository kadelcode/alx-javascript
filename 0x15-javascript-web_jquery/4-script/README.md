Write a JavaScript script that toggles the class of the ```<header>``` element when the user clicks on the tag ```DIV#toggle_header```:
-  The ```<header>``` element must always have one class: ```red or green```, never both in the same time and never empty.
-  If the current class is ```red```, when the user click on ```DIV#toggle_header```, the class must be updated to ```green``` ; and the reverse.
-  You can’t use ```document.querySelector``` to select the HTML tag
-  You must use the JQuery API
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 4-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <style>
      .red {
        color: #FF0000;
      }
      .green {
        color: #00FF00;
      }
    </style>
  </head>
  <body>
    <header class="green"> 
      First HTML page
    </header>
    <div id="toggle_header">Toggle header</div>
    <footer>
      Holberton School - 2017
    </footer>
    <script type="text/javascript" src="4-script.js"></script>
  </body>
</html>
guillaume@ubuntu:~/0x15$
```
