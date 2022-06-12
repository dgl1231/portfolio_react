const express = require('express');
const app = express();
const router = require('./server/router/index');
const cors = require('cors');
const request = require('request');


app.use(cors());
app.use('/', router);

const port = 3001;
app.listen(port, () => { console.log('listening on port : ' + port + '...') });