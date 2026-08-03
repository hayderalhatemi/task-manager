import path from "path"
import swaggerJsdoc from "swagger-jsdoc"

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "REST API documentation for the Task Manager application",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
      {
        url: "https://task-manager-digi.onrender.com",
        description: "Production server",
      },
    ],
  },
  apis: ["src/routes/*.ts"],
}
const swaggerSpec = swaggerJsdoc(swaggerOptions)

export default swaggerSpec