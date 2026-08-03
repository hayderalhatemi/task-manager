import express, { Request, Response } from "express"
import Task from "../models/Task"

const router = express.Router()

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: Returns all tasks.
 *       500:
 *         description: Failed to get tasks.
 */

router.get("/", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to get tasks" })
  }
})

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Finish portfolio
 *               description:
 *                 type: string
 *                 example: Complete the Task Manager documentation
 *               status:
 *                 type: string
 *                 example: pending
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 example: 2026-08-10
 *     responses:
 *       201:
 *         description: Task created successfully.
 *       500:
 *         description: Failed to create task.
 */

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description, status, dueDate } = req.body

    const task = new Task({
      title,
      description,
      status,
      dueDate,
    })

    const savedTask = await task.save()
    res.status(201).json(savedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to create task" })
  }
})

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *       500:
 *         description: Failed to update task.
 */

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    res.json(updatedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to update task" })
  }
})

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *       404:
 *         description: Task not found.
 *       500:
 *         description: Failed to delete task.
 */

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" })
    }
    res.json({ message: "Task deleted successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to delete task" })
  }
})

export default router
