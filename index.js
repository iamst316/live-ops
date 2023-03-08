let express = require('express');
let app = express();
let cors = require('cors');
let mongoose = require('mongoose');
const users = require("./users");
const offers = require('./offers');

app.use(express.json());
app.use(cors());

//----------------------------------------------


//-----------------------------------------------


app.post('/login',async (req,res)=>{
    if(req.body.email && req.body.password){
        let user = await users.findOne(req.body).select('-password');
        if (user){
            res.send(user);
        }
        else{
            res.status(400).send({"error":"Invalid"});
        }
    }
    else{
        res.status(400).send({"error":"Invalid"});
    }

})





//-----------------------------------------------
app.listen(5000,()=>{
    console.log("Server running at PORT 5000!");
})
