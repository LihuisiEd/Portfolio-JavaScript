document.addEventListener('DOMContentLoaded', function () {
    const calculateTipButton = document.getElementById('calculateTip');
    const totalPaymentInput = document.getElementById('totalPayment');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const resultDiv = document.getElementById('result');

    calculateTipButton.addEventListener('click', function () {
        // Obtener los valores ingresados por el usuario
        const totalPayment = parseFloat(totalPaymentInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        // Validar que los valores sean números válidos
        if (isNaN(totalPayment) || isNaN(tipPercentage)) {
            resultDiv.textContent = 'Por favor, ingresa valores numéricos válidos.';
            return;
        }

        // Calcular la propina
        const tipAmount = (totalPayment * tipPercentage) / 100;

        // Mostrar el resultado
        resultDiv.textContent = `La propina a dejar es S/.${tipAmount.toFixed(2)}`;
    });
});
