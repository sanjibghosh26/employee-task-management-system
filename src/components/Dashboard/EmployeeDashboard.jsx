import Headers from "../Others/Headers";
import TaskListNumbers from "../Others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0f1110] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1600px] px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8 xl:px-10">
        <Headers data={data} />

        <TaskListNumbers data={data} />

        <Tasklist data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;