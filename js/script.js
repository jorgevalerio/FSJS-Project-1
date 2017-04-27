document.getElementById('loadQuote').addEventListener("click", printQuote, false);


let quotes = [
	
	{ quote: "I have found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
	
	 source : "Bryan Tracy",
	 year : "",
	 citation : "Eat That Frog"
		},
	
	{ quote: "Invest three percent of your income in yourself (self-development) in order to guarantee your future.",
	
	 source : "Bryan Tracy",
	 year : "1998",
	 citation : ""
		},
	
	{ quote: "Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, What is in it for me? ",
	
	 source : "Bryan Tracy",
	 year : "",
	 citation : ""
		},
	
		{ quote: "It doesn't matter where you are coming from. All that matters is where you are going.",
	
	 source : "Bryan Tracy",
	 year : "2010",
	 citation : "Million Dollar Habits"
		},
	
	{ quote: "The key to success is to focus our conscious mind on things we desire not things we fear.",
	
	 source : "Bryan Tracy",
	 year : "",
	 citation : "Change Your Thinking"
		}
];

// Declaring Global Scope Variables

let totalNumOfQuotes = quotes.length;
let quoteBox = document.getElementById('quote-box');


function getRandomQuote () {
	// selects a random quote object from the quotes array
	let randomQuote = Math.floor(Math.random() * totalNumOfQuotes);			
	// returns the randomly selected quote object
	return quotes[randomQuote];
}

// PrintQuote Function
function printQuote () {
	
	// printQuote calls the getRandomQuote function and stores the returned quote object in a variable

  let generatedRandomQuote = getRandomQuote();
  let $quote = generatedRandomQuote.quote;
  let $source = generatedRandomQuote.source;
  let $citation = generatedRandomQuote.citation;
  let $year =  generatedRandomQuote.year;
  let $newQuote = '<p class="quote">' + $quote + '</p><p class="source">' + $source + '</span>';
  
  // printQuote constructs a string containing the different properties of the quote object using the following HTML template:
	//accomplish that:
  
  if ($citation.length === 0 && $year.length === 0) {
			    $newQuote += '.</p>';
	            quoteBox.innerHTML = $newQuote;

			
		  } else if ($citation.length === 0) {
				$newQuote +=  '<span class="year"> '+$year+'.</span></p>';
			    quoteBox.innerHTML = $newQuote;
			 
		  } else if ($year.length === 0) {
				 $newQuote +=  '<span class="citation"> '+$citation+'.</span></p>';
                 quoteBox.innerHTML = $newQuote;
			  
		  } else {
			    $newQuote +=  '<span class="citation">'+ $citation +'</span>  <span class="year"> '+$year+'.</span></p>';
                quoteBox.innerHTML = $newQuote;
			 
		  }

	}