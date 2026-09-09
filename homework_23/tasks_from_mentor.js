// ЗАВДАННЯ №1

const phoneBook = new Map();
phoneBook.set("Оля", "050-111-22-33");
phoneBook.set("Іван", "067-444-55-66");
phoneBook.set("Марія", "093-777-88-99");

const findPhone = (name) => {
    if (phoneBook.has(name)) {
        return phoneBook.get(name);
    } else {
        return "Контакт не знайдено";
    }
};

console.log(findPhone("Іван"));
console.log(findPhone("Петро"));

const removeContact = (name) => {
    if (phoneBook.has(name)) {
        phoneBook.delete(name);
        return "Контакт видалено";
    } else {
        return "Такого контакту нема";
    }
};

console.log(removeContact("Оля"));
console.log(removeContact("Оля"));

const printAll = () => {
    for (const name of phoneBook.keys()) {
        console.log(`${name}: ${phoneBook.get(name)}`);
    }
};

printAll();





// ЗАВДАННЯ №2

const allowedCodes = new Set();

allowedCodes.add(101);
allowedCodes.add(205);
allowedCodes.add(333);

const checkCode = (code) => {
    if (allowedCodes.has(code)) {
        return "Доступ дозволено";
    } else {
        return "Доступ заборонено";
    }
};

console.log(checkCode(205));
console.log(checkCode(999));