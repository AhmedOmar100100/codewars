// my profile on code wars:

// problem 1 convert number to string
function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
    // return String(num)

}


// problem 2 convert boolean into string
function booleanToString(b) {
    //your code here
    // return String(b)
    // return b.toString()
    // return b ? 'true' : 'false'
    return `${b}`;
}


// problem 3 Very simple, given an integer or a floating-point number, find its opposite.
// function opposite(number) {
//     //your code here
//     return -number;
// }
// another solution using arrow function
const opposite = number => -number

// problem 4 This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
    return number % 2 == 0 ? number * 8 : number * 9
}


// problem 5 Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = -array[i];
    }
    return array;
}
// another solution
function invert2(array = [1, 2, -3, 5, 6, -7.2]) {
    return array.map(num => -num)
}
console.log(invert2());
