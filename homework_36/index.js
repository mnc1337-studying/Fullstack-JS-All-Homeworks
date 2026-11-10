"use strict";
// ЗАВДАННЯ 1
const sumArray = (numbers) => {
    return numbers.reduce((sum, currentValue) => sum + currentValue, 0);
};
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([]));
const createUser = (name, age, isActive = true) => {
    return { name, age, isActive };
};
const newUser = createUser("Анна", 25, true);
console.log(newUser);
// ЗАВДАННЯ 3
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
const getOrderStatus = (status) => {
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
};
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
