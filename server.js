const express = require("express");

const app = express();

app.get("/ping",(req,res)=>{
    try {
        res.status(200).send({msg:"pong"})
    } catch (error) {
        res.status(500).send({msg:"Server occured",error});
    }
})

app.listen(3000,()=>{
    try {
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error);
    }
})