let totalPrice = 0;

function updateQuantity(element, action) {
    const quantityElement = element.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.innerText);

    if (action === 'increase') {
        quantity++;
    } else if (action === 'decrease' && quantity > 1) {
        quantity--;
    }

    quantityElement.innerText = quantity;
    updateTotalPrice();
}

function removeItem(element) {
    const item = element.parentElement.parentElement;
    item.remove();
    updateTotalPrice();
}

function toggleLike(element) {
    element.classList.toggle('active');
}

function updateTotalPrice() {
    const items = document.querySelectorAll('.item');
    totalPrice = 0;

    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        const price = parseFloat(item.getAttribute('data-price'));
        totalPrice += quantity * price;
    });

    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}
