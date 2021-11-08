const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    strain: {type: Object},
    gramAmount: Number,
    accessories: [String],
    movie: Object,
    startTime: Date,
    snacks: [String],
    details: String,
    totalPrice: Number,
    theater: {type: Schema.Types.ObjectId, ref: 'Theater'},
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;