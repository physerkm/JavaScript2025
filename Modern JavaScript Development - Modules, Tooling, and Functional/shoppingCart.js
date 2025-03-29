// Exporting Module
console.log('Exporting Module');

const shoppingCart = 20;
export const cart = [];

export const addToCart = function (product, quantitiy) {
  cart.push({ product, quantitiy });
  console.log(`${quantitiy} ${product} added to cart`);
};

const totalPrice = 253;
const totalQuantity = 37;

export { totalPrice, totalQuantity as tq };

export default function (product, quantitiy) {
  cart.push({ product, quantitiy });
  console.log(`${quantitiy} ${product} added to cart`);
}
