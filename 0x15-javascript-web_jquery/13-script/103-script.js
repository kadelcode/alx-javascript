$(document).ready(function() {
  function fetchHello() {
    const langCode = $('#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`;
    
    $.get(apiUrl, function(data) {
      $('#hello').text(data.hello);
    });
  }
  
  $('#btn_translate').click(fetchHello);
  
  $('#language_code').keypress(function(event) {
    if (event.which == 13) {
      fetchHello();
    }
  });
});
