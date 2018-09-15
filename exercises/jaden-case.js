'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str){
   	return str.toLowerCase()
	.split(' ').map((str) => str.charAt(0).toUpperCase() + str.substring(1))
	.join(' ');
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you'), 'How Are You')
// End of tests */
