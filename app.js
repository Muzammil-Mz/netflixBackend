import express from "express"
import config from "config"

const app=express
const port=config.get("PORT")
app.use(express.json())


app.get("/",(req,res)=>{
    try {
        res.status(200).json("HELLO wrold")
    } catch (error) {
        console.log(error);
    }
})

app.listen(port,()=>{
    console.log(`Server is up and listening`);
})