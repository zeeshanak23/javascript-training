

// Divide two number
let r1 = 100 / 4;
let r2 = 145 / 5;
let r3 = 78 / 7;
let r4 = 89 / 9;
let r5 = 56 / 2;
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)


// Multiply two number
r1 = 35 * 5;
r2 = 67 * 5;
r3 = 47 * 3;
r4 = 67 * 6
r5 = 67 * 6
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)

// Substract two numbers
r1 = 100 - 5;
r2 = 35 - 9;
r3 = 56 - 17;
r4 = 78 - 61;
r5 = 78 - 67;

console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)

// Find remmainder of two numbers
r1 = 5 % 4;
r2 = 11 % 5;
r3 = 78 % 7;
r4 = 67 % 5;
r5 = 90 % 8;
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)

// Divide and then multiply
r1 = 24 / 2 * 5;
r2 = 24 / 12 * 10;
r3 = 22 / 2 * 2;
r4 = 90 / 5 * 10;
r5 = 77 / 7 * 8;
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)

// Multiply and then substract
r1 = 90 * 5 - 100;
r2 = 87 * 2 - 50;
r3 = 900 * 2 - 700;
r4 = 355 * 5 - 200;
r5 = 90 * 5 - 10;
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)



// Find square of numbers 2 - 10

r1 = 3 * 3
r1 = 4 * 4
r1 = 5 * 5
r1 = 6 * 6
r1 = 7 * 7
r1 = 8 * 8
r1 = 9 * 9
console.log(r1)


// Operator precedence
r1 = 2 ** 2
r1 = 2 ** 3
r1 = 2 ** 4
r1 = 2 ** 5
r1 = 2 ** 6
r1 = 2 ** 7
r1 = 2 ** 8
r1 = 2 ** 9
r1 = 2 ** 10
console.log(r1)



// ass 2.2
let x = 20;
x = 20 * 5;
x *= 10;

let b = 100;
b = 100 - 10;
b -= 50;

let c = 90;
c = 90 / 9;
c /= 2;

let d = 70;
d = 70 ** 2;
d **= 2;

let e = 70;
e = 70 + 10;
e += 20;

// ass 2.3
// using greater than operator with string
let compare = "hello" > "abcd"
console.log(compare)

// using less than operator with numbers
let numComp = 12 < 78
console.log(numComp)

// find all the number between 5 and 10
for (i = 6; i <= 9; i++) {
    console.log(i);
}

// find all the odd number between 10 and 100
for (i = 10; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}


// find even number between 10  and 30
for (i = 11; i <= 29; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


// find prime number between 5 and 50
for (i = 6; i <= 50; i++) {
    let divisorCount = 0;
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisorCount++;
        }
    }
    if (divisorCount == 2) {
        console.log(i)
    }
}

// find all the number divisible by 3and lie between 6 and 60
for (i = 7; i <= 59; i++) {
    if (i % 3 == 0) {

        console.log(i)
    }
}

// find all the number divisible by square root of 81 and lie between 10 and 100 
for (i = 10; i <= 100; i++) {
    if (i % 9 == 0) {
        console.log(i)
    }
}
