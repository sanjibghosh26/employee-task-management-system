# Employee Task Management System

A modern Employee Task Management System built with React.js, Context API, and Tailwind CSS.

This project allows an admin to create and manage tasks for employees, while employees can accept, complete, or fail their assigned tasks.

The main goal of this project is to practice React concepts such as Context API, state management, localStorage, component-based architecture, CRUD operations, conditional rendering, and role-based UI.

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://employee-task-management-system-flax.vercel.app/)

**Live Website:** [Employee Task Management System](https://employee-task-management-system-flax.vercel.app/)

## 🔑 Demo Login Credentials

Use the following demo credentials to explore the Admin and Employee dashboards.

### 👨‍💼 Admin Login

| Field    | Credentials       |
| -------- | ----------------- |
| Email    | `admin@gmail.com` |
| Password | `123admin`        |

### 👨‍💻 Employee Login

| Employee | Email                 | Password       |
| -------- | --------------------- | -------------- |
| Arjun    | `employee1@gmail.com` | `123employee1` |
| Priya    | `employee2@gmail.com` | `123employee2` |
| Rahul    | `employee3@gmail.com` | `123employee3` |
| Vikram   | `employee4@gmail.com` | `123employee4` |
| Sneha    | `employee5@gmail.com` | `123employee5` |

> **Note:** These are demo credentials for testing purposes. The application uses browser `localStorage` to store demo data, so changes to tasks may persist in the same browser. This is a demo project and does not implement production-grade authentication.

## ✨ Features

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
- Edit new tasks
- Delete new tasks
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

## 🔄 Task Workflow

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
```

## 📁 Project Structure

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
```

## 🛠️ Tech Stack

- React.js
- JavaScript
- Context API
- React Hooks
- Tailwind CSS
- Lucide React
- LocalStorage
- Vite

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/<your-username>/employee-task-management-system.git

# Go to the project folder
cd employee-task-management-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔮 Future Improvements

- Search and filter tasks
- Task details modal
- Due dates and overdue tasks
- Notifications
- Admin analytics dashboard
- Calendar view
- Employee profiles
- Task comments
- File attachments
- Dark/Light theme toggle
- Export tasks as CSV/PDF
- Backend and database integration
- Proper authentication and authorization
- Task history and audit logs
- Automated testing

## 📌 Project Status

✅ Completed

The core Employee Task Management System has been implemented with admin and employee workflows, task management, status tracking, Context API state management, localStorage persistence, and responsive UI.

## 👤 Author

**Sanjib Ghosh**