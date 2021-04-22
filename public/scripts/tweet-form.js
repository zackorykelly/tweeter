//Sends only the most recent tweet to be rendered, for use after new post
const loadTweet = function() {
  $.get("/tweets", function(tweets) {
    renderTweets([tweets[tweets.length - 1]]);
  });
};

//Used to add a custom error message and then reveal the error message area
const displayError = function(message) {
  $(".error-message").html(message);
  $(".error-message").slideDown();
};


$(document).ready(function() {
  //Hide error message area upon any submission
  $(".error-message").hide();

  $('.new-form').on('submit', function(event) {
    $(".error-message").hide();
    //Prevent normal button behaviour (including leaving the page)
    event.preventDefault();
    //Retrieve raw message for the purposes ot checking message length
    const unserialized = $(this).find("textarea").val();

    if (unserialized.length <= 0) {
      displayError("⚠️ Error! Message field must not be empty! ⚠️");
      return;
    } else if (unserialized.length > 140) {
      displayError("⚠️ Error! Message must be 140 characters or less! ⚠️");
      return;
    }

    //Serialized message is sent to the server to generate the tweet
    const message = $(this).serialize();

    $.post("/tweets", message, function() {
      //Reset the form to empty and load the new tweet upon submission
      $("#tweet-text").val("");
      loadTweet();
    });

  });
});
