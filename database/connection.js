import mongoose from "mongoose";
let URI = process.env.MONGP_URI;
let connection = async ()=>{
   await mongoose.connect(URI, (err)=>{
    if (err) {
        console.log("mongoose not connected");
    }else{
        console.log("mongoose connected");
    }
    })
}
export default connection;