Write a JavaScript script that fetches and prints how to say "Hello" depending on the language
- You should use this API service: ```https://www.fourtonfish.com/hellosalut/hello/```
- The language code will be the value entered in the tag ```INPUT#language_code``` (ex: ```es```, ```fr```, ```en``` etc.)
- The translation must be fetched when the user clicks on ```INPUT#btn_translate``` OR presses ```ENTER``` when the focus is on ```INPUT#language_code```
- The translation of “Hello” must be displayed in the HTML tag ```DIV#hello```
- You can’t use ```document.querySelector``` to select the HTML tag
- You must use the JQuery API
- You script must work when imported from the ```<head>``` tag
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 103-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="103-script.js"></script>
  </head>
  <body>
    <header> 
      Say Hello
    </header>
    <br />
    <input id="language_code" type="text" placeholder="Language code"/>
    <input id="btn_translate" type="button" value="Translate"/>
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
