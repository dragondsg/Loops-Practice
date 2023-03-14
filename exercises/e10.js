// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
	let result = [];
	let nameHasLetter = false;
	for(const holder of array) { // Is const or let better for for-of loops? They both seem to work the same way.
		for(let l = 0; l < holder.name.length; l++) {
			if(holder.name[l].toLowerCase() === letter.toLowerCase()) {
				nameHasLetter = true;
			}
		}
		if(nameHasLetter) {
			result.push(holder.name);
			nameHasLetter = false;
		}
	}
	return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
