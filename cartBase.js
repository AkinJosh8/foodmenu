//To run when page loads
document.addEventListener("DOMContentLoaded", updateCartCount)


//load your cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

//Save your cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//Update the cart icon count
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

//Add to cart function
function addCart(product) {
  let cart = getCart();

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();
}

//Add event listeners to all + buttons

document.addEventListener("DOMContentLoaded", function () {

  // Attach event to all Add buttons
  document.querySelectorAll(".btn-add, .btn-add-circle").forEach(button => {

    button.addEventListener("click", function () {
        //article 
      const card = this.closest(".food-card, .compact-card");
      const image = card.querySelector("img").getAttribute("src")

      if (!card) return;
        //Declaring product variable
      const product = {
        id: card.dataset.id,
        name: card.dataset.name,
        price: parseFloat(card.dataset.price),
        image: card.querySelector("img").getAttribute("src")
      };

      addCart(product);
    });

  });

  updateCartCount();
});

