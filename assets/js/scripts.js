$(document).ready(function(){
  'use strict'

  var lifeTotal = 6;   //number of lives you start with
  var numberMatches = 0;//number of matches you have made
  var firstClass = "";  //will be used to store the class of every first, third, fifth, etc. click
  // var secondClass = "";
  var firstCard
  var secondCard

  for (var i =0; i < lifeTotal; i++){
    $(".hearts").append("<i class='fa fa-heart'></i>")//fills the life counter with # of hearts = lifeTotal
  }

  $(".card").click(function(){
    //$("#to-do-list").on('change', 'input', function(){//
    //$(document).on('click', '.card', function()//

    $(this).css({
      'transform': 'rotateY(180deg)',
    });//rotates the card

    $(this).children().css({
      'color': 'white',
    });//changes the icon white. needs a delay so the icon doesn't show up right away.

    // console.log($(this).find("i").attr('class'));//this logs to the console the class of the icon, instead of the class of the div I assigned it

    if (firstCard === null){ //the first time a card is clicked, firstClass will be an empty string, so set it to class of the div around the the icon. Change this later to class of icon itself.
      firstCard = $(this);
      console.log(firstCard);
      // firstClass = ($(this).children().attr('class'));
      // console.log("firstClass has been set to " + firstClass )
    } else {
      secondCard = $(this);
      console.log(secondCard);
      if firstCard.children().attr('class') === secondCard.children().attr('class'){
      // if ($(this).children().hasClass(firstClass)){
        console.log("You matched them!");//keep both flipped up. They will stay fipped up, correctly like I want!!
        numberMatches ++
        //if (matches = numberOfTiles/2){
          //load winning screen
        //}
      } else {
        // firstCard.css({
        //   'transform': 'rotateY(-180deg)'
        // });
        //
        // secondCard.css({
        //   'transform': 'rotateY(-180deg)'
        // });

        console.log("No match!");

        lifeTotal = lifeTotal - 1
        $(".hearts").empty();//removes all heart icons
          for (var i = 0; i < lifeTotal; i++){
            $(".hearts").append("<i class='fa fa-heart'></i>");//appends div class hearts w/ # of hearts = current lives
          }

        if (lifeTotal === 0){
          console.log("You lost!");
          //if (lives = 0), load losing screen
        }
          //if (lives = 0), load losing screen
      }
      // firstClass= "";
      firstCard = null;
      secondCard = null;
      //empty out the card variables so on the next two clicks, you can use them again for the new two cards clicked
    }

    //logs the class of the div around the icon. I assigned these in week one, to help me position each icon right in the middle of the card. Some FA icons are not the exact same size, so there is a unique class for each and every icon.

  });

//Everything below this is just for the timer
  var secondsPlayed = 0;//the page loads and the seconds you have played the game = zero. Because you just started playing the game

  setInterval(function(){
    secondsPlayed += 0.1; //increases the value of secondsPlayed by one each second, AKA 0.1 seconds 10 times a second
    //this helps minimize errors propagating through the course of the game, causing seconds to jump in the timer
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
