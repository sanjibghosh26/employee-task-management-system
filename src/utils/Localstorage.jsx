const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@gmail.com",
    password: "123employee1",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        id: "task-1",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a responsive login page with email and password fields.",
        taskDate: "2026-09-15",
        category: "Design"
      },
      {
        id: "task-2",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription:
          "Fix the responsive navigation menu issue on mobile devices.",
        taskDate: "2026-09-16",
        category: "Development"
      },
      {
        id: "task-3",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Project README",
        taskDescription:
          "Write documentation explaining project setup and usage.",
        taskDate: "2026-09-12",
        category: "Documentation"
      },
      {
        id: "task-4",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Landing Page",
        taskDescription:
          "Deploy the landing page to the production server.",
        taskDate: "2026-09-10",
        category: "Deployment"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123employee2",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        id: "task-5",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription:
          "Develop the main employee dashboard with task statistics.",
        taskDate: "2026-09-15",
        category: "Development"
      },
      {
        id: "task-6",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Connect the dashboard with the employee API.",
        taskDate: "2026-09-17",
        category: "Backend"
      },
      {
        id: "task-7",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription:
          "Update outdated project dependencies to their latest stable versions.",
        taskDate: "2026-09-11",
        category: "Maintenance"
      },
      {
        id: "task-8",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription:
          "Add unit tests for the authentication module.",
        taskDate: "2026-09-13",
        category: "Testing"
      },
      {
        id: "task-9",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Payment Bug",
        taskDescription:
          "Investigate and fix the failed payment processing issue.",
        taskDate: "2026-09-09",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@gmail.com",
    password: "123employee3",

    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        id: "task-10",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User Profile",
        taskDescription:
          "Build the user profile page with editable personal information.",
        taskDate: "2026-09-15",
        category: "Frontend"
      },
      {
        id: "task-11",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription:
          "Implement dark mode throughout the application.",
        taskDate: "2026-09-18",
        category: "UI/UX"
      },
      {
        id: "task-12",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription:
          "Design and implement the website footer.",
        taskDate: "2026-09-10",
        category: "Frontend"
      },
      {
        id: "task-13",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription:
          "Compress and optimize images for faster page loading.",
        taskDate: "2026-09-08",
        category: "Performance"
      },
      {
        id: "task-14",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Settings Page",
        taskDescription:
          "Develop an application settings page for users.",
        taskDate: "2026-09-20",
        category: "Frontend"
      },
      {
        id: "task-15",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription:
          "Resolve layout and spacing issues across different screen sizes.",
        taskDate: "2026-09-07",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@gmail.com",
    password: "123employee4",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1
    },

    tasks: [
      {
        id: "task-16",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription:
          "Create the required database tables for the application.",
        taskDate: "2026-09-16",
        category: "Database"
      },
      {
        id: "task-17",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription:
          "Build REST API endpoints for employee task management.",
        taskDate: "2026-09-18",
        category: "Backend"
      },
      {
        id: "task-18",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription:
          "Create a backup of the production database.",
        taskDate: "2026-09-12",
        category: "Database"
      },
      {
        id: "task-19",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Documentation",
        taskDescription:
          "Document all available API endpoints and parameters.",
        taskDate: "2026-09-13",
        category: "Documentation"
      },
      {
        id: "task-20",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Configuration",
        taskDescription:
          "Configure the production server for the application.",
        taskDate: "2026-09-09",
        category: "DevOps"
      },
      {
        id: "task-21",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Authentication API",
        taskDescription:
          "Implement secure login and authentication APIs.",
        taskDate: "2026-09-21",
        category: "Backend"
      },
      {
        id: "task-22",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Database Query",
        taskDescription:
          "Optimize a slow database query used by the dashboard.",
        taskDate: "2026-09-06",
        category: "Optimization"
      }
    ]
  },

  {
    id: 5,
    firstName: "Sneha",
    email: "employee5@gmail.com",
    password: "123employee5",

    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        id: "task-23",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Analytics Page",
        taskDescription:
          "Build an analytics page showing employee performance data.",
        taskDate: "2026-09-16",
        category: "Frontend"
      },
      {
        id: "task-24",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Charts",
        taskDescription:
          "Add interactive charts for displaying task statistics.",
        taskDate: "2026-09-17",
        category: "UI/UX"
      },
      {
        id: "task-25",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription:
          "Generate monthly employee performance reports.",
        taskDate: "2026-09-11",
        category: "Reporting"
      },
      {
        id: "task-26",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Chart Bug",
        taskDescription:
          "Fix incorrect values displayed in the performance charts.",
        taskDate: "2026-09-08",
        category: "Bug Fix"
      },
      {
        id: "task-27",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Export CSV",
        taskDescription:
          "Add functionality to export employee data as CSV.",
        taskDate: "2026-09-19",
        category: "Feature"
      }
    ]
  }
];

const admin = {
  id: 1,
  firstName: "Rajesh",
  email: "admin@gmail.com",
  password: "123admin"
};

export const setLocalStorage = () => {
  const existingEmployees =
    localStorage.getItem("employees");

  const existingAdmin =
    localStorage.getItem("admin");

  if (!existingEmployees) {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }

  if (!existingAdmin) {
    localStorage.setItem(
      "admin",
      JSON.stringify(admin)
    );
  }
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(
    localStorage.getItem("employees")
  );

  const adminData = JSON.parse(
    localStorage.getItem("admin")
  );

  return {
    employeesData,
    adminData
  };
};