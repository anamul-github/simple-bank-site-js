function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    input.value = '';
    return inputValue;
}



function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const element = parseFloat(textElementString);
    return element;
}

function setTextElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}