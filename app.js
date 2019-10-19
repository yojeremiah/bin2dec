// DOM Variables & RegEx
const binaryInput = document.querySelector('#binary-input');
const decimalOutput = document.querySelector('.decimal-output');
const errorMsg = document.querySelector('.error-msg');
const outputGroup = document.querySelector('.output-group');
const maxBitsInput = document.querySelector('.max-bits-input');
const maxBitsOutput = document.querySelector('.max-bits-output');
const maxBitsErrorOutput = document.querySelector('.max-bits-error');
var maxBits, regex, binaryPattern;
// const regex = `^[0-1]{0,${maxBits}}$`;
// const binaryPattern = new RegExp(regex);
// const binaryPattern = /^[0-1]{0,8}$/;

// Initialize page values & DOM elements
const init = () => {
  binaryInput.value = '';
  errorMsg.style.display = 'none';
  maxBitsInput.value = 8;
  maxBitsOutput.textContent = '8';
  maxBits = 8;
  regex = `^[0-1]{0,${maxBits}}$`;
  binaryPattern = new RegExp(regex);
};
init();

// Display error message to user
const throwError = () => {
  console.log('Error: Invalid input!');
  // Add error classes
  errorMsg.classList.add('display-error');
  binaryInput.classList.add('display-error');
  // Update DOM
  outputGroup.style.display = 'none';
  decimalOutput.textContent = '-';
  maxBitsErrorOutput.textContent = maxBits;
};

// Clear error CSS classes
const clearError = () => {
  // Remove CSS classes
  errorMsg.classList.remove('display-error');
  binaryInput.classList.remove('display-error');
  // Update DOM
  outputGroup.style.display = 'block';
};

// Process binary input & update input/output values
const processInput = () => {
  const userInput = binaryInput.value;
  // Clear any errors
  clearError();
  // Check if input field is empty
  if (userInput === '') {
    decimalOutput.textContent = '-';
  }
  // Display decimal number if input is valid
  else if (binaryPattern.test(Number(userInput))) {
    decimalOutput.textContent = parseInt(`${userInput}`, 2);
  }
  // Throw an error if invalid input
  else {
    throwError();
  }
};

// Event listener for max # of bits input
maxBitsInput.addEventListener('input', () => {
  // console.log(maxBitsInput.value);
  maxBitsOutput.textContent = maxBitsInput.value;
  maxBits = Number(maxBitsInput.value);
  regex = `^[0-1]{0,${maxBits}}$`;
  binaryPattern = new RegExp(regex);
  processInput();
});

// Event listener for binary input
binaryInput.addEventListener('keyup', processInput);
