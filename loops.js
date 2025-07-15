
let output = "For Loop:\n";
for (let i = 0; i < 3; i++) {
    output += i + " ";
}

output += "\n\nWhile Loop:\n";
let j = 0;
while (j < 3) {
    output += j + " ";
    j++;
}

output += "\n\nDo-While Loop:\n";
let k = 0;
do {
    output += k + " ";
    k++;
} while (k < 3);

output += "\n\nFor...of Loop:\n";
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    output += fruit + " ";
}

document.getElementById('output').textContent = output;
