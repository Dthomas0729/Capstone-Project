const db = require("../models");
const mongoose = require("mongoose");

// ===== Index - GET - ALL orders by a user
const index = (req, res) => {
    console.log("REQ.USER: ", req.user);
    db.Order.find()
        .populate("userId")
        .exec((err, populatedOrders) => {
            return res.status(200).json({
                message: "Success",
                data: populatedOrders,
            });
        });
};

// ===== Show - GET - One order by id
const show = (req, res) => {
    db.Order.findById(req.params.id, (err, foundOrder) => {
        if (err) return console.log('ERROR:', err);

        return res.status(200).json({
            message: 'Success',
            data: foundOrder,
        });
    });
};

// ===== Create - POST - Functional (Status code 201)
const create = (req, res) => {

    req.body.user = mongoose.Types.ObjectId(req.body.user);
    db.Order.create(req.body, (err, savedOrder) => {
        // savedOrder.populate("userId");
        // console.log(savedOrder, "SAVED");
        if (err) return console.log("CREATE ORDER ERROR:", err);

        return res.status(201).json({
            message: "Success",
            data: savedOrder,
        });
    });
};

// ===== Update - PUT 
const update = (req, res) => {
    db.Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedOrder) => {
            if (err) console.log("Error in Orders#update:", err);

            return res.status(202).json({
                data: updatedOrder,
            })
        }
    )
};

// Destroy - DELETE - Functional (id)
const destroy = (req, res) => {
    db.Order.findByIdAndDelete(req.params.id, (err, deletedOrder) => {
        if (err) console.log("Error in Orders#destroy:", err);

        return res.status(200).json({
            data: deletedOrder,
        });
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};