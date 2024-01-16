/*
    Basic controller template
*/

const handleError = require('../utils/errorHandler.js');
const Data = require('../models/dataSchema');

const findAll = async (req, res) => {
    try {
        const var1 = req.body.name;
        const var2 = req.params.param;

        const foundData = await Data.find({});
        res.status(200).json(foundData);

    } catch (err) {
        res.status(404).json(err);
    }
}


const findOne = async (req, res) => {
    try {
        const foundData = await Data.findOne({_id: req.params.id});
        res.status(200).json(foundData);
    } catch (err) {
        res.status(404).json(err);
    }
}



module.exports = {
    findAll,
    findOne
}