const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 20;
  const totalPrice = 253;
  const totalQuantity = 47;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("pencil", 15);
ShoppingCart2.addToCart("eraser", 11);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
