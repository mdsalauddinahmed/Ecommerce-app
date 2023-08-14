import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
     const connect =await mongoose.connect(process.env.mongo_url)
     console.log(`connected to mongodb ${connect.connection.host}`.bgGreen.white)
    }catch(error){
        console.log(`Error in mongodb ${error}`.bgCyan.white)

    }
}
export default connectDb;