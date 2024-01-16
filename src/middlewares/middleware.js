/*
    basic middleware template
*/

const express = require('express');

const middleware = (req, res, next) => {
    /* Middleware Logic here */
    if (true) {
        return next();
    } else {
        res.redirect();
    }
};

module.exports = middleware;