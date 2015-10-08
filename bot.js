var restclient = require('node-restclient');
// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This is the URL of a search for the latest tweets on the '#mediaarts' hashtag.
var mediaArtsSearch = {q: "#mediaarts", count: 10, result_type: "recent"};

var getVerbURL = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=verb&excludePartOfSpeech=auxiliary-verb&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=93613ca1b3662558a3b5c5b094724b36a54af820397082c26";

var getNounURL =  "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=93613ca1b3662558a3b5c5b094724b36a54af820397082c26";

var getRelatedPrefix =
"http://api.wordnik.com:80/v4/word.json/"

var getRelatedSuffix = 
"/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=93613ca1b3662558a3b5c5b094724b36a54af820397082c26"
 
var statement = "";

function getGerund(done) {
	var gerund = "";
	
	
	
	return gerund;
}

function tweetNewPhrase() {
	statement = "";
	var gerund1 = "";
	restclient.get(getVerbURL, function(data) {
		initialVerb = data[0].word;
		// convert to gerund form using further API call(s)
		gerund1 = initialVerb;
		restclient.get(getVerbURL, function(data) {
			initialVerb
	});
	/*T.get('search/tweets', mediaArtsSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});*/
	
	
}

// Try to retweet something as soon as we run the program...
tweetNewPhrase();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(tweetNewPhrase, 1000 * 60 * 60);
