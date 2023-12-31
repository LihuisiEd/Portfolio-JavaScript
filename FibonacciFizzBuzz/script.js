function generateFibonacci() {
    const input = document.getElementById('fibonacciInput');
    const container = document.getElementById('fibonacciContainer');
    const num = parseInt(input.value);

    if (!isNaN(num) && num > 0) {
        const fibonacciArray = [0, 1];
        const fizzBuzzArray = [];
        for (let i = 2; i < num; i++) {
            fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        }
        for (let i = 0; i < num; i++) {
            let currentNumber = fibonacciArray[i];
            let result;

            if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
                result = 'FizzBuzz';
            } else if (currentNumber % 3 === 0) {
                result = 'Fizz';
            } else if (currentNumber % 5 === 0) {
                result = 'Buzz';
            } else {
                result = currentNumber;
            }

            fizzBuzzArray.push(result);
        }

        container.innerHTML = '';
        for (let i = 0; i < num; i++) {
            const button = document.createElement('button');
            button.className =
                'transition w-full h-36 sm:w-36 p-2 my-4 sm:m-2 sm:m-0 text-xl sm:hover:translate-y-6 sm:hover:translate-x-6 ease-in-out sm:rounded-lg shadow-xl font-bold sm:hover:rotate-12';

            if (fizzBuzzArray[i] === 'Fizz') {
                button.style.background = 'linear-gradient(to right, #ff9a8b, #ff6a88)';
            } else if (fizzBuzzArray[i] === 'Buzz') {
                button.style.background = 'linear-gradient(to right, #91E3FF, #64ECC9)';
            } else if (fizzBuzzArray[i] === 'FizzBuzz') {
                button.style.background = 'linear-gradient(to right, #ff5252, #fbd45b)';
            } else {
                button.style.background = 'linear-gradient(to right, #E2E2E2, #D3D3D3)';
            }

            button.textContent = fizzBuzzArray[i];
            container.appendChild(button);
        }
    } else {
        container.innerHTML = 'Please enter a valid positive number.';
    }
}
