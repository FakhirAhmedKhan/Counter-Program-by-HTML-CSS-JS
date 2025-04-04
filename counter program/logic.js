// This is a simple counter program using JavaScript
// It allows the user to increment, decrement, and reset a counter value
const counterLabel = document.getElementById("Counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Initialize the counter value
let count = 0;

// Update the label with the initial count value
counterLabel.textContent = count;
incrementButton.addEventListener("click", () => {
  count++;
  counterLabel.textContent = count;
});

// Add event listeners to the buttons to handle clicks
decrementButton.addEventListener("click", () => {
  count--;
  counterLabel.textContent = count;
});

// Add event listener for the reset button
resetButton.addEventListener("click", () => {
  count = 0;
  counterLabel.textContent = count;
});

// Add event listeners for keyboard shortcuts
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    count++;
    counterLabel.textContent = count;
  } else if (event.key === "ArrowDown") {
    count--;
    counterLabel.textContent = count;
  } else if (event.key === "r" || event.key === "R") {
    count = 0;
    counterLabel.textContent = count;
  }
});
