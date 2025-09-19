const DEGREE = '\u00B0';
const MINUTES = "'";
const SECONDS = '"';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const MAX_DEGRESS = 360;
const MIN_DEGREES = 0;

function calcDegree(degrees) { // Further Exploration
  if (degrees >= MIN_DEGREES && degrees <= MAX_DEGRESS) {
    return degrees;
  } else if (degrees < MIN_DEGREES) {
    return calcDegree(MAX_DEGRESS + degrees);
  } else if (degrees > MAX_DEGRESS) {
    return calcDegree(degrees - MAX_DEGRESS);
  }
}

function dms(degrees) {
  const degree = Math.floor(degrees);
  const totalMinutes = (degrees - degree) * MINUTES_PER_DEGREE;
  const minutes = Math.floor(totalMinutes);
  const seconds = Math.floor((totalMinutes - minutes) * SECONDS_PER_MINUTE);

  return formatDegrees(calcDegree(degree), minutes, seconds);
}

function formatDegrees(degree, min, sec) {
  const fixedMin = formatTime(min);
  const fixedSec = formatTime(sec);

  return `${degree}${DEGREE}${fixedMin}${MINUTES}${fixedSec}${SECONDS}`
}

function formatTime(num) {
  return num < 10 ? '0' + String(num) : String(num);
}

// // All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

// Further Exploration test cases:
console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"
