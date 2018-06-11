const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const parserOptions = {
  columns: true,
  delimiter: ';',
  objname: 'playerId',
};

function parser(file) {
  const csv = fs.readFileSync(file, 'utf8');
  return parse(csv, parserOptions);
}

module.exports = parser;
