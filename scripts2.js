// Set a default namespace
var timerApp = {};

// set the default seconds
timerApp.seconds = 0; 

// setSeconds Function
// this starts the timer when you pass it any number of seconds
timerApp.setSeconds = function(seconds){

  // clear any existing countdown timers
  window.clearInterval(timerApp.countdown);

  timerApp.countdown = window.setInterval(function() {
    
    // these are purely for displaying the mins and seconds left
    var visualMins = Math.floor(seconds / 60);
    var visualSeconds = seconds % 60;

    // pre-pend a zero incase we have less than 10 seconds left
    // turns '6' seconds to '06'
    if(visualSeconds < 10) {
      visualSeconds = "0" + visualSeconds;
    }

    // Update the time left element
    $('.seconds').text(visualMins + ":" + visualSeconds);
    
    // Update the browsers tab to reflect how much time is left
    $('title').text(visualMins + ":" + visualSeconds);
    
    // Decrement the number of seconds left
    seconds--;// or seconds = seconds -1;

    // if there are 10 or less seconds left, turn the background yellow. Use the css() method
    if (seconds > 10) {
      $('body').css('background','#3498db');
    }

    if(seconds < 10) {
      $('body').css('background','#f1c40f');
    };

    if (seconds < 0) {
      $('body').css('background','red');
      window.clearInterval(timerApp.countdown);
    };

  },1000); // 1000 means run this every 1000 milliseconds or 1 second

}; //close setSeconds function

timerApp.playMusic = function() {
  // plays the final countdown
  var finalCountdownHtml = '<iframe width="420" height="315" src="https://www.youtube.com/embed/EG7wB3G-xp0?autoplay=1#t=3m52s" frameborder="0" allowfullscreen></iframe>';
  $('body').append(finalCountdownHtml);
}


// Document ready
$(function(){

  $(".clearClock").on("click", function() {
    location.reload(true);
  }); //end clear clock

	$(".fifteen").on("click", function(e){
		e.preventDefault();
		timerApp.setSeconds(900);
	});

	$(".lunchBreak").on("click", function(e){
		e.preventDefault();
		timerApp.setSeconds(3600);
	});

	$(".afternoonBreak").on("click", function(e){
		e.preventDefault();
		timerApp.setSeconds(1800);
	});
		
	$("input").on("change", function(){
		var inputSeconds = $(this).val();
		var inputMinutes = inputSeconds*60
		timerApp.setSeconds(inputMinutes);
	});

	$(".mirrorClock").on("click", function(){
		$(".countdown").toggleClass("flipscreen");
	});

}); //end doc ready