export default function PageTitle({ title, sub }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-3xl font-extrabold md:text-4xl"><span className="highlight">{title}</span></h1>
      {sub && <p className="mt-2 max-w-xl text-ink/70">{sub}</p>}
    </div>
  );
}
