import { useContext, useState } from "react";

import {
  Trash2,
  Pencil,
  X,
  CalendarDays,
  Tag,
  FileText,
} from "lucide-react";

import { AuthContext } from "../../context/Authprovider";

import CustomAlert from "../common/CustomAlert";

const AllTask = ({ data }) => {
  const { userData: authdata, setUserData } =
    useContext(AuthContext);

  // Custom Alert
  const [alert, setAlert] = useState(null);

  // Edit Modal
  const [editTask, setEditTask] = useState(null);

  // Edit Form
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editCategory, setEditCategory] = useState("");

  // Delete Confirmation Data
  const [deleteTask, setDeleteTask] = useState(null);

  // View All Tasks
  const [expandedEmployees, setExpandedEmployees] =
    useState({});

  // -----------------------------
  // TOGGLE EMPLOYEE TASKS
  // -----------------------------
  const toggleEmployeeTasks = (employeeId) => {
    setExpandedEmployees((prev) => ({
      ...prev,
      [employeeId]: !prev[employeeId],
    }));
  };

  // -----------------------------
  // EDIT TASK
  // -----------------------------
  const handleEditTask = (employeeId, taskId) => {
    if (!authdata?.employeesData) return;

    const employee = authdata.employeesData.find(
      (emp) => emp.id === employeeId
    );

    if (!employee) {
      setAlert({
        type: "error",
        title: "Employee Not Found",
        message:
          "The selected employee could not be found.",
      });
      return;
    }

    const task = employee.tasks.find(
      (task) => task.id === taskId
    );

    if (!task) {
      setAlert({
        type: "error",
        title: "Task Not Found",
        message:
          "The selected task could not be found.",
      });
      return;
    }

    // Only New Task can be edited
    if (!task.newTask) {
      setAlert({
        type: "permission",
        title: "Action Not Allowed",
        message:
          "Only New Tasks can be edited.",
      });
      return;
    }

    // Existing task data
    setEditTitle(task.taskTitle);
    setEditDescription(task.taskDescription);
    setEditDate(task.taskDate);
    setEditCategory(task.category);

    setEditTask({
      employeeId,
      taskId,
      taskTitle: task.taskTitle,
    });
  };

  // -----------------------------
  // SAVE EDITED TASK
  // -----------------------------
  const handleSaveEdit = () => {
    if (
      !editTitle.trim() ||
      !editDescription.trim() ||
      !editDate ||
      !editCategory.trim()
    ) {
      setAlert({
        type: "warning",
        title: "Incomplete Information",
        message:
          "Please fill all fields before saving the task.",
      });
      return;
    }

    if (!authdata?.employeesData || !editTask) {
      return;
    }

    const updatedEmployees =
      authdata.employeesData.map((emp) => {
        if (emp.id !== editTask.employeeId) {
          return emp;
        }

        return {
          ...emp,

          tasks: emp.tasks.map((task) => {
            if (task.id !== editTask.taskId) {
              return task;
            }

            return {
              ...task,
              taskTitle: editTitle.trim(),
              taskDescription:
                editDescription.trim(),
              taskDate: editDate,
              category: editCategory.trim(),
            };
          }),
        };
      });

    // localStorage update
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    // Context update
    setUserData((prev) => ({
      ...prev,
      employeesData: updatedEmployees,
    }));

    // Modal close
    setEditTask(null);

    // Success Alert
    setAlert({
      type: "success",
      title: "Task Updated Successfully",
      message: `"${editTitle}" has been updated successfully.`,
    });
  };

  // -----------------------------
  // DELETE TASK CLICK
  // -----------------------------
  const handleDeleteTask = (employeeId, taskId) => {
    if (!authdata?.employeesData) return;

    const employee = authdata.employeesData.find(
      (emp) => emp.id === employeeId
    );

    if (!employee) {
      setAlert({
        type: "error",
        title: "Employee Not Found",
        message:
          "The selected employee could not be found.",
      });
      return;
    }

    const task = employee.tasks.find(
      (task) => task.id === taskId
    );

    if (!task) {
      setAlert({
        type: "error",
        title: "Task Not Found",
        message:
          "The selected task could not be found.",
      });
      return;
    }

    // Only New Task can be deleted
    if (!task.newTask) {
      setAlert({
        type: "permission",
        title: "Action Not Allowed",
        message:
          "Only New Tasks can be deleted.",
      });
      return;
    }

    // Custom confirmation
    setDeleteTask({
      employeeId,
      taskId,
      taskTitle: task.taskTitle,
    });
  };

  // -----------------------------
  // CONFIRM DELETE
  // -----------------------------
  const confirmDeleteTask = () => {
    if (!authdata?.employeesData || !deleteTask) {
      return;
    }

    const updatedEmployees =
      authdata.employeesData.map((emp) => {
        if (emp.id !== deleteTask.employeeId) {
          return emp;
        }

        return {
          ...emp,

          tasks: emp.tasks.filter(
            (task) =>
              task.id !== deleteTask.taskId
          ),

          taskNumbers: {
            ...emp.taskNumbers,

            newTask: Math.max(
              0,
              emp.taskNumbers.newTask - 1
            ),
          },
        };
      });

    // localStorage update
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    // Context update
    setUserData((prev) => ({
      ...prev,
      employeesData: updatedEmployees,
    }));

    const deletedTitle =
      deleteTask.taskTitle;

    // Delete modal close
    setDeleteTask(null);

    // Success Alert
    setAlert({
      type: "success",
      title: "Task Deleted Successfully",
      message: `"${deletedTitle}" has been deleted.`,
    });
  };

  return (
    <>
      {/* ================================= */}
      {/* ALL TASKS */}
      {/* ================================= */}

      <div
        id="all-tasks"
        className="bg-[#242424] p-3 sm:p-5 mt-6 max-h-[600px] overflow-y-auto overflow-x-hidden rounded-xl shadow-md"
      >
        {data.map((employee) => {
          // -----------------------------
          // TASKS TO SHOW
          // -----------------------------
          const isExpanded =
            expandedEmployees[employee.id];

          const tasksToShow = isExpanded
            ? employee.tasks
            : employee.tasks.slice(0, 1);

          return (
            <div
              key={employee.id}
              className="bg-[#1c1c1c] rounded-xl p-3 sm:p-5 mb-6 border border-gray-800"
            >
              {/* Employee Header */}
              <div className="flex flex-col gap-4 mb-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Employee Info */}
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold break-words">
                    {employee.firstName}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1 break-words">
                    Employee ID: {employee.id}
                  </p>

                  <p className="text-sm text-gray-400 break-words">
                    {employee.email}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                  {/* In Progress */}
                  <div className="bg-green-600/60 border border-green-500/20 rounded-lg px-4 py-3 sm:px-5">
                    <p className="text-green-400 text-sm">
                      In Progress
                    </p>

                    <h3 className="text-xl font-bold text-green-400">
                      {employee.taskNumbers.active}
                    </h3>
                  </div>

                  {/* New Task */}
                  <div className="bg-blue-700 border border-blue-500/20 rounded-lg px-4 py-3 sm:px-5">
                    <p className="text-blue-400 text-sm">
                      New Task
                    </p>

                    <h3 className="text-xl font-bold text-blue-400">
                      {employee.taskNumbers.newTask}
                    </h3>
                  </div>

                  {/* Completed */}
                  <div className="bg-gray-600/50 border border-gray-500/20 rounded-lg px-4 py-3 sm:px-5">
                    <p className="text-gray-300 text-sm">
                      Completed
                    </p>

                    <h3 className="text-xl font-bold text-gray-300">
                      {employee.taskNumbers.completed}
                    </h3>
                  </div>

                  {/* Failed */}
                  <div className="bg-red-700 border border-red-500/20 rounded-lg px-4 py-3 sm:px-5">
                    <p className="text-red-400 text-sm">
                      Failed
                    </p>

                    <h3 className="text-xl font-bold text-red-400">
                      {employee.taskNumbers.failed}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <h3 className="text-lg font-semibold mb-3">
                Tasks
              </h3>

              <div className="space-y-3">
                {tasksToShow.map((task) => {
                  let status = "";
                  let statusClass = "";

                  if (task.active) {
                    status = "In Progress";

                    statusClass =
                      "bg-green-600 text-green-400 border border-green-500/30";
                  } else if (task.newTask) {
                    status = "New Task";

                    statusClass =
                      "bg-blue-600 text-blue-400 border border-blue-500/30";
                  } else if (task.completed) {
                    status = "Completed";

                    statusClass =
                      "bg-gray-600 text-gray-300 border border-gray-500/30";
                  } else if (task.failed) {
                    status = "Failed";

                    statusClass =
                      "bg-red-600 text-red-400 border border-red-500/30";
                  }

                  return (
                    <div
                      key={task.id}
                      className="bg-[#242424] rounded-lg px-3 py-4 sm:px-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border border-gray-800"
                    >
                      {/* Task Information */}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-lg break-words">
                          {task.taskTitle}
                        </h4>

                        <p className="text-sm text-gray-400 mt-1 break-words">
                          {task.taskDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-sm">
                          <span className="text-gray-300 break-words">
                            Category: {task.category}
                          </span>

                          <span className="text-gray-400 break-words">
                            Date: {task.taskDate}
                          </span>
                        </div>
                      </div>

                      {/* Status + Actions */}
                      <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-nowrap">
                        {/* Status */}
                        <div
                          className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium ${statusClass}`}
                        >
                          {status}
                        </div>

                        {/* New Task Actions */}
                        {task.newTask && (
                          <div className="flex items-center gap-2">
                            {/* Edit */}
                            <button
                              onClick={() =>
                                handleEditTask(
                                  employee.id,
                                  task.id
                                )
                              }
                              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition"
                              title="Edit New Task"
                            >
                              <Pencil size={18} />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() =>
                                handleDeleteTask(
                                  employee.id,
                                  task.id
                                )
                              }
                              className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition"
                              title="Delete New Task"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ================================= */}
              {/* VIEW ALL TASKS BUTTON */}
              {/* ================================= */}

              {employee.tasks.length > 1 && (
                <div className="flex justify-center mt-5">
                  <button
                    onClick={() =>
                      toggleEmployeeTasks(
                        employee.id
                      )
                    }
                    className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:bg-white/5 hover:border-gray-500 transition"
                  >
                   {isExpanded ? "Show Less ↑" : "View All Tasks →"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================================= */}
      {/* DELETE CONFIRMATION MODAL */}
      {/* ================================= */}

      {deleteTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-[calc(100%-2rem)] max-w-md bg-[#242424] border border-gray-700 rounded-2xl p-5 sm:p-7 shadow-2xl">
            {/* Close */}
            <button
              onClick={() =>
                setDeleteTask(null)
              }
              className="absolute right-4 top-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
              <Trash2 size={30} />
            </div>

            <div className="text-center mt-5">
              <h2 className="text-xl font-semibold text-white">
                Delete Task?
              </h2>

              <p className="text-sm text-gray-400 mt-2 leading-6">
                Are you sure you want to delete
                <span className="text-white font-medium">
                  {" "}
                  "{deleteTask.taskTitle}"
                </span>
                ?
              </p>

              <p className="text-xs text-gray-500 mt-2">
                This action cannot be undone.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 mt-7 sm:flex-row">
              <button
                onClick={() =>
                  setDeleteTask(null)
                }
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={confirmDeleteTask}
                className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================= */}
      {/* EDIT TASK MODAL */}
      {/* ================================= */}

      {editTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto bg-[#242424] border border-gray-700 rounded-2xl p-4 sm:p-7 shadow-2xl">
            {/* Close */}
            <button
              onClick={() =>
                setEditTask(null)
              }
              className="absolute right-4 top-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Pencil size={22} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-xl font-semibold">
                    Edit Task
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    Update the task information below.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Title */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <FileText size={16} />
                  Task Title
                </label>

                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) =>
                    setEditTitle(e.target.value)
                  }
                  className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                />
              </div>

              {/* Description */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <FileText size={16} />
                  Description
                </label>

                <textarea
                  rows="4"
                  maxLength={500}
                  value={editDescription}
                  onChange={(e) =>
                    setEditDescription(
                      e.target.value
                    )
                  }
                  className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white outline-none resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                />
              </div>

              {/* Date + Category */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <CalendarDays size={16} />
                    Date
                  </label>

                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) =>
                      setEditDate(e.target.value)
                    }
                    className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Tag size={16} />
                    Category
                  </label>

                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) =>
                      setEditCategory(
                        e.target.value
                      )
                    }
                    className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                  />
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-col gap-3 mt-7 sm:flex-row">
              <button
                onClick={() =>
                  setEditTask(null)
                }
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveEdit}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================= */}
      {/* CUSTOM ALERT */}
      {/* ================================= */}

      {alert && (
        <CustomAlert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
};

export default AllTask;