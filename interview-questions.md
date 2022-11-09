# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is declared at the time of defining the function. It tells the function what to expect as input so that the function can use the parameter as a placeholder without the data actually being there. The argument is the actual data that is passed to the function. The argument will then take the place of the parameter in the function as the function runs and produces an output.

Researched answer: A parameter is basically a named variable and acts much like a named variable in that it can be given different values. This named variable is used as a placeholder for the imported arguments given to a function. for example:
const func = (parameter) => {
    return parameter
}
func("argument")

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method has three inbuilt parameters. They are the value of each element in the array, followed by the index of that item, followed by the original array. It looks something like this:
array.map((value, index, array) => {}
The value parameter is required while the index and array are optional.

Researched answer: The full syntax for map is array.map(function(currentVal, index, array), thisValue). There are actually two required parts. The callback function itself is required and the currentVal is also required. There are three optional parts: the index, the array, and the thisValue which has a default of undefined. This this value can be used as a this value, I couldn't find a good example of this. I spent about half an hour trying to find a use case for the thisValue part but could not find one. 

Another cool feature of map is you can use it on a string by using the .call() method. For example if you wanted for some reason to loop through a string modifying each letter or maybe getting the ascii value for each character and putting it into an array you could write.
let map = Array.prototype.map
console.log(map.call("give me the ascii", (eachLetter) => {
    return eachLetter.charCodeAt(0)
}))
Tested this in the coding concepts at the end.



3. What is the difference between map and filter?

Your answer: The map method will create a new array that modifies each individual element of the array in some way specified by the programmer. The easy example is to just multiply an array of numbers by 3 so that each individual element is multiplied by three. In a more practical since map is used in React by taking an array of objects that is retrieved from a database, either internal or external, then taking very specific information such as the users name and profile picture, then attaching that to every element that is rendered. 

The filter method filters an array to only output an array of elements that meet the inclusion criteria given by the programmer. The easy case here is to return only odd numbers from an array of numbers. In a practical since it can be used the same way as above in React. If a person were to search for events in Los Angeles a filter method will look at an array of objects that lists all the events in California with all of their details. One of the properties of this object is location: {location: "Los Angeles"} 
The filter method would return an array were event.location === "Los Angeles" then you could use the .map method too display all of the details such as event.type, event.date, event.name and so on to a card that the user can easily read and select from.
eventArray.filter(event => event.location === "los angeles").map(event => <li>event.name</li>)

Researched answer:  Map returns an array with only the requested information from the original array. Useful when you have an array of objects but only want particular information such as username and such from that object.

Filter returns a portion of the original array based on whatever condition you pass. The conditional must return a boolean so that the filter method can determine whether each value should go into the new array.


4. What is iteration?

Your answer: Iteration is the process of doing a repetitive task until a certain condition is met. This could be until the end of an array or until you have found the solution. The form of iteration we have used most is the for loop. We are also frequently using the map and filter methods which are also a type of iteration that completes when all elements of an array have been looked at. There is also a while loop and some different styles of for loop such as the for in loop and the for of loop. Then there is recursion which is similar to iteration as it will continue to call on itself until a certain condition is met. Not sure if recursion is considered iteration though. That will be part of my research.

Researched answer: Iteration repeats an action some number of times. There are also diffent styles of loops that I didn't list above.
There is the do..while loop which will always perform atleast one action before the condition is checked. There are the break and continue statements which are used to break out of and continue while loops respectively.
The for..in statement is actually used to loop through an object and check each of it's properties. the for...in shouldn't be used in arrays because it also iterates over the index as well as the value.
The for...of loop will iterate over only the property value and not the property name so it can be used with arrays.

As far as recursion goes. Recursion and iteration can often both be used to solve the same problem. Recursion is not considered iteration since iteration is reserved for loops like for and while. Recursion is a function that repeatedly calls on itself slightly changing the argument until a base case is reached and the full stack is then called. I am not going to go into the stack here.

Iteration vs recursion. Any recursive solution can be turned into an iterative one. My understanding is that iterative is often faster and saves on memory when compared to the recursive method. However the recursive method is often much easier to write and to read and presents more elegant code.

5. What is the difference between a class and an object?

Your answer: A class is the blueprint for an object. An object is a data structure that holds information and functions called methods. 

Researched answer: So class is a blueprint for an object while an object is an instance of a class. No memory is allocated when a class is created but objects do take up memory when created. The class is declared only once while an object can be created as many times as you want from the class blueprint. A class can not be manipulated since it isn't in memory but objects can be manipulated using dot notation. A class is a logical entity while an object is a physical entity. Not quite sure what that means. A class is declared with the class keyword while the object is declared with the new keyword. Important take away is a class is not an object but just the blueprint for creating objects.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I am not very sure on this but I believe hoisting is about scope and where something lives in the order of operations for running the code. I do not think javascript is purely run top to bottom but it is read through first and certain elements in javascript will be hoisted to the top of the order so that they can be accessed immediately no matter where they live in the actual document. I will do some research and get back to you on the specifics.

Researched answer: Javascript hoisting is where a variable or function is available before it's decleration. The only thing that can do this is function and async function declerations. Var can also do this to a lesser extent.
function myfunc(){
    return something
}
This function or it's async varient will be hoisted and be available to use even if it is used before it is defined. So:
myFunc()
function myfunc(){
    return something
}
should work. Also:
x = 10
var x
will also work even though var x is defined after.

let and const are also hoisted to the top of their respective block but let will throw a ReferenceError if you try to use it before its decleration and const will just not run at all. 

In short declerations are hoisted while initializion is not. Thefore declare your variables at the top of each scope it is used in.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is a tool used by developers by framing a problem in how the user would actualy use the application. It goes something like as a user I want to be able to click on a button that switches to dark mode. This user story will then be used to implement a feature of a button that switches the screent to darkmode.

2. Spread operator: ... allows the copying of an array or object into another array or object. Fore example:
arr1 = [1,2,3]
arr2 = [4,5,6]
arr3 = [...arr2, ...arr2]
console.log(arr3) //[1,2,3,4,5,6]
this same process can be used for objects.
Can also be used to get a list of paramaters from an array so that it can be passed to a function. For example:
let arr = [1,2,3,4]
Math.max(arr) returns NaN
Math.max(...arr) returns 4

3. React: React is a javascript library for building user interfaces. React has a virtual DOM so that the pages DOM will only update the part that was changed when it is changed and not the entire dom. React is also component based allowing to create highly reusable peices of code and implement them in the page while also passing values between them with the use of props.

4. React props: React props are the method used to transfer information and functions between components. You can thing of props as the argument passed to different components so that they can be used within that component. Can be accessed in functional components through the custom of listing props as a paramater and then accessing each individual peice of information by say props.item or props.function. In a class component you would acess it through this.props.item or this.props.function.

5. DOM events: DOM events are events that happen on a web page that can be listened for and then used to change something on the page. These events signal something has happened and we need to do something about it. We will use the click event most often to register the users interaction with a button or a link. Keydown events are also important to register key strokes such as the use of enter to submit a form. We often use mouseover events or hover events to change something on the page so that the user knows that an action is possible such as the cursor changing to a hand or the background changing color.
