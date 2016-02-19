$(document).ready(function(){
  'use strict'

  $(".card").click(function(){

    $(this).css({
      'transform': 'rotateY(180deg)',
    });//rotates the card

    $(this).children().css({
      'color': 'white',
    });//changes the icon white. needs a delay so the icon doesn't show up right away.


    var firstCard = ($(this).children().attr('class'));
    //logs the class of the div around the icon. I assigned these in week one, to help me position each icon right in the middle of the card. Some FA icons are not the exact same size, so there is a unique class for each and every icon.
    console.log(firstCard);
    console.log($(this).children().hasClass('diamond'));
    //will return true for the diamond cards, and false for all else

    //if the class of the next thing clicked === the class of $(this).children().attr('class')

  });

  var secondsPlayed = 0;

  setInterval(function(){
    secondsPlayed += 0.1; //this increases the value of secondsPlayed by one each second
    $(".timer").html(getFormattedTime(secondsPlayed));
  }, 100);

  var getFormattedTime = function(seconds){
    var minutes = Math.floor(seconds/60);
    seconds = Math.floor(seconds % 60);
    if (minutes < 10){
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    var timeFormatted = minutes + ":" + seconds;
    return timeFormatted;
  }


  // if (gameStart < 10){
  //   setInterval(function(){$(".timer").html("00:0"+gameStart); }, 1000);//this replaces the text in the .timer div with the current value of gameTimer
  // //pad with leading zero?
  // } else {
  //   setInterval(function(){$(".timer").html("00:"+gameStart); }, 1000);
  // }
  // this worked up until a point... then I got jumps from 242 to 244, 246, 248. Second jumping.
  // is setInterval imprecise over a longer period of time?
  // I just checked again around 550 seconds... seems to be incrementing fine...


  // console.log(new Date().getSeconds());
  //will return the seconds according to what actual time it is. no need to round.

});
