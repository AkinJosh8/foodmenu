


const deliveryBtn = document.getElementById('deliveryBtn');
const pickupBtn = document.getElementById('pickupBtn');

//Click delivery button
deliveryBtn.addEventListener('click', () => {
    deliveryBtn.classList.add('active');
    pickupBtn.classList.remove('active');
});

//Click pickup button
pickupBtn.addEventListener('click', () => {
    pickupBtn.classList.add('active');
    deliveryBtn.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const subtotalElement = document.getElementById("summary-subtotal");
    const deliveryElement = document.getElementById("summary-delivery");
    const totalElement = document.getElementById("summary-total");
    const serviceElement = document.getElementById("summary-service")
    const deliveryBtn = document.getElementById("deliveryBtn");
    const pickupBtn = document.getElementById("pickupBtn");

    let deliveryFee = 1500;
    const serviceFee = 200;
    const tax = 0;

    function calculateSummary() {
        // 1. Calculate Subtotal from cart items
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // 2. Calculate Final Total
        const total = subtotal + deliveryFee + serviceFee + tax;

        // 3. Update UI with formatted Nigerian Naira
        subtotalElement.textContent = `#${subtotal.toLocaleString()}`;
        deliveryElement.textContent = `#${deliveryFee.toLocaleString()}`;
        serviceElement.textContent = `#${serviceFee.toLocaleString()}`;
        totalElement.textContent = `#${total.toLocaleString()}`;
    }

    // Toggle logic for Delivery 
    deliveryBtn.addEventListener("click", function () {
        deliveryFee = 1500;
        this.classList.add("active");
        pickupBtn.classList.remove("active");
        calculateSummary();
    });

    // Toggle logic for Pick up
    pickupBtn.addEventListener("click", function () {
        deliveryFee = 0; // No delivery fee for pick up
        this.classList.add("active");
        deliveryBtn.classList.remove("active");
        calculateSummary();
    });

    // Run calculation on load
    calculateSummary();
});