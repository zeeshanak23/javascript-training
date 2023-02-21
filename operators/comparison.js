// #### Using equality operator (==, ===)

// == operator matches the values without caring about the data types, while ==== matches the values and types.

// let newYear = '2023';
// newYear == 2023
// newYear === 2023

// let age = prompt("Input your age ")
// if (age == 24) {
//     console.log("You are your peak")
// }
// else if (age < 24) {
//     console.log("You are too young")
// }
// else {
//     console.log("You are too old")
// }


// let lowerRange = 0
// let higherRange = 0
// let answer;

// while (!answer) {
//     const currentGuess = Math.floor(higherRange + lowerRange / 2)
//     let guess = prompt(`The Guess number is ${currentGuess}`)
//     if (guess == 'y') {
//         lowerRange = currentGuess
//     } else if (guess == 'n') {
//         higherRange = currentGuess
//     } else {
//         answer = currentGuess
//     }

// }
// window.alert(`The Guess number is ${answer}`)



age = 22
qualification = "b.tect"
father = "abc"

let eligible = age > 20 & qualification == "B.tech" || age > 20 & father == "mla" || age > 20 & father == "politician" ?
    true : false
// Given students marks in a subject, print out the grade as per the below rules.
const getGradeNew = (marks) => {
    if (marks > 90 & marks < 100) {
        return 'A'
    }
    else if (marks > 70 & marks < 90) {
        return 'B'
    }
    else if (marks > 50 & marks < 70) {
        return 'C'
    }
    else {
        return 'D'
    }
}


// Write a program to find the selling price of an item in different state, given the profit percentage as 10% and cost price as 100, and VAT(applied on cost price) based on the state as follows:

// Uttar Pradesh - 12.5%
// Madhya Pradesh - 10%
// Bihar - 15%
// Karnataka - 10%

let state = "India"
let price = 100
let profit = 10

switch (state) {
    case 'Uttar Pradesh':
        console.log(`The Price of item in Uttar Pradesh is ${price + (profit / 100 * price) + 12.5 / 100 * price}`)
        break;

    case 'Madhya Pradesh':
        console.log(`The Price of item in Madhya Pradesh is ${price + (profit / 100 * price) + 10 / 100 * price}`)
        break;

    case 'Bihar':
        console.log(`The Price of item in Uttar Pradesh is ${price + (profit / 100 * price) + 15 / 100 * price}`)
        break;

    case 'Karnataka':
        console.log(`The Price of item in Uttar Pradesh is ${price + (profit / 100 * price) + 10 / 100 * price}`)
        break;

    default:
        price = 100;
}

// Find the minimum marks required to qualify for an entrance examination, given 
// the category of the student as follows and maximum marks as 500.

let examination = "Entrance_exam"
let marks = 500
switch (examination) {
    case 'OBC':
        console.log(`The minimum marks for obc student is ${65 / 100 * marks}`)
        break;

    case 'SC':
        console.log(`The minimum marks for sc student is ${55 / 100 * marks}`)
        break;

    case 'General':
        console.log(`The minimum marks for general student is ${75 / 100 * marks}`)
        break;
}

// Given the manufacturing year of the vehicle, find if the vehicle registration is valid or not. The manufacturing year is 2010, and registration is valid for 15 years.

const today = new Date
mafgYear = 2010
const newvech = new Date().getFullYear() - mfgYear < 15 ? true : false
console.log(`the status of registration vechice is ${newvech}`)


//Given the pulse rate range for stable patient, find out if the patient with pulse rate as 100 is stable or not.


let pulse_rate = 90
let status = pulse_rate > 65 & pulse_rate <= 100 ? true : false



const canMarry_3 = (age, gender) => {
    if (age > 18 && gender == "female") {
        return true

    }
    else if (age > 21 && gender == "male") {
        return true

    }
    else {
        return false

    }
}

// Given students marks in a subject, print out the grade as per the below rules.

// a. marks between 90 - 100 = Grade A

// b. marks between 70 - 90 = Grade B

// c. marks between 50 - 70 = Grade C

// d. marks below 50 = Grade C

const find_avgMarks = (maths, physics, chemistry) => (maths + physics + chemistry) / 3;


const getGrade_1 = (marks) => {
    if (marks > 90 && marks < 100) {
        return 'A'

    }
    else if (marks > 70 && marks <= 90) {
        return 'B'

    }
    else if (marks > 50 && marks <= 70) {
        return 'C'

    }
    else {
        return 'D'

    }
}

// JAVASCRIPT Array

// Array at
let fruits = ["apple", "banana", "orange"]
let index = 2;
console.log
console.log(`using an index ${index} the item is returned ${fruits.at(index)}`)

// result
// using an index 2 the item is returned orange
// this is help us to find the element with the help of index

// JavaScript Demo: Array.concat()
const fruits_1 = ["grapes", "pineapple"]
fruits.concat(fruits_1)

// // result
// [ 'apple', 'banana', 'orange', 'grapes', 'pineapple' ]
// this is help us t0 add two arrays

// array constructor


// array copywitihin
let fruits = ["apple", "banana", "orange"]
fruits.copyWithin(0, 2)

// // result
// [ 'orange', 'banana', 'orange' ]
// it help us to copy the
// fruits.copyWithin(target,start)

// Array every
const ages = [32, 34, 45, 32]
function checkage(ages) {
    return ages > 18;
}
ages.every(checkage)

// // result
// its return true
// beacause it check every element

// array fill
fruits_1.fill("banana", 1)

// result
// [ 'apple', 'banana' ]
// its help us fill the value of array

// Array filter
const fruit = ["orange", "banana", "apple"]
fruit.filter(x => x.length > 5)

// result
// [ 'orange', 'banana' ]

// Array find
fruit.find(x => x = 'o')

// results
// 'orange'
// its is used find out the word  of the elements

// array findIndex
const array = [12, 32, 321, 41, 12];
const isLarger = (element) => element > 13;
console.log(array.findIndex(isLarger))

// results
// 1
// it is used to find the index of the result

// array findLastIndex
const array = [12, 32, 321, 41, 12];
const isSmaller = (element) => element > 40
console.log(array.findLastIndex(isSmaller))

// result
// 3
// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
//  If no elements satisfy the testing function, -1 is returned.

// array Flat
const number = [1, 2, 3, [4, 6, 4]]
console.log(number.flat())

// result
// [ 1, 2, 3, 4, 6, 4 ]
// A new array with the sub-array elements concatenated into it.


// array flatMap
const found = number.flatMap(num => num)
console.log(found)

// result
// [1, 2, 3, 4, 6, 4]
// A new array with each element being the result of the callback function and found by a depth of 1.

// array foreach
const fruits = ['apple', 'banana', 'orange']
fruits.forEach(x => console.log(x))

// result
// its print line by line
// apple
// banana
// orange

// array indexOf
fruits.indexOf('apple')

// results
// it help us to find the value of the index 
// 0

// array join
fruits.join()

// result
// 'apple,banana,orange'
// A string with all array elements joined. If arr.length is 0, the empty string is returned.

// array keys
const array = [12, 32, 321, 41, 12];
const iterator = array.keys()
    (const key of iterator) {
    console.log(key)
}

// results
// 0
// 1
// 2
// 3
// 4
// The keys() method returns an Array Iterator object with the keys of an array.

// The keys() method does not change the original array.


// array lastIndex
const fruits = ['apple', 'banana', 'orange']
fruits.lastIndexOf("orange")

results
2

// array pop
fruits.pop()

// results
// The pop() method removes the last element from an array and returns that value to the caller. 
// If you call pop() on an empty array, it returns
// 'orange'

// array push
fruits.push("kiwi", "lemon")

// results
// 5
// The new length of the array.

// array includes
fruits.includes('banana')

// result
// A boolean value which is true if the value searchElement is found within the array 
// (or the part of the array indicated by the index fromIndex, if specified).
// true


// array map
const number = [175, 20, 25]
number.map(x => x * 2)

// results
// A new array with each element being the result of the callback function.
// [ 350, 40, 50 ]

// array reverse
fruits.reverse()

// results
// the reference to the original array, now reversed.
// [ 'lemon', 'kiwi', 'kiwi', 'banana', 'apple' ]

// array shift
fruits.shift()

// results
// The pop() method has similar behavior to shift(), but applied to the last element in an array.
// 'lemon'

// array slice
const number = [175, 20, 25]
number.slice(1)

// results
// The slice() method is a copying method.
// [ 20, 25 ]


// array some
const number = [175, 20, 25]
const even = (element) => element % 2 == 0;
console.log(number.some(even))

// results
// A function to execute for each element in the array. It should return a truthy to indicate the element passes the 
// test, and a falsy value otherwise
// true

// array sort
const fruits = ['apple', 'banana', 'kiwi', 'kiwi']
fruits.sort()

// results
// The sort() method preserves empty slots. If the source array is sparse, the empty slots are moved to the end of the array, 
// and always come after all the undefined.
// [ 'apple', 'banana', 'kiwi', 'kiwi' ]


// array splice
const fruits = ['apple', 'banana', 'lemon', 'kiwi']
fruits.splice(1, 2)

// results
// At position 1, remove 2 items:
// [ 'banana', 'lemon' ]

// array toString
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());

// results
// 1,2,a,1a
// The toString() method returns a string representing the specified array and its elements.

// array unshift
number = [175, 20, 25]
console.log(number.unshift(4, 5))
console.log(number)

// results
// The elements to add to the front of the arr.

// [ 4, 5, 175, 20, 25 ]

// array values
const number = [4, 5, 175, 20, 25]
const itera = number.values();
for (const values of iterator) {
    console.log(values)
}

// results
// The values() method is generic.It only expects the this value to have a
//  length property and integer - keyed properties.
// 4
// 5
// 175
// 20
// 25

// reduce reduceright tolocalstring  entries constructor

