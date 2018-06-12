const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(logger('tiny'));
app.use(routes);

const port = process.env.PORT || 1337;
const host = process.env.HOSTNAME || 'localhost';
app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
