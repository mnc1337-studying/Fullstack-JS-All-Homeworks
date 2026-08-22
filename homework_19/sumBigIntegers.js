function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}

console.log(sumBigIntegers('100', '500'));
console.log(sumBigIntegers('6543729392931308', '1'));
console.log(sumBigIntegers('-254', '30'));