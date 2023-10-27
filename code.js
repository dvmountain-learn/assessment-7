
// Step 2: Write Code


// 1) Sum Zero
function addToZero(numbers) {
    // Loop through the numbers by i
    for (let i = 0; i < numbers.length; i++) {
        // Loop through the numbers by j
        for (let j = 0; j < numbers.length; j++) {
            // Check condition of i and j to make sure. 
            // They are different index to do the next step.
            if (i !== j) {
                // Try to sum each element of i and j to equal zero and return true
                if (numbers[i] + numbers[j] === 0) {
                    return true
                } 
            }
        }
    }
    return false
}
console.log("==> 1) Sum Zero ")
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
// Runtime complexity: O(n^2)
// Space complexity: O(n^2)

// 2) Unique Characters
function hasUniqueChars(stringValue) {
    // Try to convert string to array with split method
    let words = stringValue.split('')
    // Create variable of set to make sure doesn't store duplicates
    let uniqueSet = new Set()
    // Loop through words and add element into variable of set
    for (let word of words) {
        uniqueSet.add(word)
    }
    // Compare size of two collection set and array to make sure 
    // they are same size, if they are equal size return true 
    if (uniqueSet.size === words.length) return true
    // else return false
    return false
}
console.log("==> 2) Unique Characters ")
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
// Runtime complexity: O(n)
// Space complexity: O(n)

// 3) Pangram Sentence
function isPangram(sentence) {
    // Create variable array of letters by initial English alphabet a -> z
    const letters = "abcdefghijklmnopqrstuvwxyz"
    // Loop through character of array sentence parameter
    for (let i = 0; i < sentence.length; i++) {
        // Loop through character of of array letters
        for (let j = 0; j < letters.length; j++) {
            // Check if sentence includes letters then return false
            if (sentence[i].includes(letters[i])) {
                return false
            }
        }
    }
    // Return true
    return true
}
console.log("==> 3) Pangram Sentence ")
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
// Runtime complexity: O(n^2)
// Space complexity: O(n^2)

// 4) Longest Word
function findLongestWord(words) {
    // Create variable longestWord by initial value equal zero. 
    // The variable'll hold the length of the longest word
    let longestWord = 0
  
    // Loop through words 
    for(let i = 0; i < words.length; i++) {
        // Check each length of element is greater than the word, so it'll be compared with longest word variable
        if(words[i].length > longestWord) { 
            // If looking for, try to assign new value of length to variable longest word
            longestWord = words[i].length
        }
    }
    // Return the longest word
    return longestWord
}
console.log("==> 4) Find Longest Word ")
console.log(findLongestWord(["hi", "hello"]))
// Runtime complexity: O(n) 
// Space complexity: O(n)