import request from "supertest"
import app from "../server"

describe("GET /", () => {
  it("should return the API status message", async () => {
    const response = await request(app).get("/")

    expect(response.status).toBe(200)
    expect(response.text).toBe("Task Manager API is running")
  })
})
