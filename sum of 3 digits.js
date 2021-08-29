// example number: const num = 123

// your code goes here
const lastDigit = num % 10;
const middleDigit = Math.floor(num/10) % 10;
const firstDigit = Math.floor(num/100)
const sum = firstDigit + middleDigit + lastDigit;

console.log(sum);
