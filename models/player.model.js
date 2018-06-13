const parser = require('../utils/parser.js');

const players = parser('./data/players.csv');

exports.findAll = () => Object.values(players);
