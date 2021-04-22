//This script adds a listener to the tweet form textbox in order to implement the 'remaining character counter'
$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const remainingChars = 140 - $(this).val().length;
    //Access the counter relative to 'this' rather than searching the entire document for it
    const counter = $(this).parent().siblings('.form-bottom').children('.counter')[0];

    counter.innerText = remainingChars;

    //Sets color to red if the char counter is below 0, reverts it to the default otherwise
    if (remainingChars < 0) {
      $(counter).css('color', '#FF0000');
    } else {
      $(counter).css('color', 'inherit');
    }

  });
});