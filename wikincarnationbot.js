var restclient = require('node-restclient');
// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

var deathsByDay = require("./deathsByDay.json").results.collection1;
var birthsByDay = require("./birthsByDay.json").results.collection1;

var startReplyPrefixes = ["In your last life you were ", "You are a reincarnation of ", "Your previous incarnation was "];
var continuePrefixes = ["... who was a reincarnation of "];
var replyFailureMessages = ["Sorry, you evidently weren't notable enough in your previous life.", "Hm, we couldn't trace your prior incarnation. Maybe you're new here!"];

function findIncarnation(birthDate) {
	var year = // get year from birthDate;
	var day = // get day from birthDate;
	var deaths = deathsByDay.day;
	var yearMatches = [];
	forEach(deaths, function(d) {
		if (d.Year = year) yearMatches.push(d);
	});
	if (yearMatches.length < 1) return null;
	return yearMatches.pick().person;
}

function respondToMention(tweet) {
	// to add: don't reply if the user has already been matched at all or attempted since last wiki data update; ask for conf if tweet is a reply?
	
	var tweetBody = // get tweet content
	
	var birthDate = // attempt to parse birthdate
}
 
var statement = "";

function tweetNewPhrase() {
	var track = tracks.pick().property1.text;
	var singer = singerSongwriter.pick().musician.text;	
	var style = indieRock.pick().artist.text;
	var prefix = prefixes.pick();
	var trans1 = coverStrings.pick();
	var trans2 = styleStrings.pick();
	var affix = "";
	
	ironylvlRoll = Math.floor(Math.random()*ironylvlFreq);
	if (ironylvlRoll < 1) affix = ironylvlString + (Math.floor(Math.random()*10));
	
	var parenPos = singer.indexOf(" (");
	if (parenPos > 0) singer = singer.substr(0, parenPos);
	
	statement = prefix + singer + trans1 + track + trans2 + style + affix;
	console.log('THE TWEET:', statement);
	T.post('statuses/update', { status: statement }, function(err, reply) {
	  if (err) {
		console.log('error:', err);
		// close connection and program
		//client.end();
	  }
	});
}

// Try to retweet something as soon as we run the program...
tweetNewPhrase();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(tweetNewPhrase, 1000 * 60 * 60);
