import express from "express";
import'dotenv/config' 
import dbConnection from "./db.js";
import goalRoutes from "./router/goal.js";
import userRoutes from "./router/user.js";

const app = express();
const PORT = process.env.PORT || 5000;

//all json parser
app.use(express.json());

//db connection
dbConnection();

//goal route
app.use("/api/goal",goalRoutes)
app.use("/api/user",userRoutes)


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
