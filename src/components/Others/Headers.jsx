const Headers = ({ data }) => {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:gap-5 md:flex-row md:items-center md:justify-between">
      {/* Welcome */}
      <div className="min-w-0">
        <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          Employee Workspace
        </p>

        <h1 className="truncate text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Welcome {data.firstName} 👋
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-between gap-3 sm:justify-start sm:gap-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
          <p className="text-[10px] uppercase tracking-wider text-gray-500">
            Employee ID
          </p>

          <p className="text-sm font-semibold text-gray-200">
            #{data.id}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 ring-1 ring-red-500/20 transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-95"
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Headers;