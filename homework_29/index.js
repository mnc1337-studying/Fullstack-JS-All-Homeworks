function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Очікував ${expected}, отримав ${actual}`);
            }
        },
    };
}


function test(name, fn) {
    try {
        fn();
        console.log(`✅ ${name}`);
    } catch (error) {
        console.log(`❌ ${name}\n   ${error.message}`);
    }
}



// ЗАВДАННЯ №1

const getAgeCategory = (age) => {
    if (age < 0 || typeof age !== "number" || isNaN(age)) {
        return "некоректний вік";
    }

    const ageCategory = age <= 12 ? "дитина" :
        age <= 17 ? "підліток" :
            age <= 64 ? "дорослий" : "пенсіонер"

    return ageCategory;
};

console.log("ТЕСТИ ДО ЗАВДАННЯ №1:");


test("Від'ємний вік", () => {
    expect(getAgeCategory(-12)).toBe("некоректний вік");
});

test("Рядкове значення", () => {
    expect(getAgeCategory("testValue")).toBe("некоректний вік");
});

test("Значення NaN", () => {
    expect(getAgeCategory(NaN)).toBe("некоректний вік");
});

test("Дитина №1", () => {
    expect(getAgeCategory(0)).toBe("дитина");
});

test("Дитина №2", () => {
    expect(getAgeCategory(12)).toBe("дитина");
});

test("Підліток №1", () => {
    expect(getAgeCategory(13)).toBe("підліток");
});

test("Підліток №2", () => {
    expect(getAgeCategory(17)).toBe("підліток");
});

test("Дорослий №1", () => {
    expect(getAgeCategory(18)).toBe("дорослий");
});

test("Дорослий №2", () => {
    expect(getAgeCategory(64)).toBe("дорослий");
});

test("Пенсіонер", () => {
    expect(getAgeCategory(65)).toBe("пенсіонер");
});



// ЗАВДАННЯ №2

const calculateTotal = (price, quantity, discount = 0) => {
    if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
        return null;
    }

    const priceTotal = (price * quantity) * (1 - discount / 100);
    return priceTotal;
};

console.log("\nТЕСТИ ДО ЗАВДАННЯ №2:");


test("Без знижки", () => {
    expect(calculateTotal(50, 10)).toBe(500);
});

test("З коректною знижкою", () => {
    expect(calculateTotal(30, 15, 10)).toBe(405);
});

test("Знижка 0%", () => {
    expect(calculateTotal(10, 3, 0)).toBe(30);
});

test("Знижка 100%", () => {
    expect(calculateTotal(45, 5, 100)).toBe(0);
});

test("Кількість 0", () => {
    expect(calculateTotal(23, 0)).toBe(0);
});

test("Від'ємна ціна", () => {
    expect(calculateTotal(-20, 3)).toBe(null);
});

test("Від'ємна кількість", () => {
    expect(calculateTotal(30, -5, 10)).toBe(null);
});

test("Від'ємна знижка", () => {
    expect(calculateTotal(10, 8, -14)).toBe(null);
});

test("Знижка більше 100%", () => {
    expect(calculateTotal(26, 8, 125)).toBe(null);
});