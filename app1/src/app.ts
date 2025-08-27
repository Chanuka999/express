import express, { Application } from "express";
import greetingRouter from "./routes/greeting.route";
import { Routes } from "./routes/routes";

const app: Application = express();

app.use(express.json());
app.use("/api", Routes.getInstance().router);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
