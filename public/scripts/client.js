/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Loads all tweets from the database and passes the array for rendering
const loadTweets = function() {
  $.get("/tweets", function(tweets) {
    renderTweets(tweets);
  });
};

//Escape function that tweets are put through to prevent script injection attacks
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Takes in a single tweet element and pulls all the relevant data to create an html object to render
const createTweetElement = function(tweet) {
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const avatar = tweet.user.avatars;
  const message = tweet.content.text;
  //timeago converts numeral date format into 'x days ago' etc.
  const time = timeago.format(tweet.created_at);

  //String literal tweet format
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

//Used both on the initial load of all tweets and to render new tweets as they are created
const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    //Prepend allows for reverse chronological order (vs append)
    $('#tweets-container').prepend($tweet);
  }
};


$(document).ready(function() {
  //Initial retrieval of tweets on page load.
  loadTweets();

});
