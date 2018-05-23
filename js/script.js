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
    
    function newGame() {
        console.log('insidenewgame')
       
        
        $('h3').html(" ")
        
    }
      

    function start() {
        console.log("started!")
        $('h3').html('Thank you for choosing to play, please select a letter');
        selectRandom();
        const lives = 6
        // placeHolders()
        
    }
    function placeHolders(currentWord){
        
        console.log(currentWord + " line 45")
        for (let j=0; j<currentWord.length;j++){
            checker.push("_ ")
            match(currentWord,checker)
        }
        
        $('h1').text(checker)
    }

    function selectRandom() {
         currentWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
       // currentWord.push(selection.split(""))
       placeHolders(currentWord)
       
    }

    function match(currentWord,checker) {
       console.log(currentWord + "line 64")
        const text= this.id
        console.log(text)
        
        for (let i = 0; i < currentWord.length; i++) {
        console.log(currentWord+"line 70")
        console.log(text)
            if (text === currentWord[i]) {
                console.log('hit')
                checker[i]=text
            }
            else {
                
           
            }
        }

    // function isMatching() {
        
    //     checkval = $('btn-dark').val
    //     if (checkval === currentWord[i])
            
    }


    //----------------event listeners----------------/

    // reset button
   newGame()

    $('.btn-success').on('click', start)

    // letter
    $('.btn-dark').on('click', match)



});


