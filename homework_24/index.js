// ЗАВДАННЯ №1

console.log("ЗАВДАННЯ №1");

const queue = ['Аня', 'Богдан'];
queue.push("Віра");
queue.unshift("Гліб");

console.log(queue);
console.log(queue.length);



// ЗАВДАННЯ №2

console.log("\nЗАВДАННЯ №2");

const numbersTask2 = [10, 20, 30, 40];
const first = numbersTask2.shift();
const last = numbersTask2.pop();

const sum = first + last;

console.log(sum);
console.log(numbersTask2);



// ЗАВДАННЯ №3

console.log("\nЗАВДАННЯ №3");

const tasks = [
    { id: 1, title: "Прибрати в кімнаті", done: true },
    { id: 2, title: "Зробити домашнє завдання з математики", done: true },
];

tasks.push({ id: 3, title: "Купити хліб", done: false });
tasks.shift();

console.log(tasks);



// ЗАВДАННЯ №4

console.log("\nЗАВДАННЯ №4");

const usersTask4 = [
    { id: 1, name: 'Аня', age: 25 },
    { id: 2, name: 'Богдан', age: 17 },
    { id: 3, name: 'Віра', age: 32 },
];

const addUser = (users, name) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push({id: newId, name});
    return users;
};

console.log(addUser(usersTask4, "Артем"));



// ЗАВДАННЯ №5

console.log("\nЗАВДАННЯ №5");

const numbersTask5 = [3, 8, 12, 5, 20];

const findNumberGreaterThan10 = (numbers) => {
    for (const number of numbers) {
        if (number > 10) {
            return number;
        }
    }
};

console.log(findNumberGreaterThan10(numbersTask5));



// ЗАВДАННЯ №6

console.log("\nЗАВДАННЯ №6");

const animalsTask6 = ['кіт', 'собака', 'пес', 'ведмідь'];

const animalsLongerThan5 = animalsTask6.find(animal => animal.length > 5);
console.log(animalsLongerThan5);



// ЗАВДАННЯ №7

console.log("\nЗАВДАННЯ №7");

const numbersTask7 = [4, 0, -2, 7, -9];

const findNegativeNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            return numbers[i];
        }
    }
    return "Від'ємних немає";
};


console.log(findNegativeNumber(numbersTask7));



// ЗАВДАННЯ №8

console.log("\nЗАВДАННЯ №8");

const usersTask8 = [
    { id: 1, name: 'Аня', age: 25 },
    { id: 2, name: 'Богдан', age: 17 },
    { id: 3, name: 'Віра', age: 32 },
];

const userId2 = usersTask8.find(user => user.id === 2);
console.log(userId2.name);



// ЗАВДАННЯ №9

console.log("\nЗАВДАННЯ №9");

const getUserName = (users, id) => {
    for (const user of users) {
        if (user.id === id) {
            return user.name;
        }
    }
    return "Невідомий";
};

console.log(getUserName(usersTask8, 3));



// ЗАВДАННЯ №10

console.log("\nЗАВДАННЯ №10");

const productsTask10 = [
    { name: 'Ноутбук', price: 30000, inStock: true },
    { name: 'Миша', price: 800, inStock: false },
    { name: 'Клавіатура', price: 2500, inStock: false },
];


const findProductNotInStock = (products) => {
    for (const product of productsTask10) {
        if (product.inStock === false) {
            return product.name;
        }
    }
};

console.log(findProductNotInStock(productsTask10));



// ЗАВДАННЯ №11

console.log("\nЗАВДАННЯ №11");

const animalsTask11 = ['кіт', 'собака', 'кінь', 'миша', 'корова'];

const animalsFromK = animalsTask11.filter(animal => animal.startsWith("к"));
console.log(animalsFromK);



// ЗАВДАННЯ №12

console.log("\nЗАВДАННЯ №12");

const numbersTask12 = [2, 5, 2, 3, -7, -1, 2];

const removeAll = (array, value) => {
    const resultArray = [];
    for (const item of array) {
        if (item !== value) {
            resultArray.push(item);
        }
    }

    return resultArray;
};

console.log(removeAll(numbersTask12, 2));



// ЗАВДАННЯ №13

console.log("\nЗАВДАННЯ №13");

const productsTask13 = [
    { name: 'Ноутбук', price: 30000, inStock: true },
    { name: 'Миша', price: 800, inStock: false },
    { name: 'Клавіатура', price: 2500, inStock: true },
    { name: 'Килимок', price: 300, inStock: true },
];


const productsUnder5000 = productsTask13.filter(product => product.inStock && product.price < 5000);
console.log(productsUnder5000);



// ЗАВДАННЯ №14

console.log("\nЗАВДАННЯ №14");

const numbersTask14 = [1, 2, 3, 4];

const numbersSquares = numbersTask14.map(number => number ** 2);
console.log(numbersSquares);



// ЗАВДАННЯ №15

console.log("\nЗАВДАННЯ №15");

const animalsTask15 = ['кіт', 'собака', 'пес'];

const animalsLengths = animalsTask15.map(animal => animal.length);
console.log(animalsLengths);



// ЗАВДАННЯ №16

console.log("\nЗАВДАННЯ №16");

const currencies = [100, 250];

const currenciesModified = currencies.map(currency => `${currency} грн`);
console.log(currenciesModified);



// ЗАВДАННЯ №17

console.log("\nЗАВДАННЯ №17");

const usersTask17 = [
    { id: 1, name: 'Аня', age: 25 },
    { id: 2, name: 'Богдан', age: 17 },
];

const usersNames = [];

for (const user of usersTask17) {
    usersNames.push(user.name);
}

console.log(usersNames);