// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer:["G","o","l","f"," ", "2","0","2","2"]
// b) Verify and explain: [
//   'G', 'o', 'l',
//   'f', ' ', '2',
//   '0', '2', '2'
// ]
// the split method will split a string into an array based on what you put in the argument. In this clase it was an empty string so it split after each character including the space which is technically a character. The ascii value of space is 32 or 0010 00002 in binary so that is what the machine is reading so it shows up. The argument actually tells the string where it should split so for example if I put:
console.log(cohort.split(" "))
// the outcome would be ["Golf", "2022"]. In this way we can loop through individual words in a long string to check for something like word count of a paragraph.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: There is no return so we got an undefined. If a function doesn't have a return statement it will just return undefined by default.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: there is no return statement here in the map function so I am tempted to say undefined. I am unsure though because I think there might be an implicit return since it is only one line. If that is the case then it will be [8,10,12,14,16]
// b) Verify and explain: So there is an implicit return in the .map function. I think it can only be used when the logic can fit on a single line. If the logic requires a new line curly bracers and a return should be used. Though I did find some examples that appeared to have multiple lines and no return so I am unsure. Hard to find documentation on this. I am going to go with if it is easily readable like the above and fits on one line then no return is necessary otherwise I should use curly bracers and a return. The .map function iterates through each element of the array and performs some action on that element. The .map returns an array of equal length as the array passed into it. For now...

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11,13,15]
// b) Verify and explain: I am correct, the filter method will compare each element of the array to the given condition and if it is true will include it in the array and if it doesn't it will not be included in the returned array. Therefore .filter will usually produce a smaller array than the array passed into it.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:"Javascript"
// b) Verify and explain: Ok, so object dot notation allows you to access items within an object. If that item happens to be an array you will then need bracket notation to access the item by using that items index. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: George,
                  // cohort: "foxtrot",
                  // year: 2022
                  // }
// b) Verify and explain: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 } Almost correct, I wasn't expecting the Learn at the beginning. A class is a blueprint for an object. In this case the class creates a new instance of a Learn student object who is in foxtrot in 2022. The Constructor method has a paramater of name which expects a students name to be passed through when creating a new instance of the class. In this way you could quickly create a lot of students who are also in foxtrot 22.

//The below was part of my testing for an answer to question 2 of the interview questions
let map = Array.prototype.map
console.log(map.call("give me the ascii", (eachLetter) => {
    return eachLetter.charCodeAt(0)
}))
// Result:
//[
//   103, 105, 118, 101,  32,
//   109, 101,  32, 116, 104,
//   101,  32,  97, 115,  99,
//   105, 105
// ]