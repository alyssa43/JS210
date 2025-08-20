let p = console.log;

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_DAY = 1440;

function afterMidnight(stringTime) {
  const midnightDate = new Date('1-1-2000 00:00');
  const currentDate = new Date(`1-1-2000 ${stringTime}`);
  const midnightTime = midnightDate.getTime();
  const currentTime = currentDate.getTime();

  return (currentTime - midnightTime) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(stringTime) {
  const totalMinutes = afterMidnight(stringTime);
  
  return totalMinutes === 0 ? totalMinutes : MINUTES_PER_DAY - totalMinutes;
}

p(afterMidnight('00:00'));       // 0
p(beforeMidnight('00:00'));      // 0
p(afterMidnight('12:34'));       // 754
p(beforeMidnight('12:34'));      // 686