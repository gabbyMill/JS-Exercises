// list of Formula 1 champions since the year 2000
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
let winners = {}

function countWin(driver) {
    // your code goes here
    if (winners.Hamilton === undefined) {
        winners.Hamilton = 0
    }
    if (winners.Vettel === undefined) {
        winners.Vettel = 0
    }
    if (winners.Räikkönen === undefined) {
        winners.Räikkönen = 0
    }
    if (winners.Alonso === undefined) {
        winners.Alonso = 0
    }
    if (winners.Rosberg === undefined) {
        winners.Rosberg = 0
    }
    if (winners.Schumacher === undefined) {
        winners.Schumacher = 0
    }
    if (winners.Button === undefined) {
        winners.Button = 0
    }
    if (driver === "Vettel") {winners.Vettel += 1}
    if (driver === "Schumacher") {winners.Schumacher += 1}
    if (driver === "Button") {winners.Button += 1}
    if (driver === "Rosberg") {winners.Rosberg += 1}
    if (driver === "Alonso") {winners.Alonso += 1}
    if (driver === "Räikkönen") {winners.Räikkönen += 1}
    if (driver === "Hamilton") {winners.Hamilton += 1}
}

formula1Champions.forEach(countWin)
console.log(winners);

// The above code calls the countWin function for each of the drivers in the list of champions.

