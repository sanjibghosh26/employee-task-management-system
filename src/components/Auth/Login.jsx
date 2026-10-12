import { useState } from "react";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  LogIn,
  ShieldCheck,
} from "lucide-react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    onLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0b0f0d] px-4">

      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Login Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#111714]/90 p-8 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl sm:p-10">

        {/* Top Icon */}
        <div className="mb-7 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 shadow-lg shadow-emerald-900/30">
            <ShieldCheck
              size={34}
              className="text-emerald-400"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to your Employee Management System
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5"
        >

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <div className="group relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition group-focus-within:text-emerald-400"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500/60 focus:bg-emerald-500/[0.03] focus:ring-2 focus:ring-emerald-500/10"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="group relative">
              <LockKeyhole
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition group-focus-within:text-emerald-400"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500/60 focus:bg-emerald-500/[0.03] focus:ring-2 focus:ring-emerald-500/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-emerald-400"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="group mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
          >
            <span>Login</span>

            <LogIn
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-white/5 pt-5 text-center">
          <p className="text-xs text-gray-600">
            Employee Management System
          </p>

          <p className="mt-1 text-[11px] text-gray-700">
            Secure access to your workspace
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;