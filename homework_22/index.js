// ЗАВДАННЯ 1

const counter = (function() {
    let count = 0;
    
    return function(n) {
        if (n !== undefined) {
            count = n;
            if (n === 0) {
                return count;
            }
        }
        return count++;
    };
})();

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());


// ЗАВДАННЯ 2

const counterFactory = (function () {
    let count = 0;

    return {
        value(n) {
            if (n !== undefined) {
                count = n;
            }
            return count;
        },
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
})();

console.log(counterFactory.value());
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value());
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(100));
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(200));
counterFactory.increment();
console.log(counterFactory.value());


// ЗАВДАННЯ 3

const myPrint = (a, b, res) => `${a}^${b}=${res}`;

const myPow = (a, b, callback) => {
    const pow = (x, n) => {
        if (n === 0) {
            return 1
        };
        if (n < 0) {
            return 1 / pow(x, -n)
        };
        return x * pow(x, n - 1);
    };

    const res = pow(a, b);
    return callback(a, b, res);
};

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint)) ;
console.log(myPow(2, 0, myPrint));
console.log(myPow(2, -2, myPrint));


// ЗАВДАННЯ 4

const list = [12, 23, 100, 34, 56, 9, 233];
const myMax = (arr) => Math.max.apply(null, arr);

console.log(myMax(list));


// ЗАВДАННЯ 5

const myMul = (a, b) => a * b;

const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));