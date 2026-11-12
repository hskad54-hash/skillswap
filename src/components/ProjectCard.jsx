import SkillChip from "./SkillChip.jsx";

export default function ProjectCard({ project: p, mySkills, onJoin }) {
  const fit = (r) => mySkills.some((s) => s.toLowerCase() === r.toLowerCase());
  return (
    <article className="sticker sticker-hover flex flex-col gap-3 p-4">
      <div>
        <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
        <p className="text-xs text-ink/60">Started by {p.by}</p>
      </div>
      <p className="text-sm text-ink/80">{p.desc}</p>
      <div>
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-tangerine">Looking for</p>
        <div className="flex flex-wrap gap-1.5">
          {p.roles.map((r) => (
            <button key={r} disabled={!!p.joined} onClick={() => onJoin(p.id, r)} title={p.joined ? "" : `Join as ${r}`}
              className="rounded-full disabled:cursor-default"><SkillChip name={r} highlight={fit(r)} /></button>
          ))}
        </div>
      </div>
      <p className="mt-auto text-xs text-ink/60">{p.joined ? `You offered to help with ${p.joined} ✓` : "Tap a role to offer your help. Highlighted roles match your skills."}</p>
    </article>
  );
}
