const express = require('express');
const hallbookingrouter=require("./Route/HallRoute")
const mongo_connection = require("./connect");
const dotenv=require("dotenv");

dotenv.config();
mongo_connection.connect();

const app=express();
app.use(express.json());

app.use('/', (req,res,next) => {
    var auth={
               authorised:true,
               };
               if(auth.authorised){
               console.log("Authorised");
               next();
               }else{
               console.log("not Authorised");
               res.send({msg:"not authorised"})
               }
               
       });
       app.use('/hallbooking',hallbookingrouter);
       app.listen(process.env.PORT);