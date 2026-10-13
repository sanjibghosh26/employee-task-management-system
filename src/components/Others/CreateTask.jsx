import { useContext, useState } from "react";

import { Plus } from "lucide-react";

import { AuthContext } from "../../context/Authprovider";

import CustomAlert from "../common/CustomAlert";

const CreateTask = () => {
  const { userData: authdata, setUserData } =
    useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // Custom Alert State
  const [alert, setAlert] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    // Empty field check
    if (
      !taskTitle ||
      !taskDate ||
      !assignTo ||
      !category ||
      !description
    ) {
      setAlert({
        type: "warning",
        title: "Incomplete Task",
        message: "Please fill all fields before creating the task.",
      });
      return;
    }

    const employees = JSON.parse(
      localStorage.getItem("employees")
    );

    const employee = employees.find(
      (emp) => emp.id === Number(assignTo)
    );

    // Employee check
    if (!employee) {
      setAlert({
        type: "error",
        title: "Employee Not Found",
        message:
          "The selected employee could not be found. Please try again.",
      });
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: taskTitle,
      taskDescription: description,
      taskDate: taskDate,
      category: category,
    };

    employee.tasks.push(newTask);
    employee.taskNumbers.newTask += 1;

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    setUserData((prev) => ({
      ...prev,
      employeesData: employees,
    }));

    // Success Alert
    setAlert({
      type: "success",
      title: "Task Created Successfully",
      message: `Task "${taskTitle}" has been assigned to ${employee.firstName}.`,
    });

    // Clear form
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  if (!authdata) {
    return null;
  }

  return (
    <div>
      <div className="mx-auto mt-6 w-full max-w-6xl sm:mt-10">
        {/* Form Header */}
        <div className="mb-6 flex items-start gap-3 border-b border-white/5 pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
            <Plus size={22} />
          </div>

          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white sm:text-lg">
              Task Information
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
              Add the details below to create and assign a new task.
            </p>
          </div>
        </div>

        {/* start form design */}
        <form
          onSubmit={submitHandler}
          className="rounded-2xl border border-gray-700 bg-[#242424] p-4 shadow-2xl sm:p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {/* Task Title */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-300">
                Task Title
              </h3>

              <input
                type="text"
                value={taskTitle}
                onChange={(e) =>
                  setTaskTitle(e.target.value)
                }
                placeholder="Make a UI Design"
                className="w-full rounded-lg border border-gray-700 bg-[#1c1c1c] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Date */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-300">
                Date
              </h3>

              <input
                type="date"
                value={taskDate}
                onChange={(e) =>
                  setTaskDate(e.target.value)
                }
                className="w-full rounded-lg border border-gray-700 bg-[#1c1c1c] px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Assign To */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-300">
                Assign to
              </h3>

              <select
                value={assignTo}
                onChange={(e) =>
                  setAssignTo(e.target.value)
                }
                className="w-full rounded-lg border border-gray-700 bg-[#1c1c1c] px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">
                  Select Employee
                </option>

                {authdata.employeesData.map(
                  (employee) => (
                    <option
                      key={employee.id}
                      value={employee.id}
                    >
                      {employee.firstName} -{" "}
                      {employee.email}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Category */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-300">
                Category
              </h3>

              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                placeholder="Design, Development..."
                className="w-full rounded-lg border border-gray-700 bg-[#1c1c1c] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <h3 className="mb-2 text-sm font-medium text-gray-300">
                Description
              </h3>

              <textarea
                rows="5"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Detailed description of the task (Max 500 characters)"
                maxLength={500}
                className="w-full resize-none rounded-lg border border-gray-700 bg-[#1c1c1c] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-10 py-3 text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-700 active:scale-[0.98] sm:w-auto"
              >
                <Plus
                  className="mr-2 inline-block"
                  size={18}
                />
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Custom Alert */}
      {alert && (
        <CustomAlert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </div>
  );
};

export default CreateTask;