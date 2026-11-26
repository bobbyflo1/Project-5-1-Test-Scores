"use strict";

// Function to calculate test scores
function calculateScores() {

    // Ask the user to enter test scores
    const entry = prompt("Enter test scores separated by commas:");

    // Check if the user leaves the answer blank or clicks Cancel
    if (entry === null || entry.trim() === "") {
        document.querySelector("#results").textContent =
            "No scores were entered.";
        return;
    }

    // Convert the entered scores into an array
    const scores = entry.split(",").map(Number);

    // Check if the entries are valid numbers
    if (scores.some(isNaN)) {
        document.querySelector("#results").textContent =
            "Please enter numbers only.";
        return;
    }

    // Find the lowest and highest scores
    const lowScore = Math.min(...scores);
    const highScore = Math.max(...scores);

    // Calculate the average score
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    // Display the results on the webpage
    document.querySelector("#results").innerHTML = `
        <p>Scores: ${scores.join(", ")}</p>
        <p>Low score: ${lowScore}</p>
        <p>High score: ${highScore}</p>
        <p>Average score: ${average.toFixed(1)}</p>
    `;
}

// Run the function
calculateScores();
