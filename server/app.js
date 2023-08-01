const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let count = 1;

// Simple counter logic
app.get("/api/task", (req, res) => {
  if (count === 6) {
    count = 1;
    return res.send({ result: "done" });
  } else {
    count += 1;
    return res.send({ result: null });
  }
});

app.get("/api/task/new", (req, res) => {
  res.send("1235");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
