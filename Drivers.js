const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]
let winners = {};

function countWin(driver) {
    // your code goes here
    let driverName = driver;
    if (!winners.hasOwnProperty(driver)) {
        winners[driverName] = 0;
    }
    winners[driverName]++;
}
formula1Champions.forEach(countWin)
console.log(winners)