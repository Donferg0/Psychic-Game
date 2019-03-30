var wins = 0
var losses = 0
var guessLeft = 9

var userGuessText = document.getElementById("userGuess")
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var guessesText = document.getElementById("guesses")
var guessLeftText = document.getElementById("guessLeft")


document.onkeyup = function (event) {
    if (guessLeft >= 2) {
        var userGuess = event.key;
        var computerGuess = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        
        console.log(userGuess);
        console.log(computerGuess);

        if (userGuess === computerGuess) {
        wins++
        guessLeft = 9
        } else {
        guessLeft--
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses Left: " + guessLeft;
        guessLeftText.textContent = "Your Guesses so far: " + computerGuess;

    }
    else {
        losses++
        guessLeft = 9
    
    }
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses Left: " + guessLeft;
        guessLeftText.textContent = "Your Guesses so far: " + computerGuess ;

}