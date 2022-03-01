const displayResult = document.getElementById('num-output');
const displayInput = document.getElementById('num-input');
const clearButton = document.getElementById('clear');
const resultButton = document.getElementById('result');
const numericButtonsSection = document.getElementById('numkey');
const numericButtons = numericButtonsSection.children;



for (let i = 0; i < numericButtons.length; i++) {
    numericButtons[i].addEventListener('click', () => {
        let numValue = numericButtons[i].value;
        displayInput.value = displayInput.value + numValue;
    })
};

clearButton.addEventListener('click', () => {
    displayInput.value = "";
    displayResult.value = "";
})


