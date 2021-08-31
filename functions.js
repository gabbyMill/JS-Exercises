const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
const grades2 = [1,2,3,4,5,6,7,8,9];

function range (array) {
    return Math.max(...array) - Math.min(...array) // saw this possible with .apply as well but spread looks better   
}

function halfRange (array) {
    // Let's first split the grades into first and second half:
    // I've decided that if an array consists an odd number of indexes ill include the middle as the second half using Math.floor
    let secondHalf = array.slice(Math.floor(array.length/2))
    // this will store a copy of the second half of the array
    let answer = Math.max(...secondHalf) - Math.min(...secondHalf)
    return answer
}

