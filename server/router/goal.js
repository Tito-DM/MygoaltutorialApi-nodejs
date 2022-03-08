import express from "express";
import {
  create,
  index,
  remove,
  show,
  update,
} from "../controller/goalController.js";

const goalRoutes = express.Router();

goalRoutes.route("/").get(index).post(create);
goalRoutes.route("/:id").get(show).put(update).delete(remove);

export default goalRoutes;
