function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(2, 8));
console.log(getRandomInt(5, 20));
console.log(getRandomInt(-9, -5));
console.log(getRandomInt(-10, -1));
console.log(getRandomInt(35, 74));