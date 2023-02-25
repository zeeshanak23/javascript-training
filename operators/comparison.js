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


// reduce reduceright tolocalstring  entries constructor

