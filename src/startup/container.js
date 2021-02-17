const { createContainer, asClass, asFunction, asValue } = require("awilix");

//CONFIG
const config = require("../conf");
const app = require(".");

//repository

const { CarroRepository, UserRepository } = require("../respositories");

//service
const { CarroService, UserService, LoginService } = require("../services");

//controller
const { CarroController, LoginController } = require("../controllers");

//routes
const router = require("../routes");
const { CarroRoutes, LoginRoutes } = require("../routes/index.routes");

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
    CarroController: asClass(CarroController).singleton(),
    LoginController: asClass(LoginController).singleton(),
  })
  .register({
    CarroRoutes: asFunction(CarroRoutes).singleton(),
    LoginRoutes: asFunction(LoginRoutes).singleton(),
  })
  .register({
    db: asValue(db),
  })
  .register({
    CarroRepository: asClass(CarroRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    CarroService: asClass(CarroService).singleton(),
    UserService: asClass(UserService).singleton(),
    LoginService: asClass(LoginService).singleton(),
  });
module.exports = container;
