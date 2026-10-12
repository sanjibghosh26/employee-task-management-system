import {
  ListTodo,
  CircleX,
  RotateCwClock,
  CircleCheck,
} from "lucide-react";

const TaskListNumbers = ({ data }) => {
  const cards = [
    {
      title: "New Task",
      value: data.taskNumbers.newTask,
      icon: ListTodo,
      style: "from-blue-500 to-blue-500/40 border-blue-500/20 text-blue-400",
    },
    {
      title: "Failed Task",
      value: data.taskNumbers.failed,
      icon: CircleX,
      style: "from-red-500/20 to-red-500/5 border-red-500/20 text-red-400",
    },
    {
      title: "Active Task",
      value: data.taskNumbers.active,
      icon: RotateCwClock,
      style: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400",
    },
    {
      title: "Completed Task",
      value: data.taskNumbers.completed,
      icon: CircleCheck,
      style: "from-slate-500/20 to-slate-500/5 border-slate-500/20 text-slate-300",
    },
  ];

  return (
    <section className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${card.style}`}
          >
            {/* Glow */}
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/[0.03] blur-2xl transition-all duration-300 group-hover:scale-150" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {card.value}
                </p>

                <p className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">
                  {card.title}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.06] p-2">
                <Icon size={19} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TaskListNumbers;