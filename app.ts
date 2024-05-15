/*question no 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
" Look closely at your results, and make sure you understand why each line evaluates to True or False.
" Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/





let num1: number = 10;
let num2: number = 5;
let string1: string = 'hello';
let string2: string = 'world';
let bool1: boolean = true;
let bool2: boolean = false;

// Test 1
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 === 10);

// Test 2
console.log("Is num2 less than 10? I predict True.");
console.log(num2 < 10);

// Test 3
console.log("Is string1 not equal to 'world'? I predict True.");
console.log(string1 !== 'world');

// Test 4
console.log("Is string2 equal to 'world'? I predict True.");
console.log(string2 === 'world');

// Test 5
console.log("Is bool1 equal to true? I predict True.");
console.log(bool1 === true);

// Test 6
console.log("Is bool2 equal to false? I predict True.");
console.log(bool2 === false);

// Test 7
console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2);

// Test 8
console.log("Is string1 equal to 'hello'? I predict False.");
console.log(string1 === 'hello');

// Test 9
console.log("Is bool1 equal to true? I predict False.");
console.log(bool1 === true);

// Test 10
console.log("Is num2 greater than or equal to 5? I predict False.");
console.log(num2 >= 5);