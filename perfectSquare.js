// Next Perfect Square

// You might know some pretty large perfect squares. But what about the NEXT one?
// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// For example:
// perfectSquare(9) // should return 16 (3x3=9, 4x4=16)
// perfectSquare(289) // should return 324 (17x17=289 18x18=324)
// perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)

//find sqrt
//determine if sqrt is integer
//increment sqrt +1
//square new number

let number = 1521

function nextPerfectSquare(number) {
    if (Math.sqrt(number) % 1 === 0) {    
        return (Math.sqrt(number) + 1) ** 2
    } else {
        return -1
    }
}
console.log(nextPerfectSquare(number))


function nextPerfectSquare1(number) {
    if (Math.sqrt(number) % 1 === 0) {    
        return (Math.sqrt(number) * 2 + 1 + number)
    } else {
        return -1
    }
}
console.log(nextPerfectSquare1(number))


function perfectSquare(num) {
    let sqrt = Math.sqrt(num)
    if (Number.isInteger(sqrt)){
        return (sqrt + 1)  2
    }
    return -1
}
console.log(perfectSquare(16))


const perfectSquare2 = num => Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1)  2: -1
console.log(perfectSquare2(2))