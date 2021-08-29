
const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
// your code goes here:

const solutionA = (-1 * b + (b**2 - (4 * a * c ))**0.5) / (2 * a);
const solutionB = (-1 * b - (b**2 - (4 * a * c ))**0.5) / (2 * a);

// in case of 1 solution dont print the same one twice
if (solutionA !== solutionB) { console.log(solutionA, solutionB) }
    else if (solutionA) {console.log(solutionA);}
        else if (solutionB) {console.log(solutionB);}


