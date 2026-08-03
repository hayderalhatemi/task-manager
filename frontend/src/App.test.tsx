import { render, screen } from "@testing-library/react"
import * as api from "./api"
import App from "./App"

jest.spyOn(api, "getTasks").mockResolvedValue({ data: [] } as any)
jest.spyOn(api, "createTask").mockResolvedValue({} as any)
jest.spyOn(api, "updateTask").mockResolvedValue({} as any)
jest.spyOn(api, "deleteTask").mockResolvedValue({} as any)

test("renders Task Manager heading", async () => {
  render(<App />)

  expect(await screen.findByText(/task manager/i)).toBeInTheDocument()
})