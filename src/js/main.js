import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");

const listElement = document.querySelector(".product-list");

const productList = new ProductList("tents", dataSource, listElement);

productList.init();

// COUNTING ITEMS IN CART

function countElements() {
    const items = JSON.parse(localStorage.getItem("so-cart")) || [];
    const countItems = items.length;

    if (countItems != 0) {
        document.querySelector("#cart-count").innerHTML = `Qty: ${countItems}`;
    }

    else {
        document.querySelector("#cart-count").innerHTML = `Qty: 0`;
    }
}

countElements();