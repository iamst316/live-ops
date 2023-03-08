const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://iamst316:iamst316@cluster0.aem66eq.mongodb.net/?retryWrites=true&w=majority");
//----------------------------------------
const userSchema = mongoose.Schema({
    email : String,
    password: String
})

const users = mongoose.model('users',userSchema);

//----------------------------------------
module.exports = users;
