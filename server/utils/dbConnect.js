import mongoose from "mongoose"
import config from "config"

async function dbConnect (){
try {
    let dburl=config.get("URL")
    await mongoose.connect(dburl)
    console.log(`Db connected successfully`);
    
}catch(error){
    console.log(error);
}
}
dbConnect()