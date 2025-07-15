
let car = {
    brand: "Toyota",
    model: "Camry",
    displayInfo() {
        return `${this.brand} ${this.model}`;
    }
};

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
};

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise`;
    }
}

let output = `Car Info: ${car.displayInfo()}\n\n`;

let person1 = new Person("Alice", 25);
output += `Person Greeting: ${person1.greet()}\n\n`;

let dog = new Animal("Rex");
output += `Animal Sound: ${dog.speak()}`;

document.getElementById('output').textContent = output;
