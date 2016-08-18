// Back end
var numerals;
var romanNumerals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanCharacters = ["I","IV", "V",'IX', "X",'XL',"L", "XC", "C","CD" ,"D","CM", "M"];
function limitTest(number) {
  if(number > 3,999) {
    return false;
  }
}

function romanEasy(number){
  numerals = [];
  characters =[];
  var counter = number;
  for (var i = 12; i >= 0; i--) {
    if((counter - romanNumerals[i]) >= 0) {
      var measure = Math.floor(counter / romanNumerals[i]);
      numerals.unshift(measure)
      characters.unshift(romanCharacters[i].repeat(numerals[i]))
      counter = counter - (measure * romanNumerals[i]);
    } else {
      numerals.unshift(0);
    }
  }
  return numerals;
}
//
// function characters(array){
//   var results=[];
//   for(var i = 6; i >= 0; i--){
//     results.unshift(romanCharacters[i].repeat(numerals[i]));
//   }
//   results = results.reverse().join('');
//   return results;
// }

function translate(number) {
  var results;
  if (limitTest) {
    results = romanEasy(number);
    return results;

  } else {
    return false;
  }
}


// front end
$(document).ready(function() {

  $('form').submit(function(event) {

  var userReturn;
  var userInput = parseInt($('#inputNumber').val());
  if (userInput) {
    userReturn = translate(userInput);
    $(".results").text(userReturn);
  } else {
    alert('Please enter a number');
  }
  event.preventDefault();
  });

});
