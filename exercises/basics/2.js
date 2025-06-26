const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // will log: Hello
}

if (!myString) {
  console.log('World'); // will log nothing
}

if (!!myArray) {
  console.log('World'); // will log: World
}

if (myOtherString || myArray) {
  console.log('!');     // will log: !
}