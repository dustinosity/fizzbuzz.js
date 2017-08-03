/*!
 * fizzbuzz.js - In case you were wondering... 
 * http://github.com/dsel/fizzbuzz.js
 */
 
const fizzBuzz = (x, y, ans) => x % y ? '' : ans;

for (let n = 1; n <= 100; n++) {
  console.log(fizzBuzz(n, 3, 'Fizz') + fizzBuzz(n, 5, 'Buzz') || n);
} 
