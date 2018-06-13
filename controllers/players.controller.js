const { findAll } = require('../models/player.model.js');

exports.getAllPlayers = (req, res) => {
  const players = findAll();
  res.status(200).json(players);
};
