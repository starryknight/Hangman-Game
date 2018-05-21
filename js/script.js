// var notification = alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });

console.log('new')
var arrayOfWords = ["war", "cook", "reign", "bushes", "dark", "profuse", "uttermost", "coil", "snail", "sense", "trite", "divide", "fetch", "unadvised", "protective", "bike", "snow", "lake", "stop", "sort", "imminent", "waves", "dusty", "blade", "slave", "poke" , "duck", "parsimonious", "street"]//random words found on https://www.randomlists.com/random-words

$(document).ready(function(){

    var newWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)]
    console.log(newWord) 
 });