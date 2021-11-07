import faker from "faker";

let products = "";
let pdtName = "";

for (let i = 0; i < 10; i++) {
  pdtName = faker.commerce.productName();
  products += `<div>${pdtName}</div>`;
}

console.log(products);
document.querySelector("#dev-products").innerHTML = products;
