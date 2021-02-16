const { createContainer, asClass, asFunction, asValue } = require("awilix");

//CONFIG
const config = require("../conf");
const app = require(".");

//repository

const { UserRepository, CarroRepository } = require("../respositories");

//service
const { LoginService, UserService, CarroService } = require("../services");

//controller
const { LoginController, CarroController } = require("../controllers");

//routes
const router = require("../routes");
const { LoginRoutes, CarroRoutes } = require("../routes/index.routes");

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
    CarroController: asClass(CarroController).singleton(),
  })
  .register({
    LoginRoutes: asFunction(LoginRoutes).singleton(),
    CarroRoutes: asFunction(CarroRoutes).singleton(),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CarroRepository: asClass(CarroRepository).singleton(),
  })
  .register({
    LoginService: asClass(LoginService).singleton(),
    UserService: asClass(UserService).singleton(),
    CarroService: asClass(CarroService).singleton(),
  });
module.exports = container;
