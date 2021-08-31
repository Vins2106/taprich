const EventEmitter = require("events");
const Server = require("./Server.js");

class TapRich extends EventEmitter {
  constructor(opt = {}) {
    super();
    
    this.opt = opt;
  }
  
  run() {
    
  }
}

// exports
module.exports = {
  TapRich,
  Server
}