import { X, CalendarDays, Tag } from "lucide-react";

const FailedTask = ({ data }) => {
  return (
    <article className="flex h-[320px] w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-red-400/10 bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-950/20 sm:h-[340px] lg:h-[360px] lg:w-[320px]">
      {/* Top */}
      <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
        <div className="flex min-w-0 items-center gap-2">
          <Tag size={15} className="shrink-0 text-red-100" />

          <span className="truncate rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold">
            {data.category}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 text-xs text-red-100">
          <CalendarDays size={14} />
          <span>{data.taskDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5">
        <h2 className="line-clamp-2 text-lg font-bold leading-6 sm:text-xl">
          {data.taskTitle}
        </h2>

        <p className="mt-3 line-clamp-5 text-sm leading-6 text-red-100">
          {data.taskDescription}
        </p>
      </div>

      {/* Status */}
      <div className="mt-auto p-4 sm:p-5">
        <button
          disabled
          className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-red-950/30 py-3 text-sm font-semibold text-red-100"
        >
          <X size={18} />
          Failed
        </button>
      </div>
    </article>
  );
};

export default FailedTask;