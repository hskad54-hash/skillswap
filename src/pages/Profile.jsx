import { useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import Avatar from "../components/Avatar.jsx";
import SkillChip from "../components/SkillChip.jsx";
import { SKILLS } from "../data/skills.js";

function SkillEditor({ title, color, list, onChange }) {
  const [v, setV] = useState("");
  const add = () => {
    const s = v.trim();
    if (s && !list.some((x) => x.toLowerCase() === s.toLowerCase())) onChange([...list, s]);
    setV("");
  };
  return (
    <section className="sticker p-4">
      <h2 className={`mb-3 font-display text-xl font-bold ${color}`}>{title}</h2>
      <div className="mb-3 flex min-h-8 flex-wrap gap-1.5">
        {list.length === 0 && <span className="text-sm text-ink/60">Nothing yet</span>}
        {list.map((s) => <SkillChip key={s} name={s} onRemove={() => onChange(list.filter((x) => x !== s))} />)}
      </div>
      <div className="flex gap-2">
        <input className="field" list="skill-options" placeholder="Add a skill" value={v} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} aria-label={title} />
        <button className="btn" onClick={add} disabled={!v.trim()}>Add</button>
      </div>
    </section>
  );
}

export default function Profile({ me, setMe }) {
  return (
    <>
      <PageTitle title="My profile" sub="The more you add, the better your matches get." />
      <div className="sticker mb-5 flex max-w-3xl items-center gap-4 p-4">
        <Avatar name={me.name === "You" ? "Y U" : me.name} size="h-16 w-16" />
        <div className="flex-1">
          <p className="font-display text-xl font-bold">{me.dept} · Year {me.year}</p>
          <textarea className="field mt-2" rows={2} value={me.bio} onChange={(e) => setMe({ ...me, bio: e.target.value })} aria-label="Bio" />
        </div>
      </div>
      <datalist id="skill-options">{SKILLS.map(([n]) => <option key={n} value={n} />)}</datalist>
      <div className="grid max-w-3xl gap-5 md:grid-cols-2">
        <SkillEditor title="I can teach" color="text-forest" list={me.teach} onChange={(teach) => setMe({ ...me, teach })} />
        <SkillEditor title="I want to learn" color="text-tangerine" list={me.learn} onChange={(learn) => setMe({ ...me, learn })} />
      </div>
    </>
  );
}
