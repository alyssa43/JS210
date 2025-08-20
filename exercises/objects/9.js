let p = console.log

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