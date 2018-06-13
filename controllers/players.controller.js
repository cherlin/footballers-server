const { findAll } = require('../models/player.model.js');

exports.getAllPlayers = (req, res) => {
  const players = findAll();
  if (!players || players.length === 0) {
    res.sendStatus(404);
  } else {
    res.status(200).json(players);
  }
};
