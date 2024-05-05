#!/usr/bin/env node
import inquirer from "inquirer";
function startCountdown(duration) {
    const startTime = new Date().getTime();
    const endTime = startTime + duration * 60 * 1000;
    const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = endTime - currentTime;
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            console.log("Time's up!");
            return;
        }
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        console.clear();
        console.log(`Time remaining: ${minutes} minutes ${seconds} seconds`);
    }, 1000);
}
async function main() {
    const answer = await inquirer.prompt({
        type: "number",
        name: `duration`,
        message: "Enter the duration of the countdown in minutes: ",
        validate: function (input) {
            if (isNaN(input) || input <= 0) {
                return "Invalid duration. Please enter a positive number.";
            }
            else {
                return true;
            }
        },
    });
    startCountdown(answer.duration);
}
main();
