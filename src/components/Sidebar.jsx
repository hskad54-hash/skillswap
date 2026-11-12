const NAV = [["discover", "Discover", "🔍"], ["matches", "Matches", "🤝"], ["projects", "Projects", "🛠️"], ["inbox", "Inbox", "📬"], ["profile", "Me", "🙋"]];

export default function Sidebar({ tab, setTab, pending }) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col bg-forest p-5 text-paper md:flex">
        <div className="font-display text-3xl font-extrabold leading-none">Skill<br /><span className="text-sun">Swap</span></div>
        <p className="mt-2 text-xs text-paper/70">Teach one thing. Learn another.</p>
        <nav className="mt-8 space-y-1.5">
          {NAV.map(([id, label, icon]) => (
            <button key={id} onClick={() => setTab(id)} aria-current={tab === id ? "page" : undefined}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left font-medium ${tab === id ? "bg-sun text-ink" : "hover:bg-white/10"}`}>
              <span aria-hidden>{icon}</span>{label}
              {id === "inbox" && pending > 0 && <span className="ml-auto rounded-full bg-tangerine px-2 text-xs font-bold text-white">{pending}</span>}
            </button>
          ))}
        </nav>
      </aside>
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 bg-forest text-paper md:hidden">
        {NAV.map(([id, label, icon]) => (
          <button key={id} onClick={() => setTab(id)} aria-current={tab === id ? "page" : undefined}
            className={`py-2 text-xs ${tab === id ? "bg-sun font-bold text-ink" : ""}`}>
            <span className="block text-lg" aria-hidden>{icon}</span>{label}
          </button>
        ))}
      </nav>
    </>
  );
}
