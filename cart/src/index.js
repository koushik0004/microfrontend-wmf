import faker from 'faker';

const cart = `<div>${faker.datatype.number(1000)} products in my cart</div>`;

console.log(cart)
document.querySelector('#cart-div').innerHTML = cart;