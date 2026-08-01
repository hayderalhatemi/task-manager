import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const getTasks = () => API.get("/")
export const createTask = (data: object) => API.post("/", data)
export const updateTask = (id: string, data: object) => API.put(`/${id}`, data)
export const deleteTask = (id: string) => API.delete(`/${id}`)
