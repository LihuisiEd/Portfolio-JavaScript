document.addEventListener("DOMContentLoaded", function () {
    const resultContainer = document.querySelector('.result-container p');
    const operationContainer = document.querySelector('.operation-container');
    const numberButtons = document.querySelectorAll('.number-container button');
    const operationButtons = document.querySelectorAll('.operation-container button');
    const calculateButton = document.querySelector('.calculate-button');
    const clearButton = document.querySelector('.result-container button');

    let currentOperation = '';

    numberButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (currentOperation.includes('=')) {
                currentOperation = button.innerText;
            } else {
                currentOperation += button.innerText;
            }
            updateResult();
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (currentOperation.trim() !== '' && !isNaN(currentOperation[currentOperation.length - 1])) {
                currentOperation += ` ${button.innerText} `;
                updateResult();
            }
        });
    });

    calculateButton.addEventListener('click', function () {
        try {
            const result = calculateExpression(currentOperation);
            currentOperation = `${currentOperation} ${result}`;
            updateResult();
        } catch (error) {
            currentOperation = 'Error';
            updateResult();
        }
    });

    clearButton.addEventListener('click', function () {
        currentOperation = '';
        updateResult();
    });

    function updateResult() {
        resultContainer.innerText = currentOperation;
    }

    function calculateExpression(expression) {
        const tokens = expression.split(' ');
        let result = parseFloat(tokens[0]);

        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const operand = parseFloat(tokens[i + 1]);

            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case 'x':
                    result *= operand;
                    break;
                case '/':
                    result /= operand;
                    break;
                default:
                    throw new Error('Operador no válido');
            }
        }

        return result;
    }
});