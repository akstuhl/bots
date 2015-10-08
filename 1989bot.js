var restclient = require('node-restclient');
// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

var tracks = require("./1989tracks.json").results.collection1;
var indieRock = require("./indieRock.json").results.collection1;
var singerSongwriter = require("./singerSongwriter.json").results.collection1;

var prefixes = ["omg! ", "", "", "", "wow... ", "Breaking: "];
var coverStrings = [" to cover ", " covers ", " plans to cover "];
var styleStrings = [" in the style of ", " in the style of ", " in the style of ", " with a nod to ", " as "];
var ironylvlString = ". Irony level: ";

var ironylvlFreq = 8;
 
Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

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
