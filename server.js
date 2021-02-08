const express = require("express");
const server = express();
const { HomeRoutes } = require("./routes");
const { NotfoundMiddleware } = require("./middlewares");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes);
server.use(NotfoundMiddleware);

server.listen(8080, () => {
  console.log("server iniciado en el puerto: " + 8080);
});

server.get("/", (req, res) => {
  res.write("Holaaaaaaaaaaaaaaaaaa");
});
