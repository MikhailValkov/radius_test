const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Radius",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1/",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./api/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  ui: swaggerUi,
  spec: swaggerSpec,
};
