// The cartBase storage functions
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//You update navbar
function updateCartCount() {
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const countElement = document.getElementById("cart-count");

  if (countElement) {
    countElement.textContent = totalItems;
  }
}



// This renders the cart 
function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-container");
  const totalElement = document.getElementById("cart-total");
  

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "0";
    return;
  }

  let total = 0;

  

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    
    cartItem.innerHTML = `<div class="cart-details">
        <img src="${item.image}" alt="${item.name}" class="cart-details-img">
        <h4 class="item-info">${item.name}</h4>
        <div class="cart-controls">
          <button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
        <p class="cart-price">#${(item.price * item.quantity).toLocaleString()}</p>
        <button class="btn-remove" onclick="removeItem('${item.id}')"> X </button>
      </div>`
      ;

    container.appendChild(cartItem);
  });

  totalElement.textContent = total.toLocaleString();
}


// Change quantity
function changeQuantity(id, amount) {
  let cart = getCart();

  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity += amount;
      if (item.quantity < 1) item.quantity = 1;
    }
    return item;
  });

  saveCart(cart);
  renderCart();
  updateCartCount();
}


function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);

  saveCart(cart);
  renderCart();
  updateCartCount();
}


document.addEventListener("DOMContentLoaded", function () {
  renderCart();
  updateCartCount();
});


