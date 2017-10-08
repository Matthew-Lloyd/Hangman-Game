console.log("Are you reading me??")
console.log("The link has been made")

// Startup
document.onkeyup = function(event) {
        console.log(event);
        
var StartupTextClear = document.getElementById('startup-text');
StartupTextClear.innerHTML = '';

    };

//Display Containers

var currentScriptDisp = document.querySelector("#workingScript");
var currentGuessDisp = document.querySelector("#guesses");
var scoreDisp = document.querySelector("#score");
var guessLetterDisp = document.querySelector("#guessedLetters");
var MessageDisp = document.querySelector("#Messageboard");
var Verse = document.querySelector("#Verse");
var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "0", "1", "2", "3", 
 	"4", "5", "6", "7", "8", "9", ":"];

var scriptPairs = {
        h1: ["For God so loved the world that He gave His only begotten Son, that whosoever believeth in Him should not perish, but have everlasting life", "John 3:16"],
        h2: ["As iron sharpens iron so does one man sharpen another.", "Proverbs 27:17"],
        h3: ["Keep on asking, and you will receive what you ask for. Keep on seeking, and you will find. Keep on knocking, and the door will be opened to you. For everyone who asks, receives. Everyone who seeks, finds. And to everyone who knocks, the door will be opened.", "Matthew 7:7-8"],
        h4: ["Let the words of my mouth and the meditation of my heart be acceptable in Your sight, O Lord, my Rock and my Redeemer.", "Psalms 19:14"],
        h5: ["Let all bitterness, wrath, anger, clamor, and evil speaking be put away from you, with all malice. And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you.", "Ephesians 4:31-32"]
      };

      // We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.
      var questionIndex = 0;
      // Array of questions.
      var scriptPairsArray = [scriptPairs.h1, scriptPairs.h2, scriptPairs.h3, scriptPairs.h4, scriptPairs.h5];


//Game Object Data

	var game = {
	// Function to render questions.
      renderQuestion: function() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (scriptPairsArray.length - 1)) {
          currentScriptDisp.innerHTML = scriptPairsArray[questionIndex][0];
        }
        // If there aren't, render the end game screen.
        else {
          currentScriptDisp.innerHTML = "Game Over!";
          scoreDisp.innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
      },
      updateScore: function() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      }	  
};
