// script.js

// Function to append clicked button value to the display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
  try {
    const display = document.getElementById('display');
    display.value = eval(display.value);  // eval is used to evaluate the arithmetic expression
  } catch (error) {
    display.value = 'Error';
  }
}
