const express = require("express");
const app = express();

app.use('view engine', 'ejs');
app.use('public', "/app/src/public")
app.use('views', "/app/src/views");

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    req,
    res
  })
});


app.listen(process.env.PORT || 3000).then(() => {
  console.log("Website running")
})