import { useState } from "react";
import Avatar from "./Avatar.jsx";

const SLOTS = ["Weekday evening", "Weekend morning", "Weekend afternoon", "Between classes"];

export default function RequestDialog({ person, skills, verb, onSend, onClose }) {
  const [skill, setSkill] = useState(skills[0] || "");
  const [when, setWhen] = useState(SLOTS[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-ink/50 p-4" role="dialog" aria-modal="true" aria-label="Send request">
      <div className="sticker w-full max-w-md space-y-3 p-5">
        <div className="flex items-center gap-3">
          <Avatar name={person.name} />
          <h2 className="font-display text-xl font-bold">{verb} {person.name.split(" ")[0]}</h2>
        </div>
        {skills.length > 0 ? (
          <label className="block text-sm font-bold">Skill
            <select className="field mt-1" value={skill} onChange={(e) => setSkill(e.target.value)}>{skills.map((s) => <option key={s}>{s}</option>)}</select>
          </label>
        ) : <p className="text-sm text-ink/70">No exact skill match. Say what you have in mind below.</p>}
        <label className="block text-sm font-bold">When works for you?
          <select className="field mt-1" value={when} onChange={(e) => setWhen(e.target.value)}>{SLOTS.map((s) => <option key={s}>{s}</option>)}</select>
        </label>
        <label className="block text-sm font-bold">Message
          <textarea className="field mt-1" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Say hi and what you'd like to get out of it" />
        </label>
        <div className="flex justify-end gap-2">
          <button className="btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn" disabled={!message.trim()} onClick={() => onSend({ skill: skill || "Something else", when, message: message.trim() })}>Send</button>
        </div>
      </div>
    </div>
  );
}
