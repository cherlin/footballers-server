const { findAll, findById } = require('../models/player.model.js');

exports.getAllPlayers = (req, res) => {
  const players = findAll();
  res.status(200).json(players);
};

exports.getPlayerById = (req, res) => {
  const player = findById(req.params.id);
  if (!player) {
    res.status(404).end();
  }
  res.status(200).json(player);
};
