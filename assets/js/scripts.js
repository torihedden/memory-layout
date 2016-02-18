$(document).ready(function(){

  $(".card").click(function(){

    var cardChoices = [];

    // console.log($(this).attr('class'));
    var firstCard = ($(this).children().attr('class'));//logs the class of the div around the icon. I assigned these in week one, to help me position each icon right in the middle of the card. Some FA icons are not the exact same size, so there is a unique class for each and every icon.
    console.log(firstCard);
    cardChoices.push(firstCard);
    console.log(cardChoices);


  });

});
