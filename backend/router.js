const express = require("express");
const router = express.Router();
 
const pet = require("./schema");
const { default: mongoose } = require("mongoose");
router.use(express.json());

router.post('/pets',async(req,res)=>{
    try {
        const {pet_name,owner_name,costume,category,age,species,breed,prize} = req.body;
        if(!pet_name || !owner_name || !costume || !category || !age || !species || !breed || !prize){
            return res.status(400).send({msg:"Please fill all details to post Pet-Data"});
        }
        const exist = await pet.findOne({pet_name,owner_name,costume,category,age,species,breed,prize});
        if(exist){
            return res.status(400).send({msg:"Pet-Data already exists"});
        }
        const petData = new pet({pet_name,owner_name,costume,category,age,species,breed,prize});
        await petData.save();
        res.status(200).send({msg:"Pet-Data created successfully",petData});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong",error});
        console.log(error);
    }
});

router.get('/pets',async(req,res)=>{
    try {
        const pets = await pet.find();
        
        return res.status(200).send({msg:"Pet-Data retrieved successfully",pets});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong",error});
        console.log(error);
    }
})

router.put('/pets/:id', async (req, res) => {
    try {
        const { pet_name, owner_name, costume, category, age, species, breed, prize } = req.body;
        if (!pet_name || !owner_name || !costume || !category || !age || !species || !breed || !prize) {
            return res.status(400).send({ msg: "Please fill all details for updating Pet-Data" });
        }
        const updatedPet = await pet.findByIdAndUpdate(
            req.params.id,
            { pet_name, owner_name, costume, category, age, species, breed, prize }
        );
        if (!updatedPet) {
            return res.status(404).send({ msg: "Pet-Data not found" });
        }

        res.status(200).send({ msg: "Pet-Data updated successfully", updatedPet });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.error(error);
    }
});

router.delete('/pets/:id', async (req, res) => {
    try {
        const deletedPet = await pet.findByIdAndDelete(req.params.id);

        if (!deletedPet) {
            return res.status(404).send({ msg: "Pet-Data not found" });
        }

        res.status(200).send({ msg: "Pet-Data deleted successfully"});
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.error(error);
    }
});
  




module.exports = router;