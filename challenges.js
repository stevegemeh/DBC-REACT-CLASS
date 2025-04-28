// Shopping Cart with Items
let cart = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 3 },
  { name: "Shoes", price: 50, quantity: 4 }
];

let subtotal = 0;
let totalQuantity = 0;

// Loop to calculate subtotal and total quantity
cart.forEach(item => {
  subtotal += item.price * item.quantity;
  totalQuantity += item.quantity;
});

// Determine discount based on total quantity
let discountRate = 0;
if (totalQuantity > 10) {
  discountRate = 0.2;
} else if (totalQuantity > 5) {
  discountRate = 0.1;
}

let discountAmount = subtotal * discountRate;
let finalTotal = subtotal - discountAmount;

console.log("Subtotal: $" + subtotal);
console.log("Discount Amount: $" + discountAmount);
console.log("Final Total: $" + finalTotal);
