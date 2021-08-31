const express = require("express");
const app = express();

app.use('view engine', 'ejs');

app.get("/", async (req, res) => {
  res.render
});


app.listen(process.env.PORT || 3000).then(() => {
  console.log("Website running")
})