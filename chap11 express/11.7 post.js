import express from "express";
const app = express();

app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(8080);
