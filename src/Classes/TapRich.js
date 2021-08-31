const EventEmitter = require("events");
const Server = require("./Server.js");

class TapRich extends Server {
  constructor(opt = {}) {
    super(3000);
    
    this.opt = opt;
  }
  
  run() {
    this.server = new Server();
  }
}

// exports
module.exports = {
  TapRich,
  Server
}