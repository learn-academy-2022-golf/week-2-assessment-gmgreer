// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


describe("multThree", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        const outputArray1 = [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        const outputArray2 = [72, 81, 90, 99, 108]
        expect(multThree(numbersArray1)).toEqual(outputArray1)
        expect(multThree(numbersArray2)).toEqual(outputArray2)
    })
})

//  ReferenceError: multThree is not defined

// b) Create the function that makes the test pass.
// Create a function named multThree that takes an array as an argument
// one paramater of type array as input
// one array with all numbers * 3 as output
// use the map method to iterate over the items in the array and multiply each one by three
// return the mapped array

const multThree = (arr) => {
    return arr.map(num => num * 3)
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.
// Create a function called divisible by three that takes an object as an argument.
// The input is an object with a number attribute
// The output is a string stating if the number is divisible by three
// Use a conditional statement to check if the number in the object is divisible by three using the modulo operator
// Will need to use dot notation to access the number in the object
// return a string stating if the number is divisible by three or not
const divisibleByThree = (obj) => {
    let num = obj.number
     return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
describe("capitalize", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })

})

// ReferenceError: capitalize is not defined

// b) Create the function that makes the test pass.
// Create a function named capitalize that takes an array of strings as an argument
// The input is an array of strings
// The output is an array of strings with the first letter capitalized
// Use the .map method to iterate through the array
// strings are immutable so we can't just capitalize the first letter we have to split the string into in array with the .split method then target the first letter with array[0] or bracket notation.
// then .toUppercase this first letter then using .slice method add the rest of the string starting at index one back to the array. 
// Then we must join the string back together, the easiest way is just using string inerpolation with the back ticks.
// must return the array with capitalized strings
const capitalize = (arr) => {
    return arr.map((item) => {
     return `${item.split("")[0].toUpperCase()}${item.slice(1)}`   
    })
        
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
describe("returnFirstVowelIndex", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(returnFirstVowelIndex(vowelTester1)).toEqual(1)
        expect(returnFirstVowelIndex(vowelTester2)).toEqual(0)
        expect(returnFirstVowelIndex(vowelTester3)).toEqual(2)
        expect(returnFirstVowelIndex("BASE")).toEqual(1)
    })
})

// ReferenceError: returnFirstVowelIndex is not defined

// b) Create the function that makes the test pass.
// Create a function named returnFirstVowelIndex that takes in a string as an argument
// Input is a single string
// Output is the index of the first vowel
// ok, this is technically a revised plan as the first one was very verbose. I was going to split the string and loop through but I realized as I was doing that I didn't need to do that as there is a different and shorter method.
// String.charAt() will give you the index letter at that index so I can just loop through the string directly with this method and return out of the loop as soon as I find a vowel.
// I chose to loop through the string with a while loop just to change things up. A While loop will iterate through each character in the string and as soon as it encounters a vowel will return the current index it is testing.
// I think it will be easier to break out of a while loop.
// Use a conditional statemet and regex.test(/[aeiou]/) to check to see if the letter is a vowel then return that index and stop the loop. Regex.test will return either true or false. It takes a regex snippet and then checks to see if the string matches that snippet. Regex is fun.
// I tried using .match first but realized that would return the actual letter. Which now gives me the idea of splitting the string then filtering the resulting array with the afore mentioned .match leaving only vowels then taking the character at index 0 and then using indexOf on the original split array to get the index of that letter. But that is way too verbose kind of like my original for loop.
// Should return that index and break out of the loop so we only get one index
// If the letter isn't a vowel the loop should continue with i++
// Thought of an edge case of capital letters so put the i at the end of the regex so that it matches capital letters as well

const returnFirstVowelIndex = (str) => {
    let i = 0
    while (i < str.length) {
        if (/[aeiou]/i.test(str.charAt(i))) return i
        else i++
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total

