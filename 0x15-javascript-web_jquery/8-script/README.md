Write a JavaScript script that fetches and lists the ```title``` for all movies by using this URL:```https://swapi-api.alx-tools.com/api/films/?format=json```
- All movie titles must be list in the HTML tag ```UL#list_movies```
- You can’t use ```document.querySelector``` to select the HTML tag
- You must use the JQuery API
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 8-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  </head>
  <body>
    <header> 
      Star Wars movies
    </header>
    <br />
    <ul id="list_movies">
    </ul>
    <br />
    <footer>
      Holberton School - 2017
    </footer>
    <script type="text/javascript" src="8-script.js"></script>
  </body>
</html>
guillaume@ubuntu:~/0x15$
```
