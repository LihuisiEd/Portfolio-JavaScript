document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const calculatePriceButton = document.querySelector('.calculate-price');
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    let totalPrice = 0;
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-productName');
            const productPrice = parseFloat(this.getAttribute('data-productPrice'));
            const isAdded = this.classList.contains('added-to-cart');
            
            if (!isNaN(productPrice)) {
                if (!isAdded) {
                    this.classList.add('added-to-cart');
                    this.classList.add('bg-gray-300'); 
                    this.classList.add('hover:bg-gray-200'); 
                    this.innerText = "Remove from cart"
                    totalPrice += productPrice;
                } else {
                    this.classList.remove('added-to-cart');
                    this.classList.remove('bg-gray-300');
                    this.classList.remove('hover:bg-gray-200');
                    this.innerText = "Add to cart"
                    totalPrice -= productPrice;
                }
            } else {
                alert("Invalid product price.");
            }
        });
    });

    calculatePriceButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modalContent.textContent = `Total Price: S/.${totalPrice.toFixed(2)}`;
        modal.style.display = 'block';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
