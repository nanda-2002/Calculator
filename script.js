function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}
