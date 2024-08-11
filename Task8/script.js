let resultInput;
let memory=0;

document.addEventListener('DOMContentLoaded', function() {
    resultInput = document.getElementById('result');

    document.addEventListener('keydown', function(event) {
        if (event.key >= '0' && event.key <= '9') {
            AppendNumber(event.key);
        } else if (['+', '-', '*', '/', '%','^'].includes(event.key)) {
            AppendOperator(event.key);
        } else if (event.key === 'Enter') {
            calculateResult();
        } else if (event.key === 'Escape') {
            clearResult();
        } else {
            alert('Only numbers are allowed');
        }
    });
});

function AppendNumber(number) {
    resultInput.value +=number;
}

function AppendOperator(operator) {
   resultInput.value += ' ' + operator + ' ';
}

function clearResult() {
    resultInput.value = '';
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value.replace(/[^-()\d/*+.]/g, ''));
    } catch {
        alert('Invalid expression');
    }
}

function memoryStore() {
    memory = eval(resultInput.value.replace(/ /g, ''));
}

function memoryRecall() {
    resultInput.value += memory;
}

function memoryClear() {
    memory = 0;
}


//testsuite

function runTests() {
    const results = [];
    let result;

    clearResult();
    AppendNumber('2');
    AppendOperator('+');
    AppendNumber('3');
    calculateResult();
    result = (resultInput.value === '5') ? 'Pass' : 'Fail';
    results.push(`Test 1: 2 + 3 = 5: ${result}`);

    clearResult();
    AppendNumber('10');
    AppendOperator('/');
    AppendNumber('2');
    calculateResult();
    result = (resultInput.value === '5') ? 'Pass' : 'Fail';
    results.push(`Test 2: 10 / 2 = 5: ${result}`);

    clearResult();
    AppendNumber('8');
    AppendOperator('*');
    AppendNumber('4');
    calculateResult();
    result = (resultInput.value === '32') ? 'Pass' : 'Fail';
    results.push(`Test 3: 8 * 4 = 32: ${result}`);

    clearResult();
    AppendNumber('9');
    AppendOperator('-');
    AppendNumber('5');
    calculateResult();
    result = (resultInput.value === '4') ? 'Pass' : 'Fail';
    results.push(`Test 4: 9 - 5 = 4: ${result}`);

    clearResult();
    AppendNumber('10');
    AppendOperator('%');
    AppendNumber('3');
    calculateResult();
    result = (resultInput.value === '1') ? 'Pass' : 'Fail';
    results.push(`Test 5: 10 % 3 = 1: ${result}`);

    clearResult();
    AppendNumber('10');
    memoryStore();
    clearResult()
    memoryRecall();
    result = (resultInput.value === '10') ? 'Pass' : 'Fail';
    results.push(`Test 6: M+ 10, MC recall 10: ${result}`);

    clearResult();
    AppendNumber('10');
    memoryStore();
    memoryClear();
    memoryRecall();
    result = (resultInput.value === '0') ? 'Pass' : 'Fail';
    results.push(`Test 7: MC clear memory: ${result}`);

    document.getElementById('test-results').innerHTML = results.join('<br>');
}
