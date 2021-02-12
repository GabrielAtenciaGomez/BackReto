const express = require("express");

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express().use(router);
  }

  start() {
    return new Promise((res) => {
      _express.listen(_config.PORT, () => {
        console.log(
          `servidor ${_config.APP_NAME} subido en el puerto ${_config.PORT}`
        );
      });
    });
  }
}
module.exports = Server;
