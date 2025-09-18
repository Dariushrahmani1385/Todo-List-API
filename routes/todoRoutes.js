import express from "express";
import { protect } from "../middleware/auth.js";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todoController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get user todos (with pagination, filtering, sorting)
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, example: 1 }
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema: { type: integer, example: 10 }
 *         description: Items per page
 *       - in: query
 *         name: title
 *         schema: { type: string, example: "groceries" }
 *         description: Filter todos by title
 *       - in: query
 *         name: sort
 *         schema: { type: string, example: "-createdAt" }
 *         description: Sort field (use "-" for descending)
 *     responses:
 *       200:
 *         description: List of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Todo'
 *                 page: { type: integer, example: 1 }
 *                 limit: { type: integer, example: 10 }
 *                 total: { type: integer, example: 25 }
 */
router.get("/", protect, getTodos);

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title: { type: string, example: "Buy groceries" }
 *               description: { type: string, example: "Milk, eggs, and bread" }
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post("/", protect, createTodo);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update todo by ID
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Todo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string, example: "Buy groceries" }
 *               description: { type: string, example: "Milk, eggs, bread, and cheese" }
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Todo not found
 */
router.put("/:id", protect, updateTodo);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete todo by ID
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Todo ID
 *     responses:
 *       204:
 *         description: Todo deleted successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Todo not found
 */
router.delete("/:id", protect, deleteTodo);

export default router;
