import faker from 'faker';

export const mount = (el) => {
  const cart = `<div>${faker.datatype.number(1000)} products in my cart</div>`;

  console.log(cart)
  el.innerHTML = cart;
};

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-div');

  if(el) {
    mount(el);
  }
}