const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({ success: true });
});

app.post("/api", (req, res) => {
  res.json(req.body);
  console.log(req.body.name);
});

const port = 5000;

app.listen(port, console.log(`Listening on ${port}`));
