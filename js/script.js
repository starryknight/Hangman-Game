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



$(document).ready(function () {
    const arrayOfWords = ["KENYA", "UGANDA", "USA", "ENGLAND", "AUSTRALIA", "INDIA", "CHINA", "GERMANY", "RUSSIA", "TANZANIA", "LUXEMBOURG", "FRANCE", "JAMAICA", "COMOROS", "SCOTLAND", "IRELAND", "JORDAN", "LEBANON", "ISRAEL", "EGYPT", "NIGERIA", "waves", "dusty", "blade", "slave", "poke", "duck", "parsimonious", "street"]//random words found on https://www.randomlists.com/random-words

    

    function newGame() {
        console.log('insidenewgame')
        const playWord = []
        const currentWord = []
        $('h3').html(" ")
        
    }
      

    function start() {
        console.log("started!")
        $('h3').html('Thank you for choosing to play, please select a letter');
        // selectRandom();
        const lives = 5
        console.log(lives)
    }

    function selectRandom() {
        const selection = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
        currentWord.push(selection.split(""))
        $('h4').html()
        console.log(currentWord)
    }

    // function match() {

    //     currentWord.map
    //     const letter = $('btn-dark').val
    //     for (let i = 0; i < currentWord.length; i++) {

    //         if (letter === currentWord[i]) {
    //             $('h2').html('letter+" "')
    //         }
    //         else {
    //             $('h2').html('_')
    //         }
    //     }

    function isMatching() {
        checkval = $('btn-dark').val
        if (checkval === currentWord[i])
            console.log('mess')
    }


    //----------------event listener----------------/

    // reset button
   newGame()
    $('.btn-success').on('click', start)

    // letter
    // $('.btn-dark').on('click', isMatching())
});




