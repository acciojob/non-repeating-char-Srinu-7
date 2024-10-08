function firstNonRepeatedChar(str) {
    const charCount = {};

    // Counting the occurrence of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Finding the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
