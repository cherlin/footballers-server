const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const parserOptions = {
  columns: true,
  delimiter: ';',
  objname: 'playerId',
};

function parser(file) {
  if (!fs.existsSync(file)) {
    throw new Error('The file you are trying to parse does not exist.');
  }
  const csv = fs.readFileSync(file, 'utf8');
  return parse(csv, parserOptions);
}

module.exports = parser;
