
                                    //Problem
/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

                                //Rephrasing Problem
/* create a function that squares each number of the array passed to it and then adds them all up */

/* 
    Steps:

    1) check input:
        a) What to do if nothing is passed in
        b) what to do if array is empty
        c) What to do if array only has one item

    2) iterate through the array and square each item 
    3) now sum up the items in the array and return the total
*/

const squareSum = array => {
    if (array === []) {
        consoe.log(`No numbers to square and add`)
    } else if (array.length === 1) {
        return array[0] ** 2
    }


}


const numbers = []


console.log(squareSum(numbers))

console.log(9**2)

// Number of people on the bus --excited about this challenge