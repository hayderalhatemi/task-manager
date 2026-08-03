import taskRoutes from "./routes/taskRoutes"
import connectDB from "./config/db"
import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./config/swagger"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use("/api/tasks", taskRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Task Manager API is running")
})

export default app

if (require.main === module) {
  dotenv.config()

  connectDB()

  const PORT = process.env.PORT || 5000

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
