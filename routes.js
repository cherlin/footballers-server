const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.end("Hello World!");
});

module.exports = router;