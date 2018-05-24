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



$(document).ready(function () { // initializing jquery, note: used slim version that comes w/ bootstrap
    const arrayOfWords = ["KENYA", "UGANDA", "USA", "ENGLAND", "AUSTRALIA", "INDIA", "CHINA", "GERMANY", "RUSSIA", "TANZANIA", "LUXEMBOURG", "FRANCE", "JAMAICA", "COMOROS", "SCOTLAND", "IRELAND", "JORDAN", "LEBANON", "ISRAEL", "EGYPT", "NIGERIA", "BRAZIL", "MEXICO", "URUGUAY", "CAMBODIA", "AFGHANISTAN", "JAPAN", "MALAYSIA", "SINGAPORE"]
    let currentWord = ""
    const lives = 0
    let checker = []
    const playWord = []
    let chances = 7

    function newGame() { //function that loads at the beginning of a new window instance
        console.log('insidenewgame')


        $('h3').html(" ")

    }


    function start() {
        if(chances<1||currentWord.length>1){//thisprevents more current words loading at each start
            $('h3').html('Please clear your screen to start a new game');
        }
        else{
        console.log("started!")
        $('h3').html('Thank you for choosing to play, please select a letter');
        $('h1').text("")
        selectRandom();
        }

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
        var countTimes = 0

        for (let i = 0; i < currentWord.length; i++) {

            if (letter === currentWord[i]) {
                word[i] = letter
                countTimes++
            }

            $('h1').text(word)
            console.log(letter + 'p')
            var $pico = "#" + letter
            console.log($pico)
            $($pico).prop("disabled", true);
            win()

        }
        if (countTimes < 1) {
            chances-- //The number of remaining chances before you fail
            let chanceTally = "You have " + chances + " chances remaining"
            $('h6').text(chanceTally)
            let picRevealer = (100-(100*(1/chances)))+"%"
            $('.blocker').css("height", picRevealer)
            if (chances < 1) {
                end()

            }
        }
        function win() {
            let checkerWord = []
            console.log("Current Word", currentWord)
            checkerWord = checker.join("")
            console.log("Checker Word", checkerWord)
            if (checkerWord == currentWord) {
                console.log("VICTORY")
                $('h1').text(' Yayyy! You won congratulations')
               end()
            }

        }
    }

    function end() {
        //buttons deactivated
        $(".btn-dark").prop("disabled", true);
        $('h3').text(currentWord+"Was the correct answer")
        
    }
    //----------------event listeners----------------/

    // reset button
    newGame()

    $('.btn-success').on('click', start)


    // letter
    $('.btn-dark').on('click', function () {
        console.log(this.id)
        match(currentWord, checker, this.id)

        // chanceCounter()
    })
    $('.btn-danger').on('click', function () {
        location.reload(true)
    })

});

