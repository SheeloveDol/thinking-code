/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

const descendingOrder = num => {
    // filtering input 
    if (typeof num !== 'number') {
        return console.log(`Error 1: '${num}' is not a number`)
    } else if (num < 0) {
        console.log(`Error 2: '${num}' must be greater than 0`)
    } else if (num.length < 2) {
        return console.log(num)
    } 

    let largestPossibleNumber = [...num.toString()].map(str => parseInt(str)).sort((a, b) => b - a).join('')

    return console.log(largestPossibleNumber)
}

descendingOrder(237485)
descendingOrder('you')
descendingOrder(3)
descendingOrder(309)
descendingOrder(0)
descendingOrder(-1)



