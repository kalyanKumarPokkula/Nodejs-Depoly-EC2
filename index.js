const express = require("express");

const PORT = 3000;

const app = express();

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
