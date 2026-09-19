var totalCartValue = 0;
const taxRate = 0.10;

function addToCart(itemPrice, discount) {
    let discountedPrice = itemPrice - discount;
    let finalPrice = discountedPrice + (discountedPrice * taxRate);

    totalCartValue += finalPrice;

    console.log(`Final Price of Item: ₹${finalPrice.toFixed(2)}`);
    console.log(`Total Cart Value: ₹${totalCartValue.toFixed(2)}`);
}
addToCart(1000, 100);
addToCart(2000, 200);