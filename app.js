import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

config({
  path: "./data/config.env",
});

export const app = express();

// using middleWares
app.use(express.json());
app.use(userRouter); // app.use("/users", userRouter)
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Nice working");
});
