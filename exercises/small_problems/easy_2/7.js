function twice(number) {
  return isDoubleNumber(number) ? number : number * 2;
}

function isDoubleNumber(number) {
  const digits = String(number);
  const middleIndex = digits.length / 2;
  const leftDigits = digits.slice(0, middleIndex);
  const rightDigits = digits.slice(middleIndex);

  return leftDigits === rightDigits;
}

console.log(twice(37)      ===    74);
console.log(twice(44)      ===    44);
console.log(twice(334433)  ===    668866);
console.log(twice(444)     ===    888);
console.log(twice(107)     ===    214);
console.log(twice(103103)  ===    103103);
console.log(twice(3333)    ===    3333);
console.log(twice(7676)    ===    7676);