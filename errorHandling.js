
let output = "";

try {
    let result = riskyOperation();
    output += result;
} catch (error) {
    output += `Caught an error: ${error.message}\n`;
} finally {
    output += "This always runs";
}

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Something went wrong");
} catch (error) {
    if (error instanceof CustomError) {
        output += `\nCustom Error: ${error.message}`;
    }
}

document.getElementById('output').textContent = output;
