// ЗАВДАННЯ №1

class CalorieCalculator {
    constructor() {
        this.productsCalories = new Map();
    }

    addProduct(productName, productCalories) {
        this.productsCalories.set(productName, productCalories);
    }

    getProductCalories(productName) {
        if (this.productsCalories.has(productName)) {
            return this.productsCalories.get(productName);
        } else {
            return "Product not found";
        }
    }

    removeProduct(productName) {
        if (this.productsCalories.has(productName)) {
            this.productsCalories.delete(productName);
        } else {
            return "Product not found";
        }
    }
}

const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct('Apple', 52);
calorieCalculator.addProduct('Banana', 89);

console.log(calorieCalculator.getProductCalories('Apple'));
console.log(calorieCalculator.getProductCalories('Banana'));

calorieCalculator.removeProduct('Apple');
console.log(calorieCalculator.getProductCalories('Apple'));





// ЗАВДАННЯ №2

class UniqueUsernames {
    constructor() {
        this.uniqueUsernames = new Set();
    }

    addUser(username) {
        this.uniqueUsernames.add(username);
    }

    exists(username) {
        return this.uniqueUsernames.has(username);
    }

    count() {
        return this.uniqueUsernames.size;
    }
}

const uniqueUsernames = new UniqueUsernames();
uniqueUsernames.addUser('john_doe');
uniqueUsernames.addUser('jane_doe');
uniqueUsernames.addUser('john_doe');

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`);
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`);