// var notification = alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });


/*User starts out with  
arrayOfWords
empty currentWord

when user clicks on the reset button, the game makes a playWord
of underscores = to the lengthof the currentword then prompts the user to 
select a letter.

When the user selects a letter, an iterator goes through each of the 
letters in currentword and looks for a match. If there is a match
the matching letters are displayed. the letter class changes to 
hidden-class. 

*/


const arrayOfWords = ["just", "cook", "reign", "bushes", "dark", "profuse", "uttermost", "coil", "snail", "sense", "trite", "divide", "fetch", "unadvised", "protective", "bike", "snow", "lake", "stop", "sort", "imminent", "waves", "dusty", "blade", "slave", "poke" , "duck", "parsimonious", "street"]//random words found on https://www.randomlists.com/random-words

$(document).ready(function(){
        
        
        console.log(currentWord)
        var playWord =[]
    

        
        function welcome(){
            $('h3').html('Thank you for choosing to play, please select a letter');
            selectRandom();

        }
        function selectRadom({
            var selection = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)]
            var currentWord = selection.toUppercase();

        }
        function match(){
            var letter = $('btn-dark').val
            for (let i=0; i<currentWord.length;i++{
                
                if(letter===currentWord[i]){
                }
                else{
                    
                }

            }
        }



    //----------------event listener----------------/

    // reset button
    $('.btn-success').on('click',welcome())

    // letter
    $('btn-dark').on('click',match())
});


 

