import request from "supertest"
import app from "../server"
import { clearTestDB, closeTestDB, connectTestDB } from "./testDB"

beforeAll(async () => {
  await connectTestDB()
})

afterEach(async () => {
  await clearTestDB()
})

afterAll(async () => {
  await closeTestDB()
})

describe("Task API", () => {
  it("creates a task", async () => {
    const response = await request(app).post("/api/tasks").send({
      title: "Test task",
      description: "Test description",
      status: "pending",
      dueDate: "2026-08-10",
    })

    expect(response.status).toBe(201)
    expect(response.body.title).toBe("Test task")
  })

  it("gets all tasks", async () => {
    await request(app).post("/api/tasks").send({
      title: "Test task",
      description: "Test description",
      status: "pending",
      dueDate: "2026-08-10",
    })

    const response = await request(app).get("/api/tasks")

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body[0].title).toBe("Test task")
  })

  it("updates a task", async () => {
  const createdTask = await request(app).post("/api/tasks").send({
    title: "Original task",
    description: "Original description",
    status: "pending",
    dueDate: "2026-08-10",
  })

  const response = await request(app)
    .put(`/api/tasks/${createdTask.body._id}`)
    .send({
      title: "Updated task",
      status: "completed",
    })

  expect(response.status).toBe(200)
  expect(response.body.title).toBe("Updated task")
  expect(response.body.status).toBe("completed")
})

it("deletes a task", async () => {
  const createdTask = await request(app).post("/api/tasks").send({
    title: "Task to delete",
    description: "Delete me",
    status: "pending",
    dueDate: "2026-08-10",
  })

  const response = await request(app).delete(
    `/api/tasks/${createdTask.body._id}`
  )

  expect(response.status).toBe(200)
  expect(response.body.message).toBe("Task deleted successfully")
})

})