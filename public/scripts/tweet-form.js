const loadTweet = function(tweet) {
  $.get("/tweets", function(tweets) {
    renderTweets([tweets[tweets.length - 1]]);
  });
};

const displayError = function(message) {
  $(".error-message").html(message);
  $(".error-message").slideDown();
};

$(document).ready(function() {
  $(".error-message").hide();
  $('.new-form').on('submit', function(event) {
    $(".error-message").hide();
    event.preventDefault();
    const unserialized = $(this).find("textarea").val();
    const message = $(this).serialize();

    if (unserialized.length <= 0) {
      displayError("Tee hee!");
      return;
    } else if (unserialized.length > 140) {
      displayError("Too hoo!");
      return;
    }

    $.post("/tweets", message, function(event) {
      $("#tweet-text").val("");
      loadTweet();
    });

  });
});
