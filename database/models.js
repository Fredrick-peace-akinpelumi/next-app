import mongoose  from "mongoose";

let userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

let userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;