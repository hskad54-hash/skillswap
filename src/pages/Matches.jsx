import { useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import PersonCard from "../components/PersonCard.jsx";
import RequestDialog from "../components/RequestDialog.jsx";
import SkillChip from "../components/SkillChip.jsx";
import { STUDENTS } from "../data/students.js";
import { matchWith } from "../utils/matching.js";

export default function Matches({ me, requests, sendRequest, goProfile }) {
  const [target, setTarget] = useState(null);
  const ranked = STUDENTS.map((p) => ({ p, m: matchWith(me, p) })).filter((x) => x.m.score > 0)
    .sort((a, b) => Number(b.m.mutual) - Number(a.m.mutual) || b.m.score - a.m.score);

  return (
    <>
      <PageTitle title="Your matches" sub="Skill swaps are people who can teach what you want while wanting what you can teach." />
      {me.teach.length + me.learn.length === 0 || ranked.length === 0 ? (
        <div className="sticker p-6">
          <p className="mb-3 text-sm">No matches yet. Add what you can teach and what you want to learn.</p>
          <button className="btn" onClick={goProfile}>Edit my profile</button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ranked.map(({ p, m }) => (
            <PersonCard key={p.id} person={p} me={me} actionLabel={m.mutual ? "Propose a swap" : m.theyTeachMe.length ? "Ask to learn" : "Offer to teach"}
              done={requests.some((r) => r.personId === p.id)} onAction={() => setTarget({ p, m })}
              note={
                <div className="rounded-xl border-2 border-dashed border-ink/40 bg-paper p-2.5 text-xs">
                  {m.mutual && <p className="mb-1 font-bold text-forest">★ Perfect swap</p>}
                  {m.theyTeachMe.length > 0 && <p className="flex flex-wrap items-center gap-1">They teach you: {m.theyTeachMe.map((s) => <SkillChip key={s} name={s} />)}</p>}
                  {m.iTeachThem.length > 0 && <p className="mt-1 flex flex-wrap items-center gap-1">You teach them: {m.iTeachThem.map((s) => <SkillChip key={s} name={s} />)}</p>}
                </div>
              } />
          ))}
        </div>
      )}
      {target && (
        <RequestDialog person={target.p} verb={target.m.mutual ? "Swap skills with" : "Connect with"}
          skills={target.m.theyTeachMe.length ? target.m.theyTeachMe : target.m.iTeachThem} onClose={() => setTarget(null)}
          onSend={(r) => { sendRequest({ ...r, personId: target.p.id, name: target.p.name }); setTarget(null); }} />
      )}
    </>
  );
}
