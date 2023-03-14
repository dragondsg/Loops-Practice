// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
	let result = array[0];
	for(const holder of array) {
		if(result.balance === 0 || holder.balance !== 0 && holder.balance < result.balance) {
			result = holder;
		}
	}
	return [result]; // Apperently it want this inside an array. I don't know why you'd make an array that only ever holds 1 object.
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
