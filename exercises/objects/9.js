let p = console.log

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }

function timeOfDay(deltaMinutes) {
  let start = new Date('1-1-2000'); // sets a starting point date
  start.setHours(0, 0, 0); // set a starting point time (midnight)

  let startTime = start.getTime();
  let endTime = startTime + (deltaMinutes * 60000);
  let endDate = new Date(endTime);

  let hours = endDate.getHours();
  let minutes = endDate.getMinutes();

  return formatNumber(hours) + ":" + formatNumber(minutes);
}

function formatNumber(number) {
  return String(number).padStart(2, '0');
}

p(timeOfDay(0));          // "00:00"
p(timeOfDay(-3));         // "23:57"
p(timeOfDay(35));         // "00:35"
p(timeOfDay(-1437));      // "00:03"
p(timeOfDay(3000));       // "02:00"
p(timeOfDay(800));        // "13:20"
p(timeOfDay(-4231));      // "01:29"