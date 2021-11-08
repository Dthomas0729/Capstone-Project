const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const theaterSchema = new Schema({
    theaterRoom: Number,
    seatCount: Number,
    seatsFilled: Number,
})

const Theater = mongoose.model('Theater', theaterSchema);
module.exports = Theater;
