import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  if (cartItems && cartItems.length > 0) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    //calculates the total with FinalPrice of each one
    const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);

    const cartFooter = document.querySelector(".cart-footer");
    console.log(total);
    document.querySelector(".cart-total").innerHTML = `Total: $${total.toFixed(2)}`;
    cartFooter.classList.remove("hide");
  } else {
    //in case the cart is empty
    document.querySelector(".product-list").innerHTML = "";
    document.querySelector(".cart-footer").classList.add("hide");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

function countItems() {
  const items = JSON.parse(localStorage.getItem("so-cart")) || [];
  const countItems = items.length;

  if (countItems != 0) {
    document.querySelector("#itemsCount").innerHTML = `Quantity: ${countItems}`;
  }

  else {
    document.querySelector("#itemsCount").innerHTML = `Quantity: 0`;
  }
}

countItems();
