// Generate random order ID
function generateOrderId() {
  const random = Math.floor(Math.random() * 1000000);
  return "#123RGR" + random;
}

document.addEventListener("DOMContentLoaded", function () {
  let orderId = localStorage.getItem("orderId");

  if (!orderId) {
    orderId = generateOrderId();
    localStorage.setItem("orderId", orderId);
  }

  document.getElementById("order-id").textContent = orderId;

  // Clear cart completely
  localStorage.removeItem("cart");
});

// Track order button
function trackOrder() {
  alert("Tracking feature coming soon ");
}

// Generate receipt
function generateReceipt() {
  alert("Receipt generated successfully");
}