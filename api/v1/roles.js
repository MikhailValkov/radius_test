const routes = require("express").Router();
const model = require("../../model");

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       properties:
 *         _id:
 *           type: string
 *           description: document id in database
 *           example: 61b4c97234f3e5b78a485d41
 *         name:
 *           type: string
 *           description: role name
 *           example: admin
 *         description:
 *           type: string
 *           description: description of role
 *           example: can everything
 *         permissions:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Permission'
 */

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Get all roles
 *     description: Return all roles from database
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: A list of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
routes.get("/", async (req, res) => {
  await model.role
    .getAll()
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Get single role by ID
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: document id in database.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Not found
 */
routes.get("/:id", async (req, res) => {
  await model.role
    .getByID(req.params.id)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /roles:
 *  post:
 *    summary: Create role
 *    tags:
 *     - Roles
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Role name
 *                example: admin
 *                required: true
 *              description:
 *                type: string
 *                description: Role description
 *                example: Can everything
 *              permissions:
 *                type: array
 *                items:
 *                  type: string
 *                  description: list of permission ids
 *                  example:
 *                    - "61b5d84d72f5607f0be09df3"
 *                    - "51b5d84d72f5607f0be09df6"
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
  await model.role
    .create(req.body)
    .then(() => res.status(201).send())
    .catch((err) => res.status(409).json(err));
});

/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     summary: Update single role
 *     tags:
 *       - Roles
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
 *                description: Role name
 *                example: admin
 *                required: true
 *              description:
 *                type: string
 *                description: Role description
 *                example: Can everything
 *              permissions:
 *                type: array
 *                items:
 *                  type: string
 *                  description: list of permission ids
 *                  example:
 *                    - "61b5d84d72f5607f0be09df3"
 *                    - "51b5d84d72f5607f0be09df6"
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
  await model.role
    .updateByID(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Delete single role
 *     tags:
 *       - Roles
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
  await model.role
    .deleteByID(req.params.id)
    .then(() => res.status(204).send())
    .catch((err) => res.status(404).json(err));
});

module.exports = routes;
