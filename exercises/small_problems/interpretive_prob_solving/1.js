// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

/*
---- PROBLEM ----
input: an integer
output: an array of integers

Rules:
  -- All switches begin in the "off" position
  -- When an "off" switch gets toggled; it is now in the "on" position
  -- When an "on" switch gets toggled; it is now in the "off" position
  -- There are exactly the same number of switches as `n`
  -- Will we always have precisely one argument?
    --> Assume yes, we will always have one argument and it will be an integer
  -- If the input integer is less than 1, how to precede?
    --> Return an empty array
  -- Only return the switches left in the "on" position

---- EXAMPLES ----
lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

when n = 5 we have switches [1: off, 2: off, 3: off, 4: off, 5: off]
we also do 5 (n) iterations
1st iteration: toggle every index [1: on, 2: on, 3: on, 4: on, 5: on]
2nd iteration: toggle every 2nd index [1: on, 2: off, 3: on, 4: off, 5: on]
3rd iteration: toggle every 3rd index [1: on, 2: off, 3: off, 4: off, 5: on]
4th iteration: toggle every 4th index [1: on, 2: off, 3: off, 4: on, 5: on]
5h iteration: toggle every 5th index [1: on, 2: off, 3: off, 4: on, 5: off]
switches that remain on: [1, 4]

---- DATA STRUCTURES ----
starting: an integer
  intermediate:
    -- an array that represents a range from 1 to `n`
    -- an object whose keys are values of the range, and their values are "on" or "off"
ending: array of integers

---- ALGORITHM ----
High Level:
1. Create a range of numbers that represent all the light switches (1 - n)
2. Create a structre where each number in the range is the key, and each value has an initial value of false (represents "off")
3. Iterate through all of the values within the `range` 
  range => [1, 2, 3, 4, 5] switches => { 1: false 2: false, 3: false, 4: false, 5: false}
  4. Determine which swtiches need to be flipped: filter `range` => range.filter(num => i % num === 0)
  5. Iterate through the swithces to be flipped:
    6. If value of switch is false; change to true. 
       If value of switch is true; change to false.
7. Find the switches that have a value of true
*/


// function lightsOn(switches) {
//   const range = createRange(1, switches);
//   const switchesObj = generateSwitchesObject(range);
//   toggleSwitches(switchesObj, range);

//   return Object.entries(switchesObj)
//                .filter(entry => entry[1])
//                .map(entry => Number(entry[0]));
// }

// function toggleSwitches(switchesObj, range) {
//   range.forEach(divisor => {
//     const toFlip = switchesToBeFlipped(range, divisor);
//     toFlip.forEach(switchNum => switchesObj[switchNum] = !switchesObj[switchNum]);
//   });
// }

// function switchesToBeFlipped(range, n) {
//   return range.filter(switchNum => switchNum % n === 0);
// }

// function generateSwitchesObject(range) {
//   const result = {};
//   range.forEach(num => result[num] = false);
//   return result;
// }

// function createRange(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i += 1) {
//     result.push(i);
//   }
//   return result;
// }

function lightsOn(n) {
  let lights = initializeLights(n);
  for (let i = 1; i <= n; i += 1) {
    lights = toggleLights(lights, i)
  }
  return lights.map((light, index) => light ? index + 1: light).filter(Boolean);
}

function toggleLights(lights, iteration) {
  return lights.map((lightStatus, index) => {
    return (index + 1) % iteration === 0 ? !lightStatus : lightStatus;
  });
}

function initializeLights(n) {
  const lights = [];
  for (let i = 0; i < n; i += 1) {
    lights.push(false);
  }
  return lights;
}

console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []