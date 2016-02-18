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

  var gameTimer = 0;

  setInterval(function(){gameTimer+=1}, 1000);//this increases the value of gameTimer by one each iteration
  setInterval(function(){$(".timer").html(gameTimer); }, 1000);//this replaces the text in the .timer div with the current value of gameTimer

});
