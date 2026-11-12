import { useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import PersonCard from "../components/PersonCard.jsx";
import RequestDialog from "../components/RequestDialog.jsx";
import { CATEGORIES, catOf } from "../data/skills.js";
import { STUDENTS } from "../data/students.js";

export default function Discover({ me, requests, sendRequest }) {
  const [mode, setMode] = useState("learn");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [target, setTarget] = useState(null);

  const key = mode === "learn" ? "teach" : "learn";
  const list = STUDENTS.filter((p) => {
    const skills = p[key];
    const textOk = !q.trim() || skills.some((s) => s.toLowerCase().includes(q.trim().toLowerCase())) || p.name.toLowerCase().includes(q.trim().toLowerCase());
    return textOk && (!cat || skills.some((s) => catOf(s) === cat));
  });

  return (
    <>
      <PageTitle title="Discover" sub="Find a classmate who can teach you something, or someone who is looking for what you know." />
      <div className="mb-3 inline-flex rounded-full border-2 border-ink bg-white p-1">
        {[["learn", "I want to learn"], ["teach", "I can teach"]].map(([id, label]) => (
          <button key={id} onClick={() => setMode(id)} aria-pressed={mode === id}
            className={`rounded-full px-4 py-1.5 text-sm font-bold ${mode === id ? "bg-ink text-paper" : ""}`}>{label}</button>
        ))}
      </div>
      <input className="field mb-3 max-w-md" placeholder="Search a skill or a name, e.g. Guitar" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search" />
      <div className="mb-6 flex flex-wrap gap-2">
        {["", ...CATEGORIES].map((c) => (
          <button key={c || "all"} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border-2 border-ink px-3 py-1 text-xs font-bold ${cat === c ? "bg-tangerine text-white" : "bg-white"}`}>{c || "All"}</button>
        ))}
      </div>
      {list.length === 0 && <p className="sticker p-6 text-sm">Nobody matches yet. Try another skill, or add it to your profile so others can find you.</p>}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((p) => (
          <PersonCard key={p.id} person={p} me={me}
            actionLabel={mode === "learn" ? "Ask to learn" : "Offer to teach"}
            done={requests.some((r) => r.personId === p.id)} onAction={() => setTarget(p)} />
        ))}
      </div>
      {target && (
        <RequestDialog person={target} verb={mode === "learn" ? "Learn from" : "Teach"}
          skills={mode === "learn" ? target.teach : target.learn} onClose={() => setTarget(null)}
          onSend={(r) => { sendRequest({ ...r, personId: target.id, name: target.name }); setTarget(null); }} />
      )}
    </>
  );
}
