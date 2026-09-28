// 1. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

// 2. Even number check
function isEven(number) {
  return number % 2 === 0;
}

// 3. Personalized greeting (template literal)
function greet(name) {
  return `Hello, ${name}!`;
}

// 4. Call each function with two different inputs
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212

console.log(isEven(4));  // true
console.log(isEven(7));  // false

console.log(greet("Kwezi"));   // Hello, Kwezi!
console.log(greet("Trevor"));  // Hello, Trevor!