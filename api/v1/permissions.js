const routes = require("express").Router();
const model = require("../../model");

/**
 * @swagger
 * components:
 *   schemas:
 *     Permission:
 *       properties:
 *         _id:
 *           type: string
 *           description: document id in database
 *           example: 61b4c97234f3e5b78a485d41
 *         name:
 *           type: string
 *           description: permission name
 *           example: reading
 *         description:
 *           type: string
 *           description: description of permission
 *           example: can reading
 */

/**
 * @swagger
 * /permissions:
 *   get:
 *     summary: Get a list of permissions
 *     tags:
 *       - Permissions
 *     responses:
 *       200:
 *         description: A list of permissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Permission'
 */
routes.get("/", async (req, res) => {
  await model.permission
    .getAll()
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /permissions/{id}:
 *   get:
 *     summary: Get single permission by ID
 *     tags:
 *       - Permissions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: document id in database.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single permission
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Permission'
 *       404:
 *         description: Not found
 */
routes.get("/:id", async (req, res) => {
  await model.permission
    .getByID(req.params.id)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /permissions:
 *  post:
 *    summary: Create permission
 *    tags:
 *     - Permissions
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Permission name
 *                example: reading
 *                required: true
 *              description:
 *                type: string
 *                description: Permission description
 *                example: Can reading
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
  await model.permission
    .create(req.body)
    .then(() => res.status(201).send())
    .catch((err) => res.status(409).json(err));
});

/**
 * @swagger
 * /permissions/{id}:
 *   put:
 *     summary: Update single permission
 *     tags:
 *       - Permissions
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
 *                description: Permission name
 *                example: reading
 *                required: true
 *              description:
 *                type: string
 *                description: Permission description
 *                example: Can reading
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
  await model.permission
    .updateByID(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((err) => res.status(404).json(err));
});

/**
 * @swagger
 * /permissions/{id}:
 *   delete:
 *     summary: Delete single permission
 *     tags:
 *       - Permissions
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
  await model.permission
    .deleteByID(req.params.id)
    .then(() => res.status(204).send())
    .catch((err) => res.status(404).json(err));
});

module.exports = routes;
