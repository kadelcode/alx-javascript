$(document).ready(function () {
  $('#add_item').click(function () {
    $('ul.my_list').append('<li>Item</li>');
  });

  $('#remove_item').click(function () {
    $('ul.my_list li:last').remove(); /* removes the last item in the list */
  });

  $('#clear_list').click(function () {
    $('ul.my_list').empty(); /* REMOVE ALL list elements */
  });
});
