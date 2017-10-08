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
var verse = document.querySelector("#Verse");
// We start the game with a score of 0.
var score = 0;
// Variable to hold the index of current question.
var verseIndex = 0;
// Array of questions.


var scriptPairs = {
        v1: ["For God so loved the world that He gave His only begotten Son, that whosoever believeth in Him should not perish, but have everlasting life.", "John 3:16"],
        v2: ["As iron sharpens iron so does one man sharpen another.", "Proverbs 27:17"],
        v3: ["Keep on asking, and you will receive what you ask for. Keep on seeking, and you will find. Keep on knocking, and the door will be opened to you. For everyone who asks, receives. Everyone who seeks, finds. And to everyone who knocks, the door will be opened.", "Matthew 7:7-8"],
        v4: ["Let the words of my mouth and the meditation of my heart be acceptable in Your sight, O Lord, my Rock and my Redeemer.", "Psalms 19:14"],
        v5: ["Let all bitterness, wrath, anger, clamor, and evil speaking be put away from you, with all malice. And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you.", "Ephesians 4:31-32"]
      };
var scriptPairsArray = [scriptPairs.v1, scriptPairs.v2, scriptPairs.v3,
						scriptPairs.v4, scriptPairs.v5];


//Game Object Data

	var game = {
		currentScript: "",
		displayWord: [],
		availableLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "0", "1", "2", "3", 
 	"4", "5", "6", "7", "8", "9", ":"],




	// Function to render guess to page.
      renderVerse: function() {

      	this.currentScript = scriptPairs.v1[1];
        console.log(this.currentScript);
        
        for(var i=0; i<this.currentScript.length; i++){
	        if(this.currentScript.charAt(i).match(/[a-z]/i)){
	          this.displayWord.push("_");
	        }
	        else if(this.currentScript.charAt(i).match(/[0-9]/i)){
	          this.displayWord.push("_");
	        } else {
	          this.displayWord.push(" ");
	        }
	    }
	    currentScriptDisp.innerHTML = this.displayWord;
	    console.log(this.displayWord);

        // If there are still more guesses, render the next one.
        if (verseIndex <= (scriptPairsArray.length - 1)) {
          verse.innerHTML = scriptPairsArray[verseIndex][0];
        }
        // If there aren't, render the end game screen.
        else {
          currentScriptDisp.innerHTML = "Game Over!";
          scoreDisp.innerHTML = "Final Score: " + score + " out of " + scriptPairsArray.length;
        }
      },
      updateScore: function() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      }	  
		
	};
game.renderVerse()