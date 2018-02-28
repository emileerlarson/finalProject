var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    interests: {
        type: Array
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;