// Write a function that reverses strings passed to it
// ie: reverse(hello world) ==> 'dlrow olleh'

function reverseString(str) {
    if (str === '') {
        return console.log(str)
    } else if (typeof str !== 'string') {
        console.log('Error: We need a string as input')
        return `Sorry, only words are allowed`
    } 

    return console.log([...str].reverse().join(''))
}


reverseString('hello')
reverseString(123)
reverseString(['a', 'b', 'c'])
reverseString('')