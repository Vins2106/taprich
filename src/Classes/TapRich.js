const EventEmitter = require("events");
const Server = require("./Server.js");

class TapRich extends EventEmitter {
  constructor(opt = {}) {
    super();
    
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