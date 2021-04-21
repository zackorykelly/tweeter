const loadTweet = function(tweet) {
  $.get("/tweets", function(tweets) {
    renderTweets([tweets[tweets.length - 1]]);
  });
};

$(document).ready(function() {
  $('.new-form').on('submit', function(event) {
    event.preventDefault();
    const unserialized = $(this).find("textarea").val();
    const message = $(this).serialize();

    if (unserialized.length <= 0) {
      alert("Your message is empty you naughty person!");
      return;
    } else if (unserialized.length > 140) {
      alert("Your message is over 140 chars you naughty person!");
      return;
    }

    $.post("/tweets", message, function(event) {
      $("#tweet-text").val("");
      loadTweet();
    });

  });
});
