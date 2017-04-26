// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


let quotes = [
	
	{ quote: "I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
	
	 source : "Bryan Tracy",
	 year : "2000",
	 citation : "Eat That Frog"
		},
	
	{ quote: "Invest three percent of your income in yourself (self-development) in order to guarantee your future.",
	
	 source : "Bryan Tracy",
	 year : "1998",
	 citation : "Speak to Win"
		},
	
	{ quote: "Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, 'What's in it for me? ",
	
	 source : "Bryan Tracy",
	 year : "2005",
	 citation : "Get Smart"
		},
	
		{ quote: "It doesn't matter where you are coming from. All that matters is where you are going.",
	
	 source : "Bryan Tracy",
	 year : "2010",
	 citation : "Million Dollar Habits"
		},
	
	{ quote: "The key to success is to focus our conscious mind on things we desire not things we fear.",
	
	 source : "Bryan Tracy",
	 year : "2002",
	 citation : "Change Your Thinking"
		}
];

// Declaring Global Scope Variables

let totalNumOfQuotes = quotes.length;
let quoteBox = document.getElementById('quote-box');


function getRandomQuote () {
	// selects a random quote object from the quotes array
	let randomQuote = Math.floor((Math.random() * totalNumOfQuotes) +1);			
	// returns the randomly selected quote object
	return quotes[randomQuote];
}

// PrintQuote Function
function printQuote () {
	
	// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	
	let generatedRandomQuote = getRandomQuote();
	
	// printQuote constructs a string containing the different properties of the quote object using the following HTML template:
	

	let newQuoteString = '<p class="quote">' + generatedRandomQuote.quote +'</p><p class="source">'+generatedRandomQuote.source+'<span class="citation">'+ generatedRandomQuote.citation +'</span>  <span class="year"> '+generatedRandomQuote.year+'</span></p>'
  //<span class="citation"> [citation here] </span>
	
	
	
  //<span class="year"> [year here] </span>
 
	
	
	// printQuote doesn't add a for a missing citation or a if the year property is missing
	
	//accomplish that:
	quoteBox.innerHTML = newQuoteString;
	
	
}








