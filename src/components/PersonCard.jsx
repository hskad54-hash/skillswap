import Avatar from "./Avatar.jsx";
import SkillChip from "./SkillChip.jsx";

export default function PersonCard({ person, me, actionLabel, onAction, done, note }) {
  const wanted = (s) => me.learn.some((l) => l.toLowerCase() === s.toLowerCase());
  const offered = (s) => me.teach.some((t) => t.toLowerCase() === s.toLowerCase());
  return (
    <article className="sticker sticker-hover flex flex-col gap-3 p-4">
      <div className="flex items-center gap-3">
        <Avatar name={person.name} />
        <div>
          <h3 className="font-display text-lg font-bold leading-tight">{person.name}</h3>
          <p className="text-xs text-ink/60">{person.dept} · Year {person.year}</p>
        </div>
      </div>
      <p className="text-sm text-ink/80">{person.bio}</p>
      <div>
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-forest">Can teach</p>
        <div className="flex flex-wrap gap-1.5">{person.teach.map((s) => <SkillChip key={s} name={s} highlight={wanted(s)} />)}</div>
      </div>
      <div>
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-tangerine">Wants to learn</p>
        <div className="flex flex-wrap gap-1.5">{person.learn.map((s) => <SkillChip key={s} name={s} highlight={offered(s)} />)}</div>
      </div>
      {note}
      <button className={`${done ? "btn-ghost" : "btn"} mt-auto`} disabled={done} onClick={onAction}>{done ? "Request sent ✓" : actionLabel}</button>
    </article>
  );
}
