
let [x, y] = [1, 2];
let {name, age} = {name: "Alice", age: 25};

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

let text = `Hello ${name}, you are ${age} years old`;

let user = { profile: { name: "Bob" } };
let city = user?.profile?.address?.city;

let setting = null;
let defaultValue = setting ?? "default";

let output = `Destructuring: x=${x}, y=${y}, name=${name}
Spread: ${arr2}
Template: ${text}
Optional Chaining: ${city}
Nullish Coalescing: ${defaultValue}`;

document.getElementById('output').textContent = output;
