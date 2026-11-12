import { catOf, CAT_COLOR } from "../data/skills.js";

export default function SkillChip({ name, onRemove, highlight }) {
  const color = CAT_COLOR[catOf(name)] || "bg-white";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-bold ${color} ${highlight ? "ring-2 ring-tangerine ring-offset-1" : ""}`}>
      {name}
      {onRemove && <button onClick={onRemove} aria-label={`Remove ${name}`} className="ml-0.5 text-ink/60 hover:text-ink">×</button>}
    </span>
  );
}
