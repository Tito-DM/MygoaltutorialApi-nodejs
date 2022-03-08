import express from "express";
import { register,login } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/",register)
userRoutes.post("/login",login)

export default userRoutes;
