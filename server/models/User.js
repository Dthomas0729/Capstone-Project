const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const schema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        age: { type: Number, required: true , min: 21},
        phone: String,
        googleId: String,
        img: { data: Buffer, contentType: String }
    },
    {
        timestamps: true,
    }
);

schema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        // replace the user provided password with the hash
        user.password = hash;
        next();
    });
});

const User = mongoose.model("User", schema);

module.exports = User;