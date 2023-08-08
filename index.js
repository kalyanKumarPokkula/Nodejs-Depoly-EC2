const express = require("express");

const PORT = 3000;

const app = express();

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use("/me" , (req ,res ) => {
  res.send("Iam P Kalyan kumar" );
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
