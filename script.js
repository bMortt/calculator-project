// Reference to the DOM elements
const displayResult = document.getElementById('num-output');
const displayInput = document.getElementById('num-input');
const clearButton = document.getElementById('clear');
const resultButton = document.getElementById('result');
const numericButtonsSection = document.getElementById('numkey');
const numericButtons = numericButtonsSection.children;
const operatorsSection = document.getElementById('operators-keypad');
const operatorsButtons = operatorsSection.children;

// Function that will solve the Math in the displayInput field
function solve(value) {
    let x = value;
    let y = eval(x);
    return y;
};

// For loop that will add the eventListeners to all the numeric buttons.
// I used the .children property on numericButtons, so we`d get an HTMLCollection
// returned, so we can treat it like an Array with an Index.
for (let i = 0; i < numericButtons.length; i++) {
    numericButtons[i].addEventListener('click', () => {
        let numValue = numericButtons[i].value;
        displayInput.value = displayInput.value + numValue;
    })
};

// For loop that will add the eventListeners to all the mathematical operators.
// I also used the .children property here for the same reason as the first for loop.
for (let i = 0; i < operatorsButtons.length; i++) {
    operatorsButtons[i].addEventListener('click', () => {
        let opValue = operatorsButtons[i].value;
        displayInput.value = displayInput.value + opValue;
    })
};

// Here we have an eventListener for the Clear button, it will reset the values of both 
// Input and Output fields to blank.
clearButton.addEventListener('click', () => {
    displayInput.value = "";
    displayResult.value = "";
});

// Here we use the solve() function we`ve created above to solve the mathematical input
// of the Input field and display it on the Output(Result) field.
resultButton.addEventListener('click', () => {
    displayResult.value = solve(displayInput.value);
})


// TO DO: 
//     - try to validate the inputs and find a way to format the input field to only
// accept 1 operator at a time.
//     - Style the calculator.