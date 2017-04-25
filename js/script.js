
let quotes = [
	
	{ quote: "I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
	
	 source : "Bryan Tracy"
		},
	
	{ quote: "Invest three percent of your income in yourself (self-development) in order to guarantee your future.",
	
	 source : "Bryan Tracy"
		},
	
	{ quote: "Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, 'What's in it for me? ",
	
	 source : "Bryan Tracy"
		}
];

// Declaring Global Scope Variables

let totalNumOfQuotes = quotes.length;
console.log(totalNumOfQuotes); 



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);



function getRandomQuote () {
	// selects a random quote object from the quotes array
	let randomQuote = Math.floor((Math.random() * totalNumOfQuotes) +1);
						
	
	// returns the randomly selected quote object
	
	let randomQuoteHolder = quotes.randomQuote;
	
	console.log(randomQuoteHolder);
	return randomQuoteHolder;
	
	
	
	
	
}


getRandomQuote();

//function printQuote () {
	
	// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	
	// printQuote constructs a string containing the different properties of the quote object using the following HTML template:
	
	/* <p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>  */
	
	
	// printQuote doesn't add a for a missing citation or a if the year property is missing
	
	//accomplish that: document.getElementById('quote-box').innerHTML
	
	
//}












