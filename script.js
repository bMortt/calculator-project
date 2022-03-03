// Reference to the DOM elements
const displayResult = document.getElementById('num-output');
const displayInput = document.getElementById('num-input');
const clearButton = document.getElementById('clear');
const resultButton = document.getElementById('result');
const numericButtonsSection = document.getElementById('numkey');
const numericButtons = numericButtonsSection.children; // Returns an HTMLCollection
const operatorsSection = document.getElementById('operators-keypad');
const operatorsButtons = operatorsSection.children; // Returns an HTMLCollection


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
for (let i = 0; i < (operatorsButtons.length - 1); i++) { // - 1 so it will leave the result button off, since we`re going to set it separatedly.
    operatorsButtons[i].addEventListener('click', () => {
        let opValue = operatorsButtons[i].value;
        displayInput.value = displayInput.value + opValue;
    })
};

// Here we have an eventListener for the Clear button, it will reset the values of both 
// of the Input and Output fields to blank.
clearButton.addEventListener('click', () => {
    displayInput.value = "";
    displayResult.value = "";
});

// Here we set our result button, we use an if/else statement to check if the
// displayInput field is empty (thus resulting in an 'undefined' result), and
// if it isn`t empty, it will return the evaluation of the displayInput values.
resultButton.addEventListener('click', () => {
    if (eval(displayInput.value) === undefined) {
        displayResult.value = "";
    } else {
    displayResult.value = eval(displayInput.value);
    }
});


