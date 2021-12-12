const routes = require("express").Router();
const model = require("../../model");

/**
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       properties:
 *         _id:
 *           type: string
 *           description: document id in database
 *           example: 61b4c97234f3e5b78a485d41
 *         name:
 *           type: string
 *           description: role name
 *           example: administrator
 *         roles:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Role'
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Return all users from database
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
routes.get("/", async (req, res) => {
  await model.user
    .getAll()
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get single user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: document id in database.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 */
routes.get("/:id", async (req, res) => {
  await model.user
    .getByID(req.params.id)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create user
 *    tags:
 *     - Users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: User name
 *                example: administrator
 *                required: true
 *              roles:
 *                type: array
 *                items:
 *                  type: string
 *                  description: list of roles ids
 *                example:
 *                  - "61b5d84d72f5607f0be09df3"
 *                  - "51b5d84d72f5607f0be09df6"
 *    responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflicted. Document exist.
 *        content:
 *          applications/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: object
 */
routes.post("/", async (req, res) => {
  await model.user
    .create(req.body)
    .then(() => res.status(201).send())
    .catch((err) => res.status(409).json(err));
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update single user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: document id in database.
 *         schema:
 *           type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: User name
 *                example: administrator
 *                required: true
 *              roles:
 *                type: array
 *                items:
 *                  type: string
 *                  description: list of roles ids
 *                example:
 *                  - "61b5d84d72f5607f0be09df3"
 *                  - "51b5d84d72f5607f0be09df6"
 *     responses:
 *       204:
 *         description: Updated
 *       404:
 *         description: Document not found.
 *         content:
 *           applications/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 */
routes.put("/:id", async (req, res) => {
  await model.user
    .updateByID(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete single user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: document id in database.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted
 *       404:
 *         description: Document not found.
 *         content:
 *           applications/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 */
routes.delete("/:id", async (req, res) => {
  await model.user
    .deleteByID(req.params.id)
    .then(() => res.status(204).send())
    .catch((err) => res.status(404).json(err));
});

module.exports = routes;
