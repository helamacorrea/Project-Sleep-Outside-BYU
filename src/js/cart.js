import { getLocalStorage } from "./utils.mjs";
import { calculateDiscountedPrice } from "./discountCalculator.mjs";
import discountList from "../public/discounts.json" assert { type: "json" };




function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  let discountedItems = new Map();

  if (cartItems && cartItems.length > 0) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");


    //makes a discount
    if (item.Id in discountList) {
      let percentage = discountList[item.Id] / 100;
      let discountPrice = calculateDiscountedPrice(cartItems.FinalPrice, percentage);

    }
    //calculates the total with FinalPrice of each one
    if (discountPrice != undefined) {
      const total = cartItems.reduce((sum, item) => sum + discountPrice, 0);
    }
    else { const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0); }



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

  if (discountPrice != undefined) {
    const displayPrice = `<p class="cart-card__price"><del>$${item.FinalPrice}</del> > $${discountPrice.toFixed(2)}</p>`;
  }
  else { displayPrice = `<p class="cart-card__price">$${item.FinalPrice}</p>` };

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
  ${displayPrice}
</li>`;

  return newItem;
}

renderCartContents();
