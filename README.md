fizzbuzz.js
===========

In case you were wondering...

```js
const fizzBuzz = (x, y, answer) => x % y ? '' : answer;

for (let n = 1; n <= 100; n++) {
  console.log(fizzBuzz(n, 3, 'Fizz') + fizzBuzz(n, 5, 'Buzz') || n);
} 
```

Go ahead, paste it into your js console. I'll be over here waiting...
