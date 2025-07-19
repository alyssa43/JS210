function century(year) {
  const centuryNumber = calculateCentury(year);

  return `${centuryNumber}${getNumberSuffix(centuryNumber)}`;
}

function getNumberSuffix(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'st';
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    return 'nd';
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    return 'rd';
  } else {
    return 'th';
  }
}

function calculateCentury(year) {
  return year % 100 === 0 ? year / 100 : Math.ceil(year / 100);
}

console.log(century(2000)        === "20th");
console.log(century(2001)        === "21st");
console.log(century(1965)        === "20th");
console.log(century(256)         === "3rd");
console.log(century(5)           === "1st");
console.log(century(10103)       === "102nd");
console.log(century(1052)        === "11th");
console.log(century(1127)        === "12th");
console.log(century(11201)       === "113th");