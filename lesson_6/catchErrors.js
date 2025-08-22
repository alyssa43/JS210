function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data); // Throws an Error if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an Error
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);
// Logs "There was a SyntaxError parsing JSON data:
//       Unexpected token 'o', "not valid JSON" is not valid JSON"
// Logs "Finished parsing data."
// Returns null