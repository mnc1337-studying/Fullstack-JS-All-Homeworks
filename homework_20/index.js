// ЗАВДАННЯ №1

const userObj = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 27,
};

console.log(userObj);


// ЗАВДАННЯ №2

userObj.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(userObj.fullName());


// ЗАВДАННЯ №3

function defUpperStr(text) {
    return (text || "default text").toUpperCase();
};

console.log(defUpperStr('My text'));
console.log(defUpperStr());


// ЗАВДАННЯ №4

function evenFn(n) {
    let evenNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    return evenNumbers;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));


// ЗАВДАННЯ №5

function weekFn(n) {
    let dayOfWeek;
    switch (n) {
        case 1:
            dayOfWeek = "Понеділок";
            break;
        case 2:
            dayOfWeek = "Вівторок";
            break;
        case 3:
            dayOfWeek = "Середа";
            break;
        case 4:
            dayOfWeek = "Четвер";
            break;
        case 5:
            dayOfWeek = "П'ятниця";
            break;
        case 6:
            dayOfWeek = "Субота";
            break;
        case 7:
            dayOfWeek = "Неділя";
            break;
        default:
            dayOfWeek = null;
            break;
    }

    return dayOfWeek;
}

console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));


// ЗАВДАННЯ №6

function ageClassification(n) {
    return n < 1 ? null :
        n <= 24 ? "Дитинство" :
            n <= 44 ? "Молодість" :
                n <= 65 ? "Зрілість" :
                    n <= 75 ? "Старість" :
                        n <= 90 ? "Довголіття" :
                            n <= 122 ? "Рекорд" :
                                null;
}

console.log('    -1 :', ageClassification(-1));
console.log('     0 :', ageClassification(0));
console.log('     1 :', ageClassification(1));
console.log('    24 :', ageClassification(24));
console.log(' 24.01 :', ageClassification(24.01));
console.log('    44 :', ageClassification(44));
console.log(' 44.01 :', ageClassification(44.01));
console.log('    65 :', ageClassification(65));
console.log('  65.1 :', ageClassification(65.1));
console.log('    75 :', ageClassification(75));
console.log(' 75.01 :', ageClassification(75.01));
console.log('    90 :', ageClassification(90));
console.log(' 90.01 :', ageClassification(90.01));
console.log('   122 :', ageClassification(122));
console.log('122.01 :', ageClassification(122.01));
console.log('   150 :', ageClassification(150));


// ЗАВДАННЯ №7

function oddFn(n) {
    let oddNumbers = [];
    let i = 1;
    while (i <= n) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
        i++;
    }

    return oddNumbers;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));


// ЗАВДАННЯ №8

function mainFunc(a, b, callback) {
    if (typeof callback !== "function") {
        return false;
    }

    return callback(a, b);
}

const cbRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cbPow = (num, pow) => {
    return Math.pow(num, pow);
}

const cbAdd = (a, b) => {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));