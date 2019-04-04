console.log("le début");
var Twit = require("twit")
var T = new Twit({
  consumer_key:         'entrer consumer_key',
  consumer_secret:      'entrer consumer_secret',
  access_token:         'entrer access_token',
  access_token_secret:  'entrer access_token_secret',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//tweetIt();
var timer = 3; //seconde
var phrases = new Array(
  
 //insérer phrases entre guillement, chaque phrase sera séparé d'une virgule
);

var i = 1 ;

var myInterval = setInterval(tweetIt, 1000*timer);

function tweetIt(txt){
  console.log(phrases[i-1]);
  var msg=phrases[i-1];
  var tweet = {status:msg};
  var tweeted = function(err, data, response) {
    if (err){
      console.log("le tweet n'a pas été envoyé");
    } else {
      console.log("tweet envoyé");
    }
  }

  T.post("statuses/update", tweet, tweeted);

  if(i>=phrases.length){
    clearInterval(myInterval);
  }
  i=i+1 ; //i++ ;
}
