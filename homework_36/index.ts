// ЗАВДАННЯ 1

const sumArray = (numbers: number[]): number => {
    return numbers.reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([]));



// ЗАВДАННЯ 2

interface User {
    name: string
    age: number
    isActive: boolean
}

const createUser = (name: string, age: number, isActive: boolean = true): User => {
    return { name, age, isActive };
}

const newUser = createUser("Анна", 25, true);
console.log(newUser);



// ЗАВДАННЯ 3

enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

const getOrderStatus = (status: OrderStatus): string => {
    switch (status) {
        case OrderStatus.Pending:
            return "Замовлення очікує на обробку";
        case OrderStatus.Shipped:
            return "Замовлення було відправлено";
        case OrderStatus.Delivered:
            return "Замовлення доставлено";
        case OrderStatus.Cancelled:
            return "Замовлення скасовано";
        default:
            throw new Error("Невідомий статус замовлення");
    }
}

console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));