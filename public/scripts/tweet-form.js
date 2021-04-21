$(document).ready(function() {
  $('.new-form').on('submit', function(event) {
    event.preventDefault();
    const message = $(this).serialize();
    console.log($(this));


    if (message.length <= 5) {
      alert("This is the police");
      return;
    } else if (message.length > 145) {
      alert("This is the police again");
      console.log(message);
      return;
    }

    console.log("we got here");

    $.post("/tweets", message, function(event) {

    });

  });
});
