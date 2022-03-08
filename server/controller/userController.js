import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check if user exist
    const userExist = await User.findOne({ email: email });
    if (userExist) res.status(400).json("user already exist");

    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    const token = jwt.sign(user.id, "process.env.TOKEN_SECRET");
    res
      .status(200)
      .json({ _id: user.id, name: user.name, email: user.email, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    //check if password match and user exist
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(user.id, "process.env.TOKEN_SECRET");
      res
        .status(200)
        .json({ _id: user.id, name: user.name, email: user.email, token });
    }

    res.status(400).json("wrong credentials");
  } catch (error) {
    res.status(500).json(error);
  }
};
