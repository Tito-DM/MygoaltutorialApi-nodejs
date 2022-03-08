import Goal from "../model/goal.js";

export const index = async (_, res) => {
  //get all user goal
  try {
    const goal = await Goal.find();

    res.status(200).json(goal);
  } catch (error) {
    res.status(200).json({
      message: "server error",
      error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(200).json(goal);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const show = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400).json("goal not found");
    }
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

export const update = async (req, res) => {
    
  try {
    const goal = await Goal.findById(req.params.id);
  
    if (!goal) {
      res.status(400).json("goal not found");
    }
    const updatedGoal  = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(400).json("goal not found");
    }
    await goal.remove();
    res.status(200).json("goal removed");
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};
