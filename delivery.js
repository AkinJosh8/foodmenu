document.getElementById("delivery-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const address = document.getElementById("address").value.trim();
  const deliveryTime = document.getElementById("delivery-time").value;
  const instructions = document.getElementById("instructions").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!address || !deliveryTime || !phone) {
    alert("Please fill all required fields.");
    return;
  }

  const deliveryDetails = {
    address,
    deliveryTime,
    instructions,
    phone
  };

  // Save to localStorage
  localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails));

  alert("Delivery details saved successfully!");

  // Redirect to payment page
  window.location.href = "Payment.html";
});