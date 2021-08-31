const express = require("express");
const app = express();
const assets = require("../assets.js");

app.use(express.static("/app/src/public"));
app.set("views", "/app/src/views");

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    req,
    res,
    assets
  });
});

app.use("/", async (req, res) => {
  res.redirect("/");
});

class Server {
  constructor(port) {
    this.port = port;
    this.exec();
  }

  exec() {
    app.listen(this.port || 3000, () => {
      console.log(`Website running`);
    });
  }
}

module.exports = Server