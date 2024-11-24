var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“A friend is someone who knows all about  still loves you.”",
  "“Always forgive your enemies; nothing annoys them so much.”",
  "“We accept the love we think we deserve.”",
  "“Without music, life would be a mistake.”",
  "“Only a life lived for others is a life worthwhile.”",
];

function getQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomQuote];
}
