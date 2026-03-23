import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api/tasks'
})

export const getTasks = () => API.get('/')
export const createTask = (data: object) => API.post('/', data)
export const updateTask = (id: string, data: object) => API.put(`/${id}`, data)
export const deleteTask = (id: string) => API.delete(`/${id}`)