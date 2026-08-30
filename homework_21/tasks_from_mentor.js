// ЗАВДАННЯ №1

function getRectangleArea(width, height) {
    return width * height;
}

const number1 = getRectangleArea(3, 4);
const number2 = getRectangleArea(5, 9);
const number3 = getRectangleArea(6, 19);

console.log(number1);
console.log(number2);
console.log(number3);


// ЗАВДАННЯ №2

function applyDiscount(price, discount) {
    discount = (discount || 0)
    return price - (price * discount / 100);
}

console.log(applyDiscount(1500, 20));


// ЗАВДАННЯ №3

function greet(name) {
    function capitalize(str) {
        str = str.toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
    }

    return `Привіт, ${capitalize(name)}!`;
}

console.log(greet("аНДРіЙ"));