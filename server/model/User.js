const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    role: String,
    mobile: String,
}, { timestamps: true });

const User = mongoose.model("users", userSchema);
module.exports = User;