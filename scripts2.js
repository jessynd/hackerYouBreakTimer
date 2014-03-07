var countdown;
var seconds;

$(function(){

	  $(".clearClock").on("click", function() {
	    location.reload(true);
	  }); //end clear clock

	  //adding seconds function
	  var setSeconds = function(seconds){
	  
		  window.clearInterval(countdown);
	      countdown = window.setInterval(function() {
	      // these are purely for displaying the mins
	     
		      var visualMins = Math.floor(seconds / 60);
		      var visualSeconds = seconds % 60;

		      // pre-pend a zero incase we have less than 10 seconds left
		      if(visualSeconds < 10) {
		        visualSeconds = "0" + visualSeconds;
		      }

		      $('.seconds').text(visualMins + ":" + visualSeconds);
		      
		      // Update the browsers tab to reflect the current time  + "Seconds Left!"
		      $('title').text(seconds + " Seconds Left!");
		      
		      // Decrement the number of seconds left
		      seconds = seconds -1; // or seconds--;

		      // if there are 10 or less seconds left, turn the background yellow. Use the css() method
		      if (seconds > 10) {
		      	$('body').css('background','#3498db');
		      }
		      if(seconds < 10) {
		        $('body').css('background','#f1c40f');
		      };

		      if (seconds < 0) {
		        $('body').css('background','red');
		        window.clearInterval(countdown);
	      		};

	    	},1000);
	}; //close setSeconds function

	$(".fifteen").on("click", function(e){
		e.preventDefault();
		setSeconds(900);
	});
	$(".lunchBreak").on("click", function(e){
		e.preventDefault();
		setSeconds(3600);
	});
	$(".afternoonBreak").on("click", function(e){
		e.preventDefault();
		setSeconds(1800);
	});
		
	$("input").on("change", function(){
		var inputSeconds = $(this).val();
		var inputMinutes = inputSeconds*60
		setSeconds(inputMinutes);
	});

	$(".mirrorClock").on("click", function(){
		$("html").toggleClass("flipscreen");
		

	});

	

}); //end doc ready