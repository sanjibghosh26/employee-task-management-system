import ActiveTask from "./ActiveTask";
import Completed from "./Completed";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const Tasklist = ({ data }) => {
  return (
    <section className="mt-6 sm:mt-8">
      {/* Section Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            My Tasks
          </h2>

          <p className="text-xs text-gray-500 sm:text-sm">
            Manage your assigned tasks
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400">
          {data.tasks.length} Tasks
        </span>
      </div>

      {/* Task Cards */}
      <div
        id="tasklist"
        className="
          w-full
          rounded-2xl
          border border-white/5
          bg-white/[0.015]

          /* Mobile */
          grid
          grid-cols-1
          gap-4
          max-h-[520px]
          overflow-y-auto
          overflow-x-hidden
          p-3

          /* Tablet */
          sm:grid-cols-2
          sm:max-h-[620px]
          sm:gap-5
          sm:p-4

          /* Desktop */
          lg:flex
          lg:max-h-none
          lg:min-h-[430px]
          lg:items-stretch
          lg:justify-start
          lg:overflow-x-auto
          lg:overflow-y-hidden
          lg:flex-nowrap
        "
      >
        {data.tasks.map((task) => {
          if (task.active) {
            return (
              <ActiveTask
                key={task.id}
                data={task}
                employeeId={data.id}
              />
            );
          }

          if (task.newTask) {
            return (
              <NewTask
                key={task.id}
                data={task}
                employeeId={data.id}
              />
            );
          }

          if (task.completed) {
            return <Completed key={task.id} data={task} />;
          }

          if (task.failed) {
            return <FailedTask key={task.id} data={task} />;
          }

          return null;
        })}
      </div>
    </section>
  );
};

export default Tasklist;