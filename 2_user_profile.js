let userName = "Salman khan";
let userAge = 19;
let isPremiumUser = true;
let userBio = null;
let userId = Symbol("userId");

let userAddress = {
    city: "Mumbai",
    country: "India"
};

let favoriteItems = ["Laptop", "Headphones", "Keyboard"];

function getUserGreeting() {
    return `Hello, ${userName}! Welcome back.`;
}

console.log(userName);
console.log(userAddress.city);
console.log(favoriteItems[2]);
console.log(getUserGreeting());
