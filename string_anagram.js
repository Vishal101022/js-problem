function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase to make the comparison case-insensitive
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths are the same
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Create objects to store character frequencies
    const charCount1 = {};
    const charCount2 = {};

    // Count the frequency of characters in the first string
    for (let char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count the frequency of characters in the second string
    for (let char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the character frequencies
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    // If all checks pass, the strings are anagrams
    return true;
}

// Example usage
let string1 = "listen";
let string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
