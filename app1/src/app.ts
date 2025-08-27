import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
