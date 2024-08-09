function subtract(a, b) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        throw new Error('Both parameters must be numbers');
    }
}

// Example invocation
// console.log(subtract(10, 5)); // Expected Output: 5


function greet(firstName, lastName, age) {
    if (age === undefined) {
        return `${firstName} ${lastName}'s age is not available.`;
    } else {
        return `${firstName} ${lastName}'s age is ${age}.`;
    }
}

// Example invocation
// console.log(greet("John", "Doe", 30)); // Expected Output: "John Doe's age is 30."
// console.log(greet("Jane", "Doe")); // Expected Output: "Jane Doe's age is not available."

function interpolate(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        var sum = num1 + num2;
        return `${num1} + ${num2} = ${sum}`;
    } else {
        throw new Error('Both parameters must be numbers');
    }
}

// Example invocation
// console.log(interpolate(5, 3)); // Expected Output: "5 + 3 = 8"
