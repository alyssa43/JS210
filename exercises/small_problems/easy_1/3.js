let rlSync = require('readline-sync');

const SQUARE_METER_TO_FEET_CONVERSION = 10.7639;

function getRoomLength() {
  console.log('Enter the length of the room in meters:');
  let length = rlSync.prompt();
  return Number(length);
}

function getRoomWidth() {
  console.log('Enter the width of the room in meters:');
  let width = rlSync.prompt();
  return Number(width);
}

function displayRoomDimensions() {
  let squareMeters = (getRoomLength() * getRoomWidth());
  let squareFeet = (squareMeters * SQUARE_METER_TO_FEET_CONVERSION);

  console.log(`The area of the room is ${squareMeters.toPrecision(4)} square meters (${squareFeet.toPrecision(5)} square feet.)`);
}

displayRoomDimensions();

// Further Exploration:

function getInputType() {
  console.log("Enter the input type: ('meters' or 'feet')");
  let inputType = rlSync.prompt();

  if (inputType === 'meters' || inputType === 'feet') {
    return inputType;
  } else {
    console.log("Invalid input type. Please try again.");
    return getInputType();
  }
}

function getMeasurement(dimension, inputType) {
  console.log(`Enter the ${dimension} of the room in ${inputType}:`)
  let measurement = rlSync.prompt();
  return parseInt(measurement, 10);
}

function displayRoomDimensions() {
  let inputType = getInputType();
  let length = getMeasurement('length', inputType);
  let width = getMeasurement('width', inputType);
  let area = length * width;
  let otherArea;
  let otherInput;

  if (inputType === 'meters') {
    otherArea = area * SQUARE_METER_TO_FEET_CONVERSION;
    otherInput = 'feet';
  } else {
    otherArea = area / SQUARE_METER_TO_FEET_CONVERSION;
    otherInput = 'meters';
  }

  console.log(`The area of the room is ${area.toFixed(2)} square ${inputType} (${otherArea.toFixed(2)} square ${otherInput}.)`);
}

displayRoomDimensions();