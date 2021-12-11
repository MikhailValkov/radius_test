const routes = require("express").Router();
const swagger = require("./swagger");
const usersRoutes = require("./users");
const rolesRoutes = require("./roles");
const permissionsRoutes = require('./permissions');

routes.use("/users", usersRoutes);
routes.use("/roles", rolesRoutes);
routes.use("/permissions", permissionsRoutes);
routes.use("/docs", swagger.ui.serve, swagger.ui.setup(swagger.spec));

module.exports = routes;
