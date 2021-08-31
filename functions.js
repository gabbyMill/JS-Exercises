const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
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

function median (array) {
// MDN: callback function for sort method:
let sorted = array.sort(function(a, b) {
    return a - b;
});
    // if even numbered then median is average of two medians:
    if (array.length % 2 === 0) {
        return (sorted[sorted.length/2] + sorted[sorted.length/2 - 1])/2
    }
    else {
        return sorted[Math.floor(sorted.length/2)]
    }
}

console.log(`Stats:
    Range: ${range(grades)}
    Half Range: ${halfRange(grades)}
    Median: ${median(grades)}`);

    // I put Half Range before median because slice alters the original array;
    // If I wanted the orignal to stay the same I'd have done something like let newArr = array; and worked with newArr

