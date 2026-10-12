import { useContext } from "react";
import { UserRound, CalendarDays, Tag } from "lucide-react";
import { AuthContext } from "../../context/Authprovider";

const NewTask = ({ data, employeeId }) => {
  const { userData: authdata, setUserData } =
    useContext(AuthContext);

  const handleAcceptTask = () => {
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

    if (!task || !task.newTask) {
      alert("Task is no longer available");
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
            newTask: false,
            active: true,
            completed: false,
            failed: false,
          };
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            newTask: Math.max(
              0,
              emp.taskNumbers.newTask - 1
            ),
            active: emp.taskNumbers.active + 1,
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

  return (
   <article className="group flex h-[360px] w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-600 to-blue-800/60 shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 sm:h-[340px] lg:h-[360px] lg:w-[320px]">
      {/* Top */}
      <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
        <div className="flex min-w-0 items-center gap-2">
          <Tag size={15} className="shrink-0 text-blue-200" />

          <span className="truncate rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
            {data.category}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 text-xs text-blue-100">
          <CalendarDays size={14} />
          <span>{data.taskDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5">
        <h2 className="line-clamp-2 text-lg font-bold leading-6 sm:text-xl">
          {data.taskTitle}
        </h2>

        <p className="mt-3 line-clamp-5 text-sm leading-6 text-blue-100">
          {data.taskDescription}
        </p>
      </div>

      {/* Action */}
      <div className="mt-auto p-4 sm:p-5">
        <button
          onClick={handleAcceptTask}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-yellow-300 active:scale-[0.98]"
        >
          <UserRound size={18} />
          Accept Task
        </button>
      </div>
    </article>
  );
};

export default NewTask;