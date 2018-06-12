const { findAll, findById } = require('../models/player.model.js');

exports.getAllPlayers = (req, res) => {
  const players = findAll();
  res.json(players);
};

exports.getPlayerById = (req, res) => {
  const player = findById(req.params.id);
  if (!player) {
    res.sendStatus(404);
  }
  res.json(player);
};
