import mongoose from "mongoose";
//connect to db
 const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://tito:93computador@cluster0.gu55f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
    console.log("db connection")
})
}

export default dbConnection;