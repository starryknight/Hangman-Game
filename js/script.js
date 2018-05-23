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
    const arrayOfWords = ["KENYA", "UGANDA", "USA", "ENGLAND", "AUSTRALIA", "INDIA", "CHINA", "GERMANY", "RUSSIA", "TANZANIA", "LUXEMBOURG", "FRANCE", "JAMAICA", "COMOROS", "SCOTLAND", "IRELAND", "JORDAN", "LEBANON", "ISRAEL", "EGYPT", "NIGERIA", "BRAZIL", "MEXICO", "URUGUAY", "CAMBODIA", "AFGHANISTAN", "JAPAN", "MALAYSIA", "SINGAPORE"]
    let currentWord =""
    const lives=0
    let checker=[]
    const playWord = []
    const chances=[]
    
    function newGame() {
        console.log('insidenewgame')
       
        
        $('h3').html(" ")
        
    }
      

    function start() {
        console.log("started!")
        $('h3').html('Thank you for choosing to play, please select a letter');
        selectRandom();
        console.log('you have 6 lives remaining')
        // placeHolders()
        
        
    }
    function placeHolders(currentWord){
        
        console.log(currentWord + " line 45")
        for (let j=0; j<currentWord.length;j++){
            checker.push("- ")
            
        }
        console.log(checker)
        match(currentWord, checker, this.id)
        $('h1').text(checker)
    }

    function selectRandom() {
         currentWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
       // currentWord.push(selection.split(""))
       placeHolders(currentWord)
       
    }

    function match(currentWord, word, letter) {
        
        console.log("letter", letter)
        // make a function for this loop to happen, call it like functionName (letter)
        for (let i = 0; i < currentWord.length; i++) {
            
            if (letter === currentWord[i]) {
                word = word[i].replace(/word[i]/gi,letter)
            }
            else {
                word[i]="_"
            }
           
        }
    
        $('h1').text(word)

        console.log(word)
       
    // function isMatching() {
        
    //     checkval = $('btn-dark').val
    //     if (checkval === currentWord[i])
            
    }
    function chanceCounter(){
        //if chances < 6
        //
            if (chances.length>=6){
                
                $('h3').text('game over, thank you for participating, please try again')
            }
            
        }
//you have 6 chances, every time you take a chance, your remaining
//chances reduce. with every iteration
//when there are no chances remaining run end
function end() {
    //buttons deactivated
    $( ".btn-dark" ).prop( "disabled", true );
}
    //----------------event listeners----------------/

    // reset button
   newGame()

    $('.btn-success').on('click', start)

    // letter
    $('.btn-dark').on('click', function() {
        console.log(this.id)
        match(currentWord, checker, this.id)
        chances.push('x')
        chanceCounter()
    })

});

// Create an array of all letters
// loop through array and for each element of the array
    // $('pageIdOrClassWhatever').append('<button id=element ></button>')
    // add an on('click') to this button while still in the element of the loop, pass that function the currentWord, displayWord, and element, because element will equal what you wanted ID to equal and for some reason this.Id just isn't working for you

// Create an array of words
// When the window loads, randomly select a word from the array and make it current word as a string
// Break down the string into an array
// In a for loop, (using currentword.length) create a second array displayWord that starts out as an underscore for each letter of currentword
// Player needs to be able to:
    // Reset (pick a new word from the list to be currentword)
    // Guess a letter (clicking a letter button checks to see if it matches any letter in the currentWord)
        // If a letter matches, 
            // Replace displayWord[i] with currentWord[i]
            // Replace the $('displayWord').text with the new value of displayWord.toString()
        // Else if letter does not match
            // Add a part to hangman ICEBOX
            // Remove letter from list of letters STRETCH GOAL/ICEBOX
            // OR just tell user somehow that was incorrect maybe simplest option
