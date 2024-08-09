// objectFactory

function objectFactory(fname, age) {
    // Coerce 'age' to a number
    age = Number(age);
    
    // Check if 'age' is a valid number
    if (isNaN(age)) {
        throw new Error('Invalid age provided');
    }
    
    // Create and return the object
    var obj = {};
    obj[fname] = age;
    return obj;
}

// Example invocation
// console.log(objectFactory("John", "25")); // Expected Output: { John: 25 }

// gradeClassifier


function gradeClassifier(score) {
    score = Number(score);

    
    if ( score < 0 || score > 100) {
        return "Invalid score";
    }

    
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Example invocation
// console.log(gradeClassifier(85)); // Expected Output: "B"


function stringManipulator(str1, str2) {
    
    if (str1 === '' && str2 === '') {
        return '';
    }

     if (str1.length === str2.length) {
        return str1 + str2;
    } else if (str1.length > str2.length) {
        return str1 + str2;
    } else {
        return str2 + str1;
    }
}

// Example invocation
console.log(stringManipulator("hello", "world")); // Expected Output: "helloworld"
