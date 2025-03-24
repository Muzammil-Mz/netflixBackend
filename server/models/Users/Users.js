import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,

    },email:{
        type:String,
        require:true
    },password:{
        require:true,
        type:String
    },age:{
        type:String
    }
})

const userModel=mongoose.model("Users",userSchema,"users")
export default userModel