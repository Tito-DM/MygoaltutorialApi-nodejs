import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "name must exit"]
    },
    email:{
        type: String,
        required: [true, "email must exit"]
    },
    password:{
        type: String,
        required: [true, "password must exit"]
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);

export default User;