

// ACTIVATING STRICT MODE

"use strict";

/*
// to activate strict mode, it must be the first code in the file. 
// strict mode help us write more secure code by avoiding more accidental errors.
// It forbid us to do certain things and create more visible errors.



let hasDriversLicense = false;
const passTest = true;


if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

/*
// We knowly omitted the s in the "hasDriversLicense", but strict mode help us spot our mistake and returned an error. On the other hnd without using strict mode, our code would have worked correctly but the bug wont be known to us.



// Strict mode also help us avoid using reserved words as our variable names, for example;

let interface = "Audio";
const private = 123;
*/



// FUNCTIONS
// function are a piece of code that is wrapped in a value(variable);


function logger() {
    console.log("My name is Jonas");
}


logger();



const describeCountry = function (country, population, capital) {
    return `${country} has ${population} people and it capital city is ${capital}`;
}

let country1 = describeCountry("Nigeria", "120 million", "Abuja");
let country2 = describeCountry("England", "50 million", "London");
let country3 = describeCountry("USA", "240 million", "New York");

console.log(country1);
console.log(country2);
console.log(country3);



// FUNCTION DECLARATION VS FUNCTION EXPRESSIONS

// This is a function declaration also called an anonymous function
/*
function calcAge(birthyear) {

    return 2024 - birthyear;

}

// this will return a value.

let age1 = calcAge(2001);
console.log(age1);



// Function expressions or variable.

let calcAge2 = function(birthyear) {

    return 2024 - birthyear;

}

let age2 = calcAge2(1999);
console.log(age2);
*/


// function declarations can be called before they are defined in the code. while function expressions cant. That is the major difference between the two.


function calcPercentage(countryPopulation, totalPopulation) {
    return Math.round((countryPopulation / totalPopulation) * 100);
}


const describePopulation = function(country, population) {
    let percentage = calcPercentage(population, 7900);
    return `${country} has ${population} million people, which is about ${percentage}% of the world's population`;
};


let percentageOfChina = describePopulation("China", 1441);
let percentageOfNigeria = describePopulation("Nigeria", 120);

console.log(percentageOfChina);
console.log(percentageOfNigeria);



// ARROW FUNCTION
// Rewriting the above function, now with arrow function.



// Writing Function expressions as arrow functions.

let calcAge2 = (birthyear) => {

    return 2024 - birthyear;

}

let age2 = calcAge2(1999);
console.log(age2);




// We can omit the parenthesis if it contains only 1 parameter.
let square = x => x * x;


console.log(square(3));

/*
const retirementYear = birthyear => {
    const age = 2024 - birthyear;
    const year = (64 - age ) + 2024;

    return year;
}


console.log(retirementYear(2001));
console.log(retirementYear(1980));
console.log(retirementYear(1990));
*/


const describePopulationAfrica = (country, population) => {

    let percentage = calcPercentage(population, 1200);

    return `${country} has ${population} million people, which is ${percentage}% of Africa's population`;
}


percentageOfNigeria = describePopulationAfrica("Nigeria", 120);
let percentageOfGhana = describePopulationAfrica("Ghana", 12);

console.log(percentageOfNigeria);
console.log(percentageOfGhana);



// FUNCTION CALLING OTHER FUNCTIONS

// function that cut a fruit into multiple pieces


function cutFruitintoPieces(fruit) {
    return fruit * 3;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitintoPieces(apples);
    const orangePieces = cutFruitintoPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;


    return juice; 
}


console.log(fruitProcessor(2, 3));




// In JS, The DOnt repeat yourself principle should be maintained at all time.


// Functions help us refactor our code.





// REVIEWING FUNCTIONS.



// function to calculate someone age.
const calcAge = function(year) {
    return 2024 - year;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const years = 64 - age;


    if (years > 0) {

        // Placing the return statement ahead of a console.log wont work because the return statement exit the block immediately with the value, therefore not reaching the console.log function.
        
        console.log(`${firstName} will retire in ${years}`);
        return years;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    };

    // return `${firstName} will retire in ${years}`;
}


console.log(yearsUntilRetirement(1980, "Richard"));
console.log(yearsUntilRetirement(2001, "Praise"));
console.log(yearsUntilRetirement(1900, "Praise"));




// CODING CHALLENGE


const calcAvg = (score1, score2, score3) => {
    let avgScore = Math.round((score1 + score2 + score3) / 3);
    return avgScore
}

const checkWinner = (avgDolpins, avgKoalas) => {
    if (avgDolpins >= (2 * avgKoalas)) {
        return `Dolphins win (${avgDolpins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= (2 * avgDolpins)) {
        return `Koalas win (${avgKoalas} vs. ${avgDolpins})`;
    } else return `No team wins!`;
}

console.log(checkWinner(calcAvg(44, 23, 71), calcAvg(65, 54, 49)));
console.log(checkWinner(calcAvg(85, 54, 41), calcAvg(23, 34, 27)));
console.log(checkWinner(calcAvg(67, 80, 71), calcAvg(20, 24, 17)));






























// INTRODUCTION TO ARRAYS
// The 2 most important data structure in JS are arrays and objects.


const friends = ['Micheal', 'Steven', 'Peter'];

console.log(friends);


/*
// New way of writing arrays
const years = new Array(1999, 2001, 2020, 1880);
console.log(years);


// Working an Array. Targeting values in an array.
console.log(friends[0]);
console.log(years[2]);
*/

// the length of arrays.

console.log(friends.length);

console.log(friends[friends.length - 1]); // helps us target the last item.



// Changing or mutating Arrays.


friends[2] = "Drake";

console.log(friends);


// Only primitive values are immutable, cant be changed, updated or reassigned. Array is not a primitive value. so we can update an array even if it is defined with the 'const' keyword.



// But we cannot update the entire array at a time
// friends = ['Bob', 'Alice']; // returns errors
// console.log(friends);



// An array can hold values of diff kind at the same time.


const firstName = 'Jonas'
const person = [firstName, 'Schmedtmann', 2024 - 2000, 'teacher', friends];
// We can input another array into an array in a cascading style.


console.log(person);
console.log(person.length);



const years = [1990, 1967, 2002, 2010, 2018];


let calcAge3 = function(birthyears) {
    let ages = [];

    for (let birthyear of birthyears) {
        let age = 2024 - birthyear;

        // We use the medthod push to add a value / variable to the end of an array.
        ages.push(age);

    }
    
    return ages;
}

console.log(calcAge2(...years));
console.log(calcAge3(years));


const populations = [120, 50, 1441, 6];

console.log(populations.length == 4 ? true : false);


let percentages = [];
function calcNewPercentage(countryPopulation) {

    
    for (let population of countryPopulation) {
        const percentage = Math.round((population / 7900) * 100) + '%';


        percentages.push(percentage);

    }

    return percentages;
}

console.log(calcNewPercentage(populations));


// BASIC ARRAY OPERATIONS
// JS has built in functions that can be directly applied on arrays called methods. For example push.


const newLength = friends.push("Feranmi"); // returns the new length of the array
// the push method mutate or change the original array

console.log(friends);
console.log(newLength);



// The 'unshift' method adds element at the start of an array. It also returns the new length of the array.



friends.unshift('John');
console.log(friends);



// Methods to remove element from an array.

// pop removes the last element. shift removes element from the begining of the array. 

// pop() and shift() returns the removed elements


const lastFriend = friends.pop();
friends.shift();

console.log(lastFriend);
console.log(friends);



// indexOf method
// The method indexOf returns the index at which the element is located.

console.log(friends.indexOf('Micheal'));

// If we input a value that is not in the array. the indexOf method returns -1
console.log(friends.indexOf('Bob')); // returns -1




// The includes method
// check if an element is contained in an array. It returns a boolean value meaning that we can use it for consitional statements. It uses a strict equality === notation.


console.log(years.includes(1996));


if (friends.includes(friends[0])) {
    console.log(`You have a friend called ${friends[0]}`);
};



let neigbouringCountries = ['Ghana', 'Togo', 'Benin', 'Cameroon', 'Niger', 'Chad'];

neigbouringCountries.push('Ivory Coast');
console.log(neigbouringCountries);


neigbouringCountries.pop();
console.log(neigbouringCountries);



if (!neigbouringCountries.includes('Germany')) {
    console.log('Probably not a central European country');
}


neigbouringCountries[4] = 'The republic of Niger';

console.log(neigbouringCountries);






// CODING CHALLENGE 2


let bills = [40, 24, 300, 80, 240, 800, 1000];


let tips = [];

let total = [];


function calcTip(bills) {

    // const bill = Number(prompt('Enter bill amount'));



    for (let bill of bills) {


        let tip = bill >= 50 && bill <= 300 ? `${0.15 * bill}` : `${0.2 * bill}`;

        tip = Number(tip);

        let totalAmount = tip + bill;

        tips.push(tip);
        total.push(totalAmount);
    }


    
    return tips;

}

console.log(calcTip(bills));
console.log(total);


















// INTRO TO OBJECTS
// Object allows us to define key value pairs in js. We use object to group variables that belongs together.

const person1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2024 - 2001,
    job: 'teacher', 
    friends, 
}

// Each keys is also called a prperty of the object 'person1'.


console.log(person1.friends);


const myCountry = {
    countryName: 'Nigeria',
    capital: 'Abuja',
    language: ['English', 'Pidgin', 'Yoruba', 'Igbo', 'Hausa'],
    population: 120,
    neigbours: ['Ghana', 'Togo', 'Benin', 'Cameroon', 'Niger', 'Chad']
}


// DOT VS BRACKET NOTATION

// Using dot notation to target properties of an object

console.log(person1.firstName);


// Using bracket notation to target properties of an object.
console.log(person1['lastName']); // We can put an expression in the bracket notation


const nameKey = 'Name';
console.log(person1[`last${nameKey}`]);
console.log(person1[`first${nameKey}`]);




// Another example

/*
const options = prompt('Choose between firstName, lastName, age, job, friends');

console.log(person1[options]);
*/

// Adding new properties to the object

person1.location = 'Germany';
person1['socials'] = 'Jonas\github.com';


console.log(person1);



console.log(`${person1.firstName} has ${person1.friends.length} friends, and his best friend is ${person1.friends[0]}`);



console.log(`${myCountry.countryName} has ${myCountry.population + 2} million ${myCountry.language[0]} speaking people, ${myCountry.neigbours.length} neigbours and a capital called ${myCountry.capital}`);

console.log(`${myCountry['countryName']} has ${myCountry['population'] - 2} million ${myCountry['language'][0]} speaking people, ${myCountry['neigbours'].length} neigbours and a capital called ${myCountry['capital']}`);







// OBJECT METHODS.
// Function is a value type in js, that why we can include it in an object.
// Any function that is tied to an object is called a method.



const person2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthyear: 1991,
    job: 'teacher', 
    friends, 
    hasDriversLicense: false,
    /*
    calcAge: function(birthyear) {
        return 2024 - birthyear;
    }
   

    calcAge() {
        console.log(this);
        return 2024 - this.birthyear;
    }
     */

    calcAge() {
       
        this.age = 2024 - this.birthyear;
        return this.age;
    },

    getSummary: function() {

        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;


    }
}

// console.log(person2.calcAge(1999));
// console.log(person2['calcAge'](1991)); // Calling methods(function defined in an object) using the bracket notation.


// we can use properties of an object without having to pass it in into a function, if we ever need to use it in a function defined inside the object. we can just use the 'this' keyword.



// The keyword 'this' is equal to the object calling it.

console.log(person2.calcAge());

// the 'this' keyword is very useful when working with objects because it helps us to follow the dont repeate yourself principle and it also save time for example when we change the object variable name. It would still work perfectly compared to using the props we want directly.


// we can use the 'this' keyword to create new properties.

console.log(person2.age);

console.log(person2.getSummary());




// Arrays are special kind of objects. That is why they also have methods we can use to manipulate them. shift, pop, etc. using object is just using our own method on the object we created ourself. While array is a built in object using built in methods.





const myCountry2 = {
    countryName: 'Nigeria',
    capital: 'Abuja',
    language: ['English', 'Pidgin', 'Yoruba', 'Igbo', 'Hausa'],
    population: 120,
    neigbours: ['Ghana', 'Togo', 'Benin', 'Cameroon', 'Niger', 'Chad'],

    describeCountry() {
        return `${this.countryName} has ${this.population} million ${this.language[0]} speaking people, ${this.neigbours.length} neigbours and a capital called ${this.capital}`;
    },

    checkIsland() {
        this.isIsland = this.neigbours.length == 0 ? true : false;


        return this.isIsland;
    }
}

console.log(myCountry2.describeCountry());
console.log(myCountry2.checkIsland());










// CODING CHALLENGE 3

const info1 = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.6,

    calcBMI() {
        this.BMI = Math.round(this.mass / this.height ** 2);
        return this.BMI;
    }
};

const info2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI() {
        this.BMI = Math.round(this.mass / this.height ** 2);
        return this.BMI;
    }
};



console.log(info2.calcBMI());
console.log(info1.calcBMI());



let higherBMI = info2.calcBMI() > info1.calcBMI();


/*
let person2Name = info2.fullName.slice(0, info2.fullName.indexOf(' '));
let person1Name = info1.fullName.slice(0, info1.fullName.indexOf(' '));
*/

let person2Name = info2.fullName.split(' ')[0];
let person1Name = info1.fullName.split(' ')[0];


higherBMI = higherBMI ? `${person2Name}'s BMI (${info2.calcBMI()}) is higher than ${person1Name}'s (${info1.calcBMI()})!` : `${person1Name}'s BMI (${info1.calcBMI()}) is higher than ${person2Name}'s (${info2.calcBMI()})!`;


console.log(higherBMI);







// ITERATION - THE FOR LOOP


let agesYear = [];

/*
for (let i = 0; i < years.length; i++) {
    console.log(years[i], typeof years[i]);
}
*/

for (let item of years) {
    console.log(item);

    const age = 2024 - item;
    // creating a new array.
    agesYear.push(age);
}

console.log(agesYear);


for (let i = 1; i <= 50; i++) {
    


    if (i == 50) console.log('The last person is voting now'); else {
        console.log(`Voter number ${i} is currently voting`);
    }
}

// The 'continue' keyword move to the next iteration while the 'break' statement completely jump out of the block and terminate the loop.



for (let item of percentages) {
    console.log(item);
}

// LOOPING BACKWARD AND LOOPS IN LOOPS


for (let i = years.length - 1; i >= 0; i--) {
    console.log(i, years[i]);
}



for (let ex = 1; ex < 4; ex++) {
    console.log(`--- Exercise ${ex}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`rep ${rep}`);
    }
}


const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];


for (let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neigbour: ${listOfNeighbours[i][j]}`);
    }
};



// WHILE LOOPS
// Write a code to roll a number, if we roll a 6, the program should stop.
// The while loop does not need a counter variable




let dice = Math.floor(Math.random() * 6) + 1;



while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log('You rolled a 6');
    }
}





// CODING CHALLENGE 4


let ages = [20, 24, 14, 71, 34, 90, 44, 40, 8];

const calcAverage = function(arr) {
    let result = 0;


    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }


    return result / arr.length;
}


console.log(calcAverage(ages));
console.log(calcAverage(total));