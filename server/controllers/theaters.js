const db = require("../models");

// ===== Index - GET - ALL available theaters 
const index = (req, res) => {
    db.Theater.find((err, populatedTheaters) => {
            return res.status(200).json({
                message: "Success",
                data: populatedTheaters,
            });
        })
};

// ===== Show - GET - One order by id
const show = (req, res) => {
    db.Theater.findById(req.params.id, (err, populatedTheaters) => {
        if (err) return console.log('ERROR:', err);

        return res.status(200).json({
            message: 'Success',
            data: populatedTheaters,
        });
    });
};

module.exports = { index, show };