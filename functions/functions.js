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

// Create an array `marks` that stores the marks of a student in all the subjects. Convert the this array of marks to an array of `grades` based on the following rule.
  
//     a. Grade 'A' for marks between 80 and 100
    
//     b. Grade B for marks between 60 and 80

//     c. Grade C for marks between 40 and 60

//     d. Grade 'D' for marks below 40