let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

// Read through the code shown above. What does it log to the console at lines 5, 6, 9, and 10?

// Line 5 will output: [1, 2, 3]
// This is because on line 4 we invoke the `Array.prototype.pop()` method on our local variable `myArray`, which removes and returns the last element of the array that called the method. Because this method is mutating, our `myArray` array will see that change.

// Line 6 will output: [1, 2, 3]
// This is because on line 2 we declare and initialize a local variable called `myOtherArray` to reference that same value that `myArray` references. This means that `myArray` and `myOtherArray` curretly reference the same array object in memory, and the changes we performed on the previous line will be seen by both `myArray` as well as `myOtherArray`.

// Line 9 will output: [1, 2]
// This is because on the previous line, line 8, we reassign the value that our local variable `myArray` references. This is what we see when we log `myArray` to the console.

// Line 10 will output: [1, 2, 3]
// This is because that is the value that the `myOtherArray` variable references. When we reassigned `myArray`, it had no impact on the value of `myOtherArray`, we simply reassigned `myArray` which means that `myArray` and `myOtherArray` no longer reference the same array object in memory.

// LSBot
// Hi Alyssa! Thanks for your submission.

// Your analysis is spot on! You've correctly predicted the output for all four console.log statements and provided excellent, detailed explanations for each one.

// Overall Thoughts
// You've successfully demonstrated a strong grasp of the fundamental difference between mutation and reassignment in JavaScript, which is the key concept of this exercise. Your explanations show that you're not just guessing the output, but you understand the underlying mechanics of how JavaScript handles variables and object references.

// Structure and Explanations
// Your response is perfectly structured. You tackled each line methodically, explaining the "what" (the output) and then the "why" (the reasoning). I was particularly impressed with your clear distinction between the mutating action of pop() affecting both variables and the reassignment of myArray only affecting that specific variable's reference. Using phrases like "reference the same array object in memory" shows a precise and correct understanding of the topic.

// Opportunities for improvement
// Your submission is excellent, and you've thoroughly mastered the concepts in this exercise, so there's nothing to correct here.

// To challenge yourself further and solidify your understanding of variable declarations, you might consider this follow-up question: In the original code, myOtherArray is declared with const. What would happen if it were declared with let instead? Would any of the outputs change? Why or why not?

// Thinking through questions like this can be a great way to explore related concepts. Fantastic work on this

// Was my response helpful?



// Alyssa Easter
// My Answer: If we were to change the declaration of myOtherArray to let, instead of const, we would see no change in our outputs. Declaring variables with let and const create variables with the same scoping rules, which is block scoped. Meaning that these variables will be scoped to the block that they are within. In this example, there are no blocks, and both of these variables are available on all 10 lines of this program. The differences between let and const is the intent behind variables. When we declare a variable with let it means that we will likely reassign the value referenced by that variable. However, when we declare a variable with const it means that we do not intend to reassign the value this variable references. When working with arrays, it's important to understand that we can modify the elements within the array that a const variable references, but not reassign it to reference a different array object.


// LSBot
// Hi Alyssa,

// That's an excellent and perfectly articulated answer!

// You are absolutely correct that changing const to let for the myOtherArray variable would result in no change to the program's output.

// Your reasoning is spot on. You correctly identified that since myOtherArray is never reassigned, the distinction between let and const doesn't affect the outcome in this specific code. Your explanation of how const works with mutable objects is particularly clear and important:

// "When working with arrays, it's important to understand that we can modify the elements within the array that a const variable references, but not reassign it to reference a different array object."

// This shows a deep understanding of the core concepts of mutability and how variables work as pointers to values in memory, which are central ideas in this part of the course.

// Great job connecting all these concepts together. You've demonstrated a solid grasp of this material.