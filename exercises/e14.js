
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
	let result = [];
	for (let holder of array) {
		let totalBalance = 0;
		if (holder.deposits !== undefined) {
			for (let depot of holder.deposits) {
				totalBalance += depot;
			}
		}
		if (holder.withdrawals !== undefined) {
			for (let withdraw of holder.withdrawals) {
				totalBalance -= withdraw;
			}
		}
		if (totalBalance !== holder.balance) {
			result.push(holder);
		}
	}
	return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
