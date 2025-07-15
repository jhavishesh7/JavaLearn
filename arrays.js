
let numbers = [1, 2, 3];
numbers.push(4);
numbers.unshift(0);
let last = numbers.pop();
let first = numbers.shift();

let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((total, n) => total + n, 0);

let output = `Original: ${numbers}
After operations: ${numbers}
Doubled: ${doubled}
Evens: ${evens}
Sum: ${sum}`;

document.getElementById('output').textContent = output;
