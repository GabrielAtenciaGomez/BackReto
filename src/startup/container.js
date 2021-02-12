const { createContainer, asClass, asFunction, asValue } = require("awilix");

//CONFIG
const config = require("../conf");
const app = require(".");

//repository

const { UserRepository } = require("../respositories");

//service
const { LoginService, UserService } = require("../services");

//controller
const { LoginController } = require("../controllers");

//routes
const router = require("../routes");
const { LoginRoutes } = require("../routes/index.routes");

//db
const db = require("../models");

const container = createContainer();
container
  .register({
    config: asValue(config),
    app: asClass(app).singleton(),
    router: asFunction(router).singleton(),
  })
  .register({
    LoginController: asClass(LoginController).singleton(),
  })
  .register({
    LoginRoutes: asFunction(LoginRoutes).singleton(),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    LoginService: asClass(LoginService).singleton(),
    UserService: asClass(UserService).singleton(),
  });
module.exports = container;
