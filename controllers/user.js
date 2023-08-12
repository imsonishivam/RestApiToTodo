import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  console.log(req.query);
  res.json({
    success: true,
    users: [users],
  });
};

export const addNewUser = async (req, res) => {
  const { name, emailId, password } = req.body;

  await User.create({
    name,
    emailId,
    password,
  });

  res.status(201).cookie("token", "kyahi").json({
    success: true,
    message: "Registered Successfully",
  });
};

export const specialUserId = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};

export const getUserById = async (req, res) => {
  //   const { id } = req.query;
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    user,
  });
};

export const updateUser = (req, res) => {
  //   const { id } = req.query;
  const { id } = req.params;
  // const user = await User.findById(id);
  res.status(200).json({
    success: true,
    message: "Updated User",
  });
};

export const deleteUser = async (req, res) => {
  //   const { id } = req.query;
  const { id } = req.params;
  // const user = await User.findById(id);

  res.status(200).json({
    success: true,
    message: "Deleted",
  });
};
