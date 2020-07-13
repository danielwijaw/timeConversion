const readline = require("readline");
const timeConversion = require("./timeConversion");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello this is application for Time Conversion");
console.log("# Noted: Sample Input 07:05:45PM");

rl.question("Insert 12 Hours Format (Sample input: 07:05:45PM) : ", function(time) {
    const returnTime = timeConversion.timeConversion(time);
    console.log(returnTime);
    rl.close();
});
rl.on("close", function() {
    process.exit(0);
});