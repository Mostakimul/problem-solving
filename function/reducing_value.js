const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 20 },
  { quantity: 1, price: 15 },
  { quantity: 5, price: 5 },
];

function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
}

const totalValue = calculateTotal(items);
console.log(totalValue);
