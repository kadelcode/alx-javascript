Write a JavaScript script that adds, removes and clears ```LI``` elements from a list when the user clicks:
- The new element must be: ```<li>Item</li>```
- The new element must be added to ```UL.my_list```
- When the user clicks on ```DIV#add_item```: a new element is added to the list
- When the user clicks on ```DIV#remove_item```: the last element is removed from the list
- When the user clicks on ```DIV#clear_list```: all elements of the list are removed
- You can’t use ```document.querySelector``` to select the HTML tag
- You must use the JQuery API
- You script must work when it imported from the ```HEAD``` tag
Please test with this HTML file in your browser:
```
guillaume@ubuntu:~/0x15$ cat 101-main.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Holberton School</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="101-script.js"></script>
  </head>
  <body>
    <header> 
      First HTML page
    </header>
    <br />
    <div id="add_item">Add item</div>
    <div id="remove_item">Remove item</div>
    <div id="clear_list">Clear list</div>
    <br />
    <ul class="my_list">
      <li>Item</li>
    </ul>
    <footer>
      Holberton School - 2017
    </footer>
  </body>
</html>
guillaume@ubuntu:~/0x15$
```
