
let name = "Alice";
let age = 25;
let isStudent = true;
let nothing = null;
let notDefined;
let bigNumber = 12345678901234567890n;
let sym = Symbol('unique');

let person = { name: "Bob", age: 30 };
let numbers = [1, 2, 3];

let output = `Name: ${name}, Type: ${typeof name}
Age: ${age}, Type: ${typeof age}
Is Student: ${isStudent}, Type: ${typeof isStudent}
Null: ${nothing}, Type: ${typeof nothing}
Undefined: ${notDefined}, Type: ${typeof notDefined}
BigInt: ${bigNumber}, Type: ${typeof bigNumber}
Symbol: ${sym.toString()}, Type: ${typeof sym}
Person: ${JSON.stringify(person)}, Type: ${typeof person}
Array: ${numbers}, Type: ${typeof numbers}`;

document.getElementById('output').textContent = output;
