require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const corsConfig = require('./config/corsConfig.js')
app.use(cors(corsConfig));

const Routes = require('./routes/routes.js');
app.use('/', Routes);

const PORT = process.env.PORT
app.listen(PORT);
console.log('server online on port '+ PORT);