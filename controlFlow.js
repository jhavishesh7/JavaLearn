
let age = 20;
let day = "Tuesday";
let output = "";

// If-else
if (age >= 18) {
    output += "Adult\n";
} else {
    output += "Minor\n";
}

// Switch
switch (day) {
    case "Monday":
        output += "Work day\n";
        break;
    case "Friday":
        output += "Almost weekend!\n";
        break;
    default:
        output += "Regular day\n";
}

document.getElementById('output').textContent = output;
