# Task Manager

A full-stack task management application built with React, Node.js, Express, TypeScript, and MongoDB. Users can create, update, complete, and delete tasks through a clean and responsive interface.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Tested-C21325?logo=jest&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-API%20Testing-FF6C37)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?logo=render)
![REST API](https://img.shields.io/badge/REST-API-orange)

## Live Demo

**Frontend:** https://task-manager-lilac-pi-43.vercel.app

**Backend API:** https://task-manager-digi.onrender.com

## Screenshots

### Home Page
<img src="./screenshots/home.png" alt="Home Page" width="700">

### Empty State
<img src="./screenshots/empty.png" alt="Empty State" width="700">

### Edit Task
<img src="./screenshots/edit.png" alt="Edit Task" width="700">

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as pending or completed
- Set due dates
- RESTful API
- Responsive user interface
- Backend API testing with Jest and Supertest

## Tech Stack

### Frontend

- React
- TypeScript
- Axios
- CSS

### Backend

- Node.js
- Express
- TypeScript
- Mongoose

### Testing

- Jest
- Supertest
- MongoDB Memory Server

### Database

- MongoDB Atlas

### Deployment

- Vercel (Frontend)
- Render (Backend)

## Project Structure

```text
task-manager/
├── backend/
└── frontend/
```

## Architecture

```text
React Frontend
      │
      ▼
 Axios (HTTP)
      │
      ▼
Express REST API
      │
      ▼
   Mongoose
      │
      ▼
MongoDB Atlas
```

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/hayderalhatemi/task-manager.git
cd task-manager
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend

```bash
cd frontend
npm install
npm start
```

## Running Tests

From the backend folder:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

Current test coverage includes:

- API health endpoint
- Create task
- Get all tasks
- Update task
- Delete task

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Roadmap

Future improvements planned for this project:

- [x] Full CRUD functionality
- [x] Responsive design
- [x] Backend deployment (Render)
- [x] Frontend deployment (Vercel)
- [x] Backend testing (Jest + Supertest)
- [ ] Frontend testing (React Testing Library)
- [ ] Task filtering
- [ ] Task search
- [ ] Dark mode
- [ ] CI/CD with GitHub Actions

## Contributing

Contributions, suggestions, and feedback are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.