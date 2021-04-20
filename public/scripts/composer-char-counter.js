$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const remainingChars = 140 - $(this).val().length;
    const counter = $(this).parent().siblings('.form-bottom').children('.counter')[0];

    counter.innerText = remainingChars;

    if (remainingChars < 0) {
      $(counter).css('color', '#FF0000');
    } else {
      $(counter).css('color', '#545149');
    }


  });
});