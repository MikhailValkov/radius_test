const routes = require("express").Router();
const model = require("../../model");

/**
 * @swagger
 * /users:
 *  get:
 *      summary: test
 *      description: test swagger jsdoc
 *      tags:
 *        - Users
 *      responses:
 *          200:
 *              description: a list of users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 */
routes.get("/", (req, res) => {
  res.status(200).json({ message: "Alive!" });
});

module.exports = routes;
