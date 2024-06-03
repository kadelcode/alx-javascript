Write a JavaScript that fetches the character ```name``` from this URL: ```https://swapi-api.alx-tools.com/api/people/5/?format=json```
- The name must be displayed in the HTML tag DIV#character
- You can’t use document.querySelector to select the HTML tag
- You must use the JQuery API
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 7-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  </head>
  <body>
    <header> 
      Star Wars character
    </header>
    <br />
    <div id="character"></div>
    <br />
    <footer>
      Holberton School - 2017
    </footer>
    <script type="text/javascript" src="7-script.js"></script>
  </body>
</html>
guillaume@ubuntu:~/0x15$
```
