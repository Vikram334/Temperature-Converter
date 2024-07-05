document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.inp');
    const fromUnitSelect = document.querySelector('.tempa');
    const toUnitSelect = document.querySelector('.temp');
    const resultValue = document.querySelector('.converted');
    const resultUnit = document.querySelector('.converttemp');
    const convertButton = document.querySelector('.convertbtn');

    convertButton.addEventListener('click', function() {
        let value = parseFloat(inputField.value);
        let fromUnit = fromUnitSelect.value;
        let toUnit = toUnitSelect.value;
        let result;

        if (fromUnit === 'C' && toUnit === 'F') {
            result = (value * 9/5) + 32;
        } else if (fromUnit === 'C' && toUnit === 'K') {
            result = value + 273.15;
        } else if (fromUnit === 'F' && toUnit === 'C') {
            result = (value - 32) * 5/9;
        } else if (fromUnit === 'F' && toUnit === 'K') {
            result = (value - 32) * 5/9 + 273.15;
        } else if (fromUnit === 'K' && toUnit === 'C') {
            result = value - 273.15;
        } else if (fromUnit === 'K' && toUnit === 'F') {
            result = (value - 273.15) * 9/5 + 32;
        } else {
            result = value;
        }

        resultValue.textContent = result;
        resultUnit.textContent = toUnit;
    });
});