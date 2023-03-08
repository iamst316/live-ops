const mongoose = require("mongoose");

//----------------------------------------

mongoose.connect("mongodb+srv://iamst316:iamst316@cluster0.aem66eq.mongodb.net/?retryWrites=true&w=majority");

const offerSchema = mongoose.Schema({
    email : String,
    passowrd: String
})

const offers = mongoose.model('offers',offerSchema);

//----------------------------------------
module.exports = offers;
