/*
    Routes file, to work as a "routes switch",
    making it cleaner to use in index file
*/

const express = require('express');

const app = express.Router();

const dataRoutes = require('./dataRoute');
app.use('/', dataRoutes);

module.exports = app;