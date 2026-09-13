import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const { darkMode, toggleTheme } = useTheme();

  const goToLogin = () => {
  window.history.pushState({}, "", "/login");
  window.dispatchEvent(new PopStateEvent("popstate"));
};

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#080b14] text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute -left-32 -top-32 h-80 w-80 rounded-full blur-3xl ${
            darkMode ? "bg-blue-600/20" : "bg-blue-200/50"
          }`}
        />

        <div
          className={`absolute -right-20 bottom-0 h-80 w-80 rounded-full blur-3xl ${
            darkMode ? "bg-purple-600/20" : "bg-purple-200/50"
          }`}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`relative z-10 border-b px-6 py-5 backdrop-blur-xl ${
          darkMode
            ? "border-white/10 bg-[#080b14]/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold">
            Code
            <span className={darkMode ? "text-cyan-400" : "text-blue-600"}>
              Mentor
            </span>
          </h1>

          {/* Navigation */}
          <div
            className={`hidden gap-7 text-sm font-semibold md:flex ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <a
              href="#"
              className={darkMode ? "text-cyan-400" : "text-blue-600"}
            >
              Dashboard
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Lessons
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Virtual Editor
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Progress
            </a>
          </div>

          {/* Theme + Profile */}
          <div className="flex items-center gap-3">
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

            <button
              onClick={goToLogin}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-white text-slate-900 hover:bg-cyan-400"
                  : "bg-slate-900 text-white hover:bg-blue-600"
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-14">

        {/* Hero Section */}
        <section className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
                darkMode
                  ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                  : "border-blue-200 bg-blue-50 text-blue-600"
              }`}
            >
              <span
                className={`h-2 w-2 animate-pulse rounded-full ${
                  darkMode ? "bg-cyan-400" : "bg-blue-500"
                }`}
              />

              Learn • Practice • Grow
            </div>

            <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Learn Coding.
              <span
                className={`block bg-gradient-to-r bg-clip-text text-transparent ${
                  darkMode
                    ? "from-cyan-300 to-purple-400"
                    : "from-blue-600 to-purple-600"
                }`}
              >
                Build Your Future.
              </span>
            </h2>

            <p
              className={`mt-6 max-w-xl text-lg leading-8 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Learn programming through interactive lessons, coding practice
              and a virtual editor designed to make your learning journey
              simple and engaging.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={goToLogin}
                className={`group rounded-xl px-7 py-4 font-bold text-white transition duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Start Learning

                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                className={`rounded-xl border px-7 py-4 font-semibold transition duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white hover:border-purple-400/50"
                    : "border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:text-purple-600"
                }`}
              >
                Open Virtual Editor
              </button>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative mx-auto w-full max-w-lg">
            <div
              className={`absolute -inset-3 rounded-3xl blur-2xl ${
                darkMode
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                  : "bg-gradient-to-r from-blue-200/60 to-purple-200/60"
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-3xl border shadow-2xl transition duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "border-white/10 bg-[#0e1422]"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Editor Header */}
              <div
                className={`flex items-center gap-2 border-b px-5 py-4 ${
                  darkMode ? "border-white/10" : "border-slate-100"
                }`}
              >
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-auto text-xs text-slate-400">
                  Virtual Editor
                </span>
              </div>

              {/* Code */}
              <div className="bg-slate-950 p-7 font-mono text-sm leading-8 text-slate-300">
                <p>
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">learnCoding</span>() {"{"}
                </p>

                <p className="pl-6">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">practice</span> ={" "}
                  <span className="text-green-400">true</span>;
                </p>

                <p className="pl-6">buildProjects();</p>

                <p className="pl-6">keepLearning();</p>

                <p>{"}"}</p>
              </div>

              {/* Editor Footer */}
              <div className="flex items-center justify-between px-6 py-5">
                <span
                  className={
                    darkMode
                      ? "text-sm text-slate-400"
                      : "text-sm text-slate-500"
                  }
                >
                  Ready to practice?
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  ● Ready
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Lessons */}
          <div
            className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Lessons
            </p>

            <h3 className="mt-2 text-3xl font-extrabold">
              24
            </h3>

            <p className="mt-2 text-xs text-blue-600">
              Available to learn
            </p>
          </div>

          {/* Streak */}
          <div
            className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm text-slate-500">
              Current Streak
            </p>

            <h3 className="mt-2 text-3xl font-extrabold">
              7 🔥
            </h3>

            <p className="mt-2 text-xs text-orange-500">
              Keep it going
            </p>
          </div>

          {/* Progress */}
          <div
            className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm text-slate-500">
              Overall Progress
            </p>

            <h3 className="mt-2 text-3xl font-extrabold">
              68%
            </h3>

            <div
              className={`mt-4 h-2 overflow-hidden rounded-full ${
                darkMode ? "bg-white/10" : "bg-slate-100"
              }`}
            >
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
          </div>

          {/* Achievements */}
          <div
            className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm text-slate-500">
              Achievements
            </p>

            <h3 className="mt-2 text-3xl font-extrabold">
              12 🏆
            </h3>

            <p className="mt-2 text-xs text-purple-600">
              Badges unlocked
            </p>
          </div>
        </section>

        {/* Bottom Cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Continue Learning */}
          <div
            className={`rounded-3xl border p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              📚
            </div>

            <p className="mt-6 text-sm font-bold text-blue-600">
              CONTINUE LEARNING
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">
              Pick up where you left off
            </h3>

            <p
              className={`mt-3 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Continue your lessons and improve your programming skills
              through practical learning and coding challenges.
            </p>

            <button className="mt-6 rounded-xl bg-blue-50 px-5 py-3 text-sm font-bold text-blue-600 transition duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white">
              Continue →
            </button>
          </div>

          {/* Virtual Editor */}
          <div
            className={`rounded-3xl border p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              💻
            </div>

            <p className="mt-6 text-sm font-bold text-purple-600">
              VIRTUAL EDITOR
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">
              Write. Run. Practice.
            </h3>

            <p
              className={`mt-3 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Practice your code inside CodeMentor using an interactive
              virtual coding environment.
            </p>

            <button className="mt-6 rounded-xl bg-purple-50 px-5 py-3 text-sm font-bold text-purple-600 transition duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white">
              Open Editor →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;