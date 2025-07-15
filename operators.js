
let a = 10, b = 5;
let output = `Arithmetic:
Addition: ${a + b}
Subtraction: ${a - b}
Multiplication: ${a * b}
Division: ${a / b}
Exponent: ${a ** b}
Modulus: ${a % b}

Comparison:
Equal (==): ${a == '10'}
Strict Equal (===): ${a === '10'}
Not Equal (!=): ${a != '10'}
Strict Not Equal (!==): ${a !== '10'}
Greater Than: ${a > b}
Less Than: ${a < b}

Logical:
AND: ${a > 5 && b < 10}
OR: ${a > 5 || b > 10}
NOT: ${!(a > 5)}

Ternary:
${a > b ? 'a is greater' : 'b is greater'}`;

document.getElementById('output').textContent = output;
