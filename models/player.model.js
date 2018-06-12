const parser = require('../utils/parser.js');

const players = parser('./data/players.csv');

exports.findAll = () => Object.values(players);

exports.findById = (id) => {
  const key = id.toString(); // The parser uses strings as keys in the resulting object.
  if (!players[key]) {
    return undefined;
  }
  return players[key];
};
