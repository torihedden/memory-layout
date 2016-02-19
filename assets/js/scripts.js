$(document).ready(function(){
  'use strict'

  var lifeTotal = 6;   //number of lives you start with
  var numberMatches = 0;//number of matches you have made
  var firstClass = "";  //will be used to store the class of every first, third, fifth, etc. click

  $(".card").click(function(){

    $(this).css({
      'transform': 'rotateY(180deg)',
    });//rotates the card

    $(this).children().css({
      'color': 'white',
    });//changes the icon white. needs a delay so the icon doesn't show up right away.

    if (firstClass === ""){
      firstClass = ($(this).children().attr('class'));
      console.log("firstClass has been set to " + firstClass )
    } else {
      if ($(this).children().hasClass(firstClass)){
        console.log("You matched them!");//keep both flipped up
        numberMatches ++
        //if (matches = numberOfTiles/2){
          //load winning screen
        //}
      } else {
        console.log("No match!");//flip both cards back over
        console.log("You lost one life!") //(hearts -= 1)
        lifeTotal = lifeTotal - 1
        console.log(lifeTotal + " lives remaining");
        if (lifeTotal === 0){
          console.log("Out of lives!");
        }
          //if (lives = 0), load losing screen
      }
      firstClass="";
    }

    //logs the class of the div around the icon. I assigned these in week one, to help me position each icon right in the middle of the card. Some FA icons are not the exact same size, so there is a unique class for each and every icon.
    //if the class of the next thing clicked === the class of $(this).children().attr('class')

  });

//Everything below this is just for the timer
  var secondsPlayed = 0;//the page loads and the seconds you have played the game = zero. Because you just started playing the game

  setInterval(function(){
    secondsPlayed += 0.1; //increases the value of secondsPlayed by one each second, AKA 0.1 seconds 10 times a second
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

});
