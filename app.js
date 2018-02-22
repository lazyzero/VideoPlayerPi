var five = require("johnny-five");
var raspi = require("raspi-io");
var board = new five.Board({
	io : new raspi(),
});
var omx = require('node-omxplayer');
var player = new omx();

var timer = setTimeout(() => {}, 1);
var button;

board.on("ready", function() {
	console.log("high five");
	
	button = new five.Button({
		pin: 'P1-7',
		isPullup: true
	});
	
	playMovie();
	
	button.on("down", function(val) {
		playMovie();
	});
	
	button.on("up", function() {
		//console.log('button up');
	});
	
	function playMovie() {
		if (!player.running) {
			player = omx('../Videos/atom.mp4');
			player.on('close', function() {
				console.log('replay in x sec');
				clearTimeout(timer);
				timer = setTimeout(playMovie, 5*60*1000);
			});
		} else {
			console.log('player is running');
		}
}

});

