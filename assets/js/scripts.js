$(document).ready(function(){
  'use strict'

  var lifeTotal = 6;   //number of lives you start with
  var numberMatches = 0;//number of matches you have made
  // var firstClass = "";  //will be used to store the class of every first, third, fifth, etc. click
  // var secondClass = "";
  var firstCard = null;
  var secondCard = null;

  for (var i =0; i < lifeTotal; i++){
    $(".hearts").append("<i class='fa fa-heart'></i>")//fills the life counter with # of hearts = lifeTotal
  }

  $(".card").click(function(){

    $(this).css({
      'transform': 'rotateY(180deg)',
    });//rotates the card

    $(this).children().css({
      'transition-delay': '0.3s', //it's timed so perfectly :')
      'color': 'white'

    });

    if (firstCard === null){ //the first time a card is clicked, firstClass will be an empty string, so set it to class of the div around the the icon. Change this later to class of icon itself.
      firstCard = $(this);
      console.log(firstCard);
      // firstClass = ($(this).children().attr('class'));
      // console.log("firstClass has been set to " + firstClass )
    } else {
      secondCard = $(this);
      console.log(secondCard);

      if (firstCard.children().attr('class') === (secondCard.children().attr('class'))){
        console.log("You matched them!");//keep both flipped up. They will stay fipped up, correctly like I want!
        numberMatches ++;
        if (numberMatches === 9){
          console.log("You win!");
        }
      } else {

        setTimeout(function(cardA, cardB) {
          cardA.css({
            'transform': 'rotateY(360deg)'
          });

          cardA.children().css({
            'transition-delay': '0.3s',
            'color': 'transparent'
          });

          cardB.css({
            'transform': 'rotateY(360deg)'
          });

          cardB.children().css({
            'transition-delay': '0.3s',
            'color': 'transparent'
          });

        }, 1000, firstCard, secondCard);


        console.log("No match!");

        lifeTotal = lifeTotal - 1
        $(".hearts").empty();//removes all heart icons
          for (var i = 0; i < lifeTotal; i++){
            $(".hearts").append("<i class='fa fa-heart'></i>");//appends div class hearts w/ # of hearts = current lives
          }

        if (lifeTotal === 0){
          console.log("You lost!");
          $(".lose-screen").toggle();
        }
      }
      // firstClass= "";
      firstCard = null;
      secondCard = null;
      //empty out the card variables so on the next two clicks, you can use them again for the new two cards clicked
    }
  });

//Everything below this is for the timer
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
