const express = require("express");
const app = express();
const assets = require("../assets.js");

app.set('public', "/app/src/public")
app.set('views', "/app/src/views");

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    req,
    res,
    assets
  })
});

app.use("/", async (req, res) => {
  res.redirect("/");
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`Website running`)
})