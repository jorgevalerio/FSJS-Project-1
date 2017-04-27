document.getElementById('loadQuote').addEventListener("click", printQuote, false);
let quotes = [
	
	{ quote: "I have found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
	
	 source : "Bryan Tracy",
	 year : "",
	 citation : "Eat That Frog",
	 tags: "Self-Esteem"
		},
	
	{ quote: "Invest three percent of your income in yourself (self-development) in order to guarantee your future.",
	
	 source : "Bryan Tracy",
	 year : "1998",
	 citation : "",
	 tags: "Business"
		},
	
	{ quote: "Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, What is in it for me? ",
	
	 source : "Bryan Tracy",
	 year : "",
	 citation : "",
	 tags: "Discipline"
		},
	
		{ quote: "It doesn't matter where you are coming from. All that matters is where you are going.",
	
	 source : "Bryan Tracy",
	 year : "2010",
	 citation : "Million Dollar Habits",
		 tags: "Self-Discipline"
		},
	
	{ quote: "The key to success is to focus our conscious mind on things we desire not things we fear.",
	
	 source : "Bryan Tracy",
	 year : "",
	 citation : "Change Your Thinking",
	 tags: "Money"
		}
];
//Array Holds  a palette of Pastel Colors
let backgroundPalette = [
							'#898cff',
							'#ff89b5',
							'#90d4f7',
							'#71e096',
							'#f5a26f',
							'#668de5',
							'#ed6d79'
					
					];

function randomColor () {
	let $color = Math.floor(Math.random() * backgroundPalette.length);			
	return backgroundPalette[$color];
}



// Declaring Global Scope Variables

let totalNumOfQuotes = quotes.length;
let quoteBox = document.getElementById('quote-box');
let quoteTimer = window.setInterval(printQuote, 10000);

function getRandomQuote () {
	// selects a random quote object from the quotes array
	let randomQuote = Math.floor(Math.random() * totalNumOfQuotes);			
	// returns the randomly selected quote object
	return quotes[randomQuote];
}

// Function to reset quoteTimer to 0 everytime to click on the Button

function resetTimer() {
	clearInterval(quoteTimer);
	quoteTimer = window.setInterval(printQuote, 10000);
}

// PrintQuote Function
function printQuote () {
	
	// printQuote calls the getRandomQuote function and stores the returned quote object in a variable

  let generatedRandomQuote = getRandomQuote();
  let $quote = generatedRandomQuote.quote;
  let $source = generatedRandomQuote.source;
  let $citation = generatedRandomQuote.citation;
  let $year =  generatedRandomQuote.year;
  let $tags =  generatedRandomQuote.tags;
  let $newQuote = '<p class="quote">' + $quote + '</p><p class="source">' + $source + '</span>';
  let $newBackgroundColor = randomColor();
	
  document.body.style.backgroundColor = $newBackgroundColor;
  document.getElementById('loadQuote').style.backgroundColor = $newBackgroundColor;
  
  // printQuote constructs a string containing the different properties of the quote object using the following HTML template:
	//accomplish that:
  
  if ($citation.length === 0 && $year.length === 0) {
			    $newQuote += '.</p><p class="tags"> tags: ' + $tags + ' </p>';
	            quoteBox.innerHTML = $newQuote;
	  			resetTimer();

			
		  } else if ($citation.length === 0) {
				$newQuote +=  '<span class="year"> '+$year+'.</span></p><p class="tags"> tags: ' + $tags + ' </p>';
			    quoteBox.innerHTML = $newQuote;
			  	resetTimer();
			 
		  } else if ($year.length === 0) {
				 $newQuote +=  '<span class="citation"> '+$citation+'.</span></p><p class="tags"> tags: ' + $tags + ' </p>';
                 quoteBox.innerHTML = $newQuote;
			  	resetTimer();
			  
		  } else {
			    $newQuote +=  '<span class="citation">'+ $citation +'</span>  <span class="year"> '+$year+'.</span></p><p class="tags"> tags: ' + $tags + ' </p>';
                quoteBox.innerHTML = $newQuote;
			  	resetTimer();
			 
		  }

	}