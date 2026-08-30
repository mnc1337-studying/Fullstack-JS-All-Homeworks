// ЗАВДАННЯ №1

function curriedAdd(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

const addFirst = curriedAdd(1);
const addSecond = addFirst(2);
const resultSum = addSecond(3);
console.log('Result:', resultSum);


// ЗАВДАННЯ №2

function curriedDomain(protocol) {
    return (domainName) => {
        return (tld) => {
            return `${protocol}://${domainName}.${tld}`;
        }
    }
}

const protocolSetter = curriedDomain('https');
const domainNameSetter = protocolSetter('example');
const fullDomain = domainNameSetter('com');
console.log('Full Domain:', fullDomain);


// ЗАВДАННЯ №3

function originalFunction(num) {
    return num ** 2;
}

function modifyFunction(originalFunc, multiplier) {
    return (num) => {
        return originalFunc(num) * multiplier;
    };
}

const modifiedFunc = modifyFunction(originalFunction, 3);
console.log('Original function output for 4:', originalFunction(4));
console.log('Modified function output for 4:', modifiedFunc(4));


// ЗАВДАННЯ №4

function outerFunction(arg1) {
    function innerFunction(arg2) {
        function deepInnerFunction(arg3) {
            return arg1 * arg2 * arg3;
        }
        return deepInnerFunction;
    }
    return innerFunction;
}

const resultProduct = outerFunction(2)(3)(4);
console.log(resultProduct);