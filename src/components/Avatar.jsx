const COLORS = ["bg-sun", "bg-blush", "bg-mint", "bg-sky", "bg-lilac", "bg-orange-200"];

export default function Avatar({ name, size = "h-12 w-12" }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  const color = COLORS[[...name].reduce((s, c) => s + c.charCodeAt(0), 0) % COLORS.length];
  return <span className={`grid ${size} shrink-0 place-items-center rounded-full border-2 border-ink font-display text-lg font-bold ${color}`}>{initials}</span>;
}
