/*
    Basic Route Template
*/

const express = require('express');

const middleware = require('../middlewares/middleware');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/data', middleware, dataController.findAll );
router.get('/data/:id', middleware, dataController.findOne );

router.post('/data')

router.put('/data/:id')
router.patch('/data/:id')

router.delete('/data')
router.delete('/data/:id')

module.exports = router;