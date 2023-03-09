const mongoose = require("mongoose");

//----------------------------------------

mongoose.connect("mongodb+srv://iamst316:iamst316@cluster0.aem66eq.mongodb.net/?retryWrites=true&w=majority");

const offerSchema = mongoose.Schema({
    title: String,
    imgurl: String,
    price: Number,
    userExp: Number,
    offerStart: Date, //yyyy-mm-dd
    offerEnd: Date
    
})

const offers = mongoose.model('offers',offerSchema);

//----------------------------------------
module.exports = offers;
