/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
  console.log(tweet);
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const message = tweet.content.text;
  const time = timeago.format(tweet.created_at);
  const $tweet = $(`
  <article>
    <header>
      <span><i class="fas fa-user"></i> ${name}</span>
      <span>${handle}</span>
    </header>
    <p>${message}</p>
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
    $('#tweets-container').append($tweet);
  }
};


$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1473245023718
    }
  ];

  renderTweets(data);
});
