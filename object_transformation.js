const customers = [
  { name: 'John', purchases: 4, loyaltyPoints: 100 },
  { name: 'Jane', purchases: 6, loyaltyPoints: 150 },
  { name: 'David', purchases: 7, loyaltyPoints: 200 },
  { name: 'Emily', purchases: 3, loyaltyPoints: 80 },
];

function doubleLoyaltyPoints(customers) {
  return customers.map((customer) => {
    if (customer.purchases > 5) {
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    }
    return customer;
  });
}

const updatedCustomers = doubleLoyaltyPoints(customers);
console.log(updatedCustomers);
