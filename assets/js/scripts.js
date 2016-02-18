$(document).ready(function(){
  'use strict'

  $(".card").click(function(){

    $(this).css({
      'transform': 'rotateY(180deg)',
    });//rotates the card

    $(this).children().css({
      'color': 'white',
    });//changes the icon white. needs a delay so the icon doesn't show up right away.


    var firstCard = ($(this).children().attr('class'));//logs the class of the div around the icon. I assigned these in week one, to help me position each icon right in the middle of the card. Some FA icons are not the exact same size, so there is a unique class for each and every icon.
    console.log(firstCard);


    //if the class of the next thing clicked === the class of $(this).children().attr('class')

  });

});
