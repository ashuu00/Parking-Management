var express = require("express");
var router = express.Router();
var userModel = require("../models/user");

router.patch('/suspend/:userId', async function (req, res) {
   const myUsers=await userModel.findOneAndUpdate({uid:req.params.userId},{suspend:true},(err,res)=>{
       if(err){console.log(err); res.send('error');}
       else {console.log(res);
       res.send('success')}
   });
   

    })

router.get('/users',async (req,res)=>{
const myUsers=await userModel.find({});
res.send(myUsers);
})

module.exports=router;