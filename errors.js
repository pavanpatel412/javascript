try {
    let a = 45;
    let b = 7;// Set a value for 'b'
    console.log(a / b);
} catch (err) {
    console.log("An error occurred:", err.message);
}
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }

        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Finally block: This always gets executed");
    }
}

// Example usage
divideNumbers(10, 2);  // Normal case
divideNumbers(0, 8);   // Division by zero case
