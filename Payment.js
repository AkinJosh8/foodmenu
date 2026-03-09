function calculateTotal() {
  const cart = getCart();

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const deliveryFee = subtotal > 0 ? 1500 : 0;   // example delivery fee
  const serviceFee = subtotal * 0.05;            // 5% service charge

  return subtotal + deliveryFee + serviceFee;
}

// Display total
document.addEventListener("DOMContentLoaded", function () {
  const total = calculateTotal();
  document.getElementById("payment-total").textContent = total.toLocaleString();
});

// Handle payment
document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const method = document.querySelector('input[name="method"]:checked').value;
  const cardNumber = document.getElementById("card-number").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (method === "card") {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill in your card details.");
      return;
    }
  }

  alert("Payment successful! 🎉");

  // Clear cart after payment
  localStorage.removeItem("cart");

  // Redirect to confirmation page
  window.location.href = "confirmation.html";
});