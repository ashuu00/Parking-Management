const express = require('express')
const bodyParser = require("body-parser");
const session=require('express-session');
const flash=require('express-flash');
const mongoose = require("mongoose");
const app = express()
const port = 7000
const LoginRouter=require('./router/authenticate');
const OperatorRouter=require('./router/operator');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(flash());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://BlogSite:WalnutBlog@cluster0.jiw3t.mongodb.net/parking?retryWrites=true&w=majority",
 {useNewUrlParser: true, useUnifiedTopology: true});
app.get('/', (req, res) => res.send('Hello World!'))
app.use(LoginRouter);
app.use(OperatorRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))