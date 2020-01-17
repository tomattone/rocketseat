import "dotenv/config";

import express from "express";
import UserController from "./app/controllers/UserController";

const app = express();

app.post("/users", UserController.store);
app.use(express.json());

app.listen(3333, () => {
  console.log("Server running on localhost:3333");
});
