import faker from "faker";

export const  mount = (el) => {
  let products = "";
  let pdtName = "";

  for (let i = 0; i < 10; i++) {
    pdtName = faker.commerce.productName();
    products += `<div>${pdtName}</div>`;
  }

  console.log(products);
  el.innerHTML = products;
};

//app should run in isolation
if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if(el) {
    mount(el);
  }
}

// app should run inside container app