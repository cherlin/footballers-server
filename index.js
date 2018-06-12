const express = require('express');
const logger = require('morgan');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(logger('tiny'));
app.use(cors());
app.use(routes);

const port = process.env.PORT || 1337;
const host = process.env.HOSTNAME || 'localhost';
app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
