<<<<<<< HEAD
# Employee Task Management System

A modern Employee Task Management System built with React.js.

This project allows an admin to create and manage tasks for employees, while employees can accept, complete, or fail their assigned tasks.

The main goal of this project is to practice React concepts such as Context API, state management, localStorage, component-based architecture, CRUD operations, conditional rendering, and role-based UI.

## Features

### Authentication

- Admin and Employee login
- Login persistence using localStorage
- Role-based dashboards
- Logout functionality
- Separate Admin and Employee dashboards

### Admin Features

- View all employees and their tasks
- Create new tasks
- Assign tasks to employees
- Edit New Tasks
- Delete New Tasks
- View task status
- Custom alerts and confirmation modals
- Task status management

### Employee Features

- View assigned tasks
- Accept new tasks
- Work on active tasks
- Mark tasks as completed
- Mark tasks as failed
- View completed tasks
- View failed tasks
- View task statistics

## Task Workflow

```text
New Task
   ↓
Accept Task
   ↓
Active Task
   ↓
 ┌───────────────┐
 ↓               ↓
Completed       Failed

## Project Structure

```text
EMS/
│
├── node_modules/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── common/
│   │   │   └── CustomAlert.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   │
│   │   ├── Others/
│   │   │   ├── AllTask.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── Headers.jsx
│   │   │   └── TaskListNumbers.jsx
│   │   │
│   │   └── TaskList/
│   │       ├── ActiveTask.jsx
│   │       ├── Completed.jsx
│   │       ├── FailedTask.jsx
│   │       ├── NewTask.jsx
│   │       └── Tasklist.jsx
│   │
│   ├── context/
│   │   └── Authprovider.jsx
│   │
│   ├── utils/
│   │   └── Localstorage.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

## Tech Stack
React.js
JavaScript
Context API
React Hooks
Tailwind CSS
Lucide React
LocalStorage
Vite

## Future Improvements
Search and filter tasks
Task details modal
Due dates and overdue tasks
Notifications
Admin analytics dashboard
Calendar view
Employee profiles
Task comments
File attachments
Dark/Light theme toggle
Export tasks as CSV/PDF
Backend and database integration
Proper authentication and authorization
Task history and audit logs
Automated testing
Project Status

✅ Completed

The core Employee Task Management System has been implemented with admin and employee workflows, task management, status tracking, Context API state management, localStorage persistence, and responsive UI.

Author

Sanjib Ghosh
=======
# employee-task-management-system
An Employee Task Management System built with React.js and Context API.
>>>>>>> 8211c2c78c14cadea40aadde3be13d04bf75d311
