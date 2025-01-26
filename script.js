let memory = 0;

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculatePercentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function calculateReciprocal() {
    let display = document.getElementById('display');
    display.value = 1 / parseFloat(display.value);
}

function memoryStore() {
    memory = parseFloat(document.getElementById('display').value);
}

function memoryRecall() {
    document.getElementById('display').value += memory;
}

function memoryClear() {
    memory = 0;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteCharacter();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendCharacter(key);
    }
});
