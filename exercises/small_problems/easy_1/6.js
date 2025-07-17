function shortLongShort(string1, string2) {
  let [short, long] = [string1, string2].toSorted((a, b) => a.length - b.length);

  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");