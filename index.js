const express = require("express");

const PORT = 3000;

const app = express();



app.use("/me" , (req ,res ) => {
  res.send("Iam P Kalyan kumar" );
})
app.get('/avi' , (req ,res) => {
  res.send('avi is my best friend')
})

app.get('kee' , (req ,res) => {
  res.send("kee is friend" )
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
