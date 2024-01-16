/*
    basic mongoose schema 
*/

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    data: String,
    data2: Number,
    data3: mongoose.Schema.Types.ObjectId
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data