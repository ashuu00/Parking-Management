var express = require("express");
var router = express.Router();
var userModel = require("../models/user");


router.post("/register", function (req, res) {
    const user={
    username:req.body.username,
    email:req.body.email,
    phoneNo:req.body.phone,
    password:req.body.password,
    checkpass:req.body.checkpass}
    // req.body.user['semester'] = req.body.semester
    // req.body.user['college'] = req.body.college
    // req.body.user['course'] = req.body.course
   
    




    console.log(user);
    var pw = req.body.password
        
        var u = new userModel(user);
        u.save((err,ans)=>{console.log(ans);
            req.flash('success','this has been done')
            
            //res.send({'success':'true'})});
           })
});

router.post("/login",(req,res)=>{
    userModel.findOne({username:req.body.username},(err,user)=>{
        if(user){
            if(user.password===req.body.password){
                req.session.user=req.body.username;
                console.log(req.session.user);
                res.send('sucess');
                console.log('Nice');

            }else{
                req.flash('error','username and password incorrect');
                res.send('error')
                console.log('Error in pass');
            }
        }else{
            req.flash('error','username not found');
                res.send('error')
        }
    })
})
module.exports=router
