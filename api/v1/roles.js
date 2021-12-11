const routes = require("express").Router();
const model = require("../../model");

/**
 * @swagger
 * /roles:
 *  get:
 *      summary: Get all roles
 *      description: Return all roles from database
 *      tags:
 *          - Roles
 *      responses:
 *          200:
 *              description: A list of roles.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              roles:
 *                                  type: string
 */
routes.get("/", (req, res) => {
  res.status(200).json({ message: "Alive!" });
});

module.exports = routes;