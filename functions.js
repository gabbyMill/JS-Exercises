const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
const grades2 = [1,2,3,4,5,6,7,8,9];

function range (array) {
    return Math.max(...array) - Math.min(...array) // saw this possible with .apply as well but spread looks better   
}
