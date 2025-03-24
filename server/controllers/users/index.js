import express from "express"
import bcrypt from "bcryptjs"
import mongoose  from "mongoose"
import userModel from "../../models/Users/Users.js"
const router=express.Router()

router.post("/register",async (req,res)=>{
    try {
        let userinput=req.body
        let hashpass= await bcrypt.hash(userModel.password,10)
        userinput.password=hashpass
        let userdata= await userModel.create(userinput)
        res.status(200).json(userinput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})


router.get("/getall",async (req,res)=>{
    try {
        console.log("get all users");
    let userinput= await userModel.find({})
    res.status(200).json(userinput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.get('/getone/:id',async (req,res)=>{
    try {
        let userinput=req.params.id
        let userdata=await userModel.findOne({_id:userinput})
        res.status(200).json(userinput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
} )


router.put("/updateuser/:id",async (req,res)=>{
    try {
        let idinput=req.params.id
    let userdata=req.body
    let userinput=await userModel.updateOne({_id:idinput},{$set:userdata})
    res.status(200).json("user info updated")
     
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})



router.delete("/deleteuser/:id",async (req,res)=>{
    try {
        let userinput=req.params.id
        await userModel.deleteOne({_id:userinput})
        res.status(200).json("user deleted")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/deleteall",async (req,res)=>{
    try {
        let userinput=await userModel.deleteMany()
        res.status(200).json("deleted db")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})