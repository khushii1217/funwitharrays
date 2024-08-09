function calculateFactorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// console.log(calculateFactorial(5)); // Expected Output: 120

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (var i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

// Example invocations
// console.log(isPrime(7)); // Expected Output: true
// console.log(isPrime(10)); // Expected Output: false


function isPalindrome(str) {
    var cleanedStr = str.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function findLongestPalindrome(strings) {
    var longestPalindrome = "";

    for (var i = 0; i < strings.length; i++) {
        var currentString = strings[i];
        if (isPalindrome(currentString) && currentString.length > longestPalindrome.length) {
            longestPalindrome = currentString;
        }
    }

    return longestPalindrome;
}

// Example invocation
var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
// console.log(findLongestPalindrome(strings)); // Expected Output: "racecar"


function countUniqueCharacters(str) {
    var uniqueChars = new Set();
    var cleanedStr = str.replace(/\s+/g, '');
    cleanedStr = cleanedStr.toLowerCase(); 
    for (var i = 0; i < cleanedStr.length; i++) {
        uniqueChars.add(cleanedStr[i]); 
    }

    return uniqueChars.size; 
}

// Example invocation
console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)
