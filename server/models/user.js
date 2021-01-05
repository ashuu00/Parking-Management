var mongoose = require("mongoose");

var shortid = require("shortid");
var User = new mongoose.Schema({
    uid: {
        type: String,
        default: shortid.generate,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    
    email: {
        type:String, 
        required: true
    },
    phoneNo: {
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

module.exports = mongoose.model("user", User);
   