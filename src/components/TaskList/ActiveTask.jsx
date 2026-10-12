import { useContext } from "react";
import { Check, X, CalendarDays, Tag } from "lucide-react";
import { AuthContext } from "../../context/Authprovider";

const ActiveTask = ({ data, employeeId }) => {
  const { userData: authdata, setUserData } =
    useContext(AuthContext);

  const updateTaskStatus = (status) => {
    if (!authdata?.employeesData) return;

    const employee = authdata.employeesData.find(
      (emp) => emp.id === employeeId
    );

    if (!employee) {
      alert("Employee not found");
      return;
    }

    const task = employee.tasks.find(
      (task) => task.id === data.id
    );

    if (!task || !task.active) {
      alert("Task is not active");
      return;
    }

    const updatedEmployees = authdata.employeesData.map(
      (emp) => {
        if (emp.id !== employeeId) {
          return emp;
        }

        const updatedTasks = emp.tasks.map((task) => {
          if (task.id !== data.id) {
            return task;
          }

          return {
            ...task,
            active: false,
            newTask: false,
            completed: status === "completed",
            failed: status === "failed",
          };
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            active: Math.max(
              0,
              emp.taskNumbers.active - 1
            ),
            completed:
              status === "completed"
                ? emp.taskNumbers.completed + 1
                : emp.taskNumbers.completed,
            failed:
              status === "failed"
                ? emp.taskNumbers.failed + 1
                : emp.taskNumbers.failed,
          },
        };
      }
    );

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setUserData((prev) => ({
      ...prev,
      employeesData: updatedEmployees,
    }));
  };

  const handleComplete = () => {
    updateTaskStatus("completed");
  };

  const handleFailed = () => {
    updateTaskStatus("failed");
  };

  return (
    <article className="group flex h-[320px] w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30 sm:h-[340px] lg:h-[360px] lg:w-[320px]">
      {/* Top */}
      <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
        <div className="flex min-w-0 items-center gap-2">
          <Tag size={15} className="shrink-0 text-emerald-200" />

          <span className="truncate rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold">
            {data.category}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 text-xs text-emerald-100">
          <CalendarDays size={14} />
          <span>{data.taskDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5">
        <h2 className="line-clamp-2 text-lg font-bold leading-6 sm:text-xl">
          {data.taskTitle}
        </h2>

        <p className="mt-3 line-clamp-5 text-sm leading-6 text-emerald-100">
          {data.taskDescription}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-auto grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-5">
        <button
          onClick={handleComplete}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-white/15 px-2 py-3 text-xs font-bold transition hover:bg-white/25 active:scale-95 sm:text-sm"
        >
          <Check size={17} />
          Completed
        </button>

        <button
          onClick={handleFailed}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-red-500/90 px-2 py-3 text-xs font-bold transition hover:bg-red-400 active:scale-95 sm:text-sm"
        >
          <X size={17} />
          Failed
        </button>
      </div>
    </article>
  );
};

export default ActiveTask;