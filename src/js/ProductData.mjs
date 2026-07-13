
//The seoncd part is the porcentage of discount for each product, the first part is the product id
const discounts= new Map([
  ["810NV", 25],
  ["848MJ", 10],
  ["541HM", 5],
  ["889PR", 20],
  ["665HD", 25],
  ["896MT", 15],
  ["893WV", 5],
  ["893WU", 30],
  ["730FX", 10],
  ["897XT", 30],
  ["20FWM", 5],
  ["195UK", 15],
  ["848JY", 10],
  ["665GX", 20]
]);
//The idea is to apply the discount only to the products with the ID
//And display it in card and in the product details

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
