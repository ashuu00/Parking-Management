var mongoose = require("mongoose");

var shortid = require("shortid");
var Booking = new mongoose.Schema({
    uid: {
        type: String,
        default: shortid.generate,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    
    vehicle: {
        type:String, 
        required: true
    },
    Date: {
        type:String, 
        required: true
    },
    password: {
        type:String, 
        required: true
    },
    suspend:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("booking", Booking);
   