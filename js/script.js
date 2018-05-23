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
    let currentWord = ""
    const lives = 0
    let checker = []
    const playWord = []
    let chances = 6

    function newGame() {
        console.log('insidenewgame')


        $('h3').html(" ")

    }


    function start() {
        console.log("started!")
        $('h3').html('Thank you for choosing to play, please select a letter');
        selectRandom();
        console.log('you have 6 lives remaining')
    }

    function placeHolders(currentWord) {

        console.log(currentWord + " line 45")
        for (let j = 0; j < currentWord.length; j++) {
            checker.push("- ")
        }

        console.log(checker)
        match(currentWord, checker, this.id)
        $('h1').text(checker)
    }

    function win() {
        if (checker == currentWord) {
            console.log(currentWord)
            console.log(checker)
            
        }
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
                word[i] = letter
                //add to
            }

            else {
                chances++
                console.log('chances')
            }
            console.log("chances"+chances)
        }
       
        $('h1').text(word)
        console.log(letter +'p')
        var $pico = "#" + letter
        console.log($pico)
        $($pico).prop("disabled", true);
        win()
    }

    function win() {
        let checkerWord = []
        console.log("Current Word", currentWord)
        checkerWord = checker.join("")
        console.log("Checker Word", checkerWord)
        if (checkerWord == currentWord) {
            console.log("VICTORY")
            $('h1').text(currentWord + ' Yayyy! You won congratulations')
            $(".btn-dark").prop("disabled", true);
        }
    }

    function chanceCounter() {
        //if chances < 6
        //

        if (chances >= 6) {

            $('h3').text('game over, thank you for participating, please try again')
        }

    }
    //you have 6 chances, every time you take a chance, your remaining
    //chances reduce. with every iteration
    //when there are no chances remaining run end
    function end() {
        //buttons deactivated
        $(".btn-dark").prop("disabled", true);
    }
    //----------------event listeners----------------/

    // reset button
    newGame()

    $('.btn-success').on('click', start)
    
    
    // letter
    $('.btn-dark').on('click', function () {
        console.log(this.id)
        match(currentWord, checker, this.id)

        chanceCounter()
    })
      // $('.btn-success').on('click', function () {
    //     location.reload(true)
    // })

});

