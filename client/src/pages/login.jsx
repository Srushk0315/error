import { useTheme } from "../context/ThemeContext";

function Login() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#080b14] text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl animate-float ${
            darkMode ? "bg-blue-500/20" : "bg-blue-300/50"
          }`}
        />

        <div
          className={`absolute -right-24 top-32 h-80 w-80 rounded-full blur-3xl animate-float-reverse ${
            darkMode ? "bg-purple-500/20" : "bg-purple-300/50"
          }`}
        />

        <div
          className={`absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl animate-pulse-slow ${
            darkMode ? "bg-cyan-400/10" : "bg-cyan-200/50"
          }`}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`relative z-10 border-b px-6 py-5 backdrop-blur-xl transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#080b14]/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          <h1 className="text-2xl font-extrabold">
            Code
            <span className={darkMode ? "text-cyan-400" : "text-blue-600"}>
              Mentor
            </span>
          </h1>

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition duration-300 hover:scale-110 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-white"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </nav>

      {/* Login */}
      <main className="relative z-10 flex min-h-[calc(100vh-81px)] items-center justify-center px-6">

        {/* Login Card */}
        <div
          className={`w-full max-w-md rounded-3xl border p-8 shadow-2xl animate-card transition-colors duration-500 ${
            darkMode
              ? "border-white/10 bg-[#111827] shadow-blue-500/10"
              : "border-slate-200 bg-white shadow-blue-100"
          }`}
        >

          <h2 className="text-3xl font-extrabold">
            Login
          </h2>

          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Welcome back! Please enter your details.
          </p>

          {/* Email */}
          <div className="mt-7">
            <label
              className={`text-sm font-semibold ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:scale-[1.02] focus:border-blue-500 ${
                darkMode
                  ? "border-white/10 bg-[#0b1220] text-white placeholder:text-slate-500"
                  : "border-slate-200 bg-slate-50 placeholder:text-slate-400"
              }`}
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label
              className={`text-sm font-semibold ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:scale-[1.02] focus:border-blue-500 ${
                darkMode
                  ? "border-white/10 bg-[#0b1220] text-white placeholder:text-slate-500"
                  : "border-slate-200 bg-slate-50 placeholder:text-slate-400"
              }`}
            />
          </div>

          {/* Forgot */}
          <div className="mt-3 text-right">
            <button className="text-xs font-semibold text-blue-600 hover:text-purple-500 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login */}
          <button className="relative mt-6 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-95">

            <span className="relative z-10">
              Login
            </span>

            <span className="absolute left-[-100%] top-0 h-full w-1/2 skew-x-[-20deg] bg-white/30 animate-shine" />
          </button>

          {/* Signup */}
          <p
            className={`mt-6 text-center text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Don't have an account?{" "}
            <button className="font-bold text-blue-600 hover:text-purple-500 hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </main>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(80px, 50px) scale(1.15);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-70px, -50px) scale(1.15);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.25);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 150%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: floatReverse 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-card {
          animation: cardFloat 4s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Login;