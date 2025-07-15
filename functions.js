
function greet(name) {
    return `Hello, ${name}`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

function createUser(name, role = "user") {
    return `${name} is a ${role}`;
}

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let output = `Greet: ${greet("Alice")}
Add: ${add(2, 3)}
Multiply: ${multiply(2, 3)}
Create User: ${createUser("Bob")}
Sum: ${sum(1, 2, 3, 4)}`;

document.getElementById('output').textContent = output;
