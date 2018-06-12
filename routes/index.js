const express = require('express');
const playersController = require('../controllers/players.controller.js');

const router = express.Router();

router.get('/api/players', playersController.getAllPlayers);
router.get('/api/player/:id', playersController.getPlayerById);
router.get('*', (req, res) => res.sendStatus(404));

module.exports = router;
