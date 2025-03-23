// Export 
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
        `${quantity} ${product} added to cart (slipping cost is ${shippingCost})`
    );
};

// Import
const { addTocart } = require('./shoppingCart2')