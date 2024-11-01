/*

// we can store values in variable by assigning them to that variable.


let firstName = "Omolade"; // Declaring a variable.

console.log(firstName) // Omolade


// Using a camelCase naming convention.
firstName = "Abisola"; // Reassigning values to a variables.
console.log(firstName); // Abisola



// A SyntaxError indicate that there is a mistake in our code. 


// We can write a constant with capital letters all through, provided it wont be changing.

const PI = 3.1415;


// Assignment - Values and Variables

let country = "Nigeria";
let continent = "Africa";
let population = 140000000;

console.log(`${country} with a population of ${population}, is located in ${continent}`);
*/



/*
// DATA TYPES
// in js, everything in js are made up of  1. object, 2. primitive data type. Primitive data types include numbers, strings, boolean, symbol,BigInt, Null and undefined.

// BigInt - is used to represent large integers than the number data type can hold.



// Comments
// We can use the cmd/ctrl + slash to turn on and off comments.

let javascriptIsFun = true;

console.log(typeof javascriptIsFun)

// Dynamic typing
// Useful for reassigning values to a variable in js. we can chnage the data type value assigned to variable to another type.


javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);


// it is legal to declare a variable without assigning values in js.

let year;
console.log(year)   // Undefined;
console.log(typeof year);


year = 1999;
console.log(year);
console.log(typeof year);



// Declaring variables with let, const and var
// Let and const were introduced in ES6, so they are modern js, while var is the old way of declaring variables.


// We can reassign variables declared with the "let" keyword. it is useful for declaring a variable at the top of a js file, while only assiging values to them later in the program based on some conditions.

let age = 30;
age = 31;


// Const - use to declare a variable whose value is not going to change during the course of the program. It create a variable that cannot be reassigned, an immutable varaible, that cannot be mutated.


const birthYear = 1991;
// birthYear = 1990; // returns an error "Assignment to a constant variable"


// var - is the old way of declaring variables before ES6, but it should be completely avoided.

var job = "programmer";

console.log(job);

job = "teacher";

console.log(job);
*/



/*
// BASIC OPERATORS
// there are many types which include; mathematical/arithmetic operators, comparison operators, logical operators, assignment operators etc. 


// Arithmetic operator
// consist of +, -, /, * and **(exponential).


const futureYear = 2037;
const ageJonas = futureYear - 1991;
const ageSarah = futureYear - 2018;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10);
console.log(2 ** 3);



// Assignment operator - includes =, +=, -=, *=, ++, --

let x = 10 + 12;
x = x + 10;
console.log(x);

x += 5; // same with x = x + 5;

console.log(x);

x++
console.log(x);



// Comparison Operators - used to think about boolean. includes >, <, >=, <= etc.


console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);


// the assignment operators works in a right to left sequence, thats is why; we can calculate;

let y, z;
y = z = 25 - 10 - 5;

console.log(y);
console.log(z);

// this is also why we can do this

z += 10; // z = z + 10; because js calculate the one of the left first.
console.log(z);



// assignment - Data types
const country = "Nigeria";
const continent = "Africa";
let population = 140000000;
const isIsland = false;
let language;



console.log(country, continent, population, isIsland, language);

// Assignment - let, const, var
language = "Yoruba";
console.log(country, continent, population, isIsland, language);


// Assignment - Basic Operators

let halfPopulation = population / 2;

console.log(halfPopulation);

population += 1;
console.log(population);

let finlandPopulation = 6000000;
let averagePopulation = 33000000;


console.log(population > finlandPopulation);
console.log(population < averagePopulation);

const countryDescription = `${country} is in ${continent}, and its ${population} speaks ${language}`;

console.log(countryDescription);
*/



/*
// Coding Challenge 1

function calculateBMI(height, mass) {
    return (mass / height ** 2);
}

let markHeight = 1.69;
let markMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(calculateBMI(markHeight, markMass))


console.log(markBMI, johnBMI, markHigherBMI);

markHeight = 1.88;
markMass = 95;

johnHeight = 1.76;
johnMass = 85;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI, markHigherBMI);

console.log(calculateBMI(markHeight, markMass))
*/



/*
// Making decisions with the if else statement.
// If-else statement is a control structure because it allows us to have control on how our code is executed.

const age = 12;


let isEligible = age >= 18 ? "You are eligible to get a driver license" : `Unfortunately, you have ${18 - age} years before you can get one`;


console.log(isEligible);



const birthYear = 2007;

let century;

if (birthYear <= 2000) century = 20;
else century = 21;


console.log(century);
*/




// Coding challenge;
let markHeight = 1.69;
let markMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

let markBMI = Math.round(markMass / markHeight ** 2);
let johnBMI = Math.round(johnMass / johnHeight ** 2);

if (markBMI > johnBMI) console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
else console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);





// Type conversion & type coercion.
// type conversion is when we manually convert a data type to another while type coercion is when js does it for us behind the scene.




// Type conversion.
const inputYear = Number('1991');
console.log(inputYear + 18);


// when we try to convert something that is not a number to a number using the number function. Js detects that it is not a number and return it as so.

console.log(Number("Jason")); // NaN.

// NaN is returned arithmetic calc does not return a value



let height;

console.log(height == null);
console.log(height == undefined);






// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17');  // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143




/*
// LECTURE: Equality Operators: == vs. ===
let numCountries = Number(prompt("How many neigbouring countries does your counttry have?"));

if (numCountries === 1) console.log("Only 1 border");
else if (numCountries == 2) console.log("Only 2 borders");
else if (numCountries == 3) console.log("Only 3 borders");
else if (numCountries == 4) console.log("Only 4 borders");
else console.log("No borders");
*/




/*
CODING CHALLENGE #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score



Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*/

let avgDolphins = (96 + 108 + 89) / 3;
let avgKoalas = (88 + 91 + 110) / 3;


if (avgDolphins > avgKoalas) console.log("Dolphins won");
else if (avgDolphins === avgKoalas) console.log("It's a draw");
else console.log("Koalas won");





/*
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
*/

avgDolphins = (97 + 112 + 101) / 3;
avgKoalas = (109 + 95 + 123) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) console.log("Dolphins won");
else if (avgKoalas > avgDolphins && avgKoalas >= 100) console.log("Koalas won");
else console.log("It's a draw");






// SWITCH STATEMENT


let day = "monday";



switch(day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetups");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy your weekend");
        break;
    default:
        console.log("Please enter a day of the week");

}


// LECTURE: The switch Statement

let language = "Yoruba";


switch (language) {
    case "mandarin": 
        console.log("MOST number of native speakers!");
        break;

    case "spanish":
        console.log("2nd place in number of native speakers"); 
        break;
    case "english": 
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4"); 
        break;
    case "arabic": 
        console.log('5th most spoken language');
        break;
    default:
        console.log("Great language too :D");
};





/*
// LECTURE: The Conditional (Ternary) Operator

let countryName = prompt("Enter your country name");
let population = Number(prompt('What is the population of your country'));


population > 33000000 ? console.log(`${countryName}'s population is above average`) : console.log(`${countryName}'s population is below average`);
*/






/*
CODING CHALLENGE #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.


Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”


Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
*/


let bill = Number(prompt("Enter bill"));
let tip;



tip = bill >= 50 && bill <= 300 ? `${0.15 * bill}` : `${0.2 * bill}`;


console.log("Bill:", bill, "Tip:", tip, "Total bill:", bill + tip);




