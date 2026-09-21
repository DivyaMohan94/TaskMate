const starterTasks = [
  {
    title: "Create the project repo",
    status: "Done",
  },
  {
    title: "Set up the Next.js web app",
    status: "In progress",
  },
  {
    title: "Plan the first task dashboard",
    status: "Next",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto flex max-w-4xl flex-col gap-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
            Taskmate
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Build tasks. Learn the process.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            This is the first web version of Taskmate. Right now it proves that
            Next.js, TypeScript, Tailwind CSS, and ESLint are connected and
            ready for development.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">
            Setup checklist
          </h2>
          <ul className="mt-4 divide-y divide-slate-100">
            {starterTasks.map((task) => (
              <li
                className="flex items-center justify-between py-3"
                key={task.title}
              >
                <span className="text-slate-800">{task.title}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
