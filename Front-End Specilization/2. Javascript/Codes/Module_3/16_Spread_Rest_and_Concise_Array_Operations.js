// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First restaurent: ${first}`);
console.log(`Second restaurent: ${second}`);
console.log(`Third restaurent: ${third}`);
console.log(`Remaining restaurent: ${remaining}`);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    for (let i in args) {
        console.log(args[i])
    }
}
unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");


// Part 3: Merge Arrays
const favoriteBaseballTeams = ["Yankees", "Mets", "Dodgers", "Giants", "Red Sox", "Cubs"];
const favoriteFootballTeams = ["Patriots", "Giants", "Jets", "Eagles", "Steelers", "Cowboys"];

const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
console.log("Favorite Teams :", favoriteTeams)
