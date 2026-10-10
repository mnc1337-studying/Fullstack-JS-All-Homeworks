// ЗАВДАННЯ №1

function isValidEmail(email) {
    const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRe.test(email);
}

console.log(isValidEmail("example@example.com")); // true
console.log(isValidEmail("my.name@sub-domain.co.ua")); // true
console.log(isValidEmail("invalid-email")); // false



// ЗАВДАННЯ №2

function isValidUrl(url) {
    const urlRe = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/;
    return urlRe.test(url);
}

console.log(isValidUrl("https://www.example.com")); // true
console.log(isValidUrl("http://example.com/path/to/page")); // true
console.log(isValidUrl("invalid-url")); // false