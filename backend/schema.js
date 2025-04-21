const mongoose = require("mongoose");
const user = mongoose.Schema({
    pet_name:{
        type:String,
        required:true,
        trim:true
    },
    owner_name:{
        type:String,
        required:true,
        trim:true
    },
    costume:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    species:{
        type:String,
        required:true,
        trim:true
    },
    breed:{
        type:String,
        required:true,
        trim:true
    },
    prize:{
        type:String,
        required:true,
        trim:true
    }
    

})

const pet = mongoose.model("list_of_costumes",user);
module.exports = pet;
