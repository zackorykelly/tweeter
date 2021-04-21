/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const loadTweets = function() {
  $.get("/tweets", function(tweets) {
    renderTweets(tweets);
  });
};

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweet) {
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const avatar = tweet.user.avatars;
  const message = tweet.content.text;
  const time = timeago.format(tweet.created_at);
  const $tweet = $(`
  <article>
    <header>
      <span><img src="${avatar}"/> ${name}</span>
      <span>${handle}</span>
    </header>
    <p>${escape(message)}</p>
    <hr>
    <footer>
      <span>${time}</span>
      <span>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>
  `);
  return $tweet;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};


$(document).ready(function() {

  loadTweets();

});
