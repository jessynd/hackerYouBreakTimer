var countdown; // global variable 

$(function(){
// //clear the clock
  $(".clearClock").on("click", function() {
    location.reload(true);
  });

// The 15 minute break
  
  $(".fifteen").on("click", function(){
      window.clearInterval(countdown);

     
      var seconds = 900;
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
      if(seconds < 10) {
        $('body').css('background','#f1c40f');
      };

      // if there are 0 seconds left, turn the background red
      // kill the timeout if we reach 0 so we don't see negative seconds
      // For this you will need to research clearInterval();
      if(seconds < 0) {
        $('body').css('background','red');
        window.clearInterval(countdown);
      };

    },1000);

    });

  $(".lunchBreak").on("click", function(){

      window.clearInterval(countdown);
      var seconds = 3600;
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
      if(seconds < 10) {
        $('body').css('background','#f1c40f');
      }

      // if there are 0 seconds left, turn the background red
      // kill the timeout if we reach 0 so we don't see negative seconds
      // For this you will need to research clearInterval();
      if(seconds < 0) {
        $('body').css('background','red');
        window.clearInterval(countdown);
      }

    },1000);

    });
    
    $(".afternoonBreak").on("click", function(){
      window.clearInterval(countdown);
      var seconds = 1800;
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
      if(seconds < 10) {
        $('body').css('background','#f1c40f');
      }

      // if there are 0 seconds left, turn the background red
      // kill the timeout if we reach 0 so we don't see negative seconds
      // For this you will need to research clearInterval();
      if(seconds < 0) {
        $('body').css('background','red');
        window.clearInterval(countdown);
      }

    },1000);

    });

    $("input").on("change", function(){
      window.clearInterval(countdown);
      var seconds = $(this).val();
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
      if(seconds < 10) {
        $('body').css('background','#f1c40f');
      }

      // if there are 0 seconds left, turn the background red
      // kill the timeout if we reach 0 so we don't see negative seconds
      // For this you will need to research clearInterval();
      if(seconds < 0) {
        $('body').css('background','red');
        window.clearInterval(countdown);
      }

    },1000);

    });

  
 });

  






    // $("input").on("change", function(){
    //   $(this).
    //   var seconds = $("input").val();
    //   var countdown = window.setInterval(function() {

