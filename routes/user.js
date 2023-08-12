import express from "express";
import {
  addNewUser,
  deleteUser,
  getAllUsers,
  getUserById,
  specialUserId,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", addNewUser);

router.get("/userid/special", specialUserId);

// this is dynamic route, so it will be good if you try to keep in down
router.route("/userid/:id").get(getUserById).put(updateUser).delete(deleteUser);

// router.get("/userid/:id", getUserById);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);

export default router;
