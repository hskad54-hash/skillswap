import PageTitle from "../components/PageTitle.jsx";
import Avatar from "../components/Avatar.jsx";
import { STUDENTS } from "../data/students.js";

export default function Inbox({ incoming, setIncoming, requests }) {
  const set = (id, status) => setIncoming((xs) => xs.map((x) => (x.id === id ? { ...x, status } : x)));
  return (
    <>
      <PageTitle title="Inbox" sub="Requests people sent you, and the ones you've sent." />
      <h2 className="mb-3 font-display text-xl font-bold">Asking you</h2>
      <div className="mb-8 max-w-2xl space-y-3">
        {incoming.map((x) => {
          const p = STUDENTS.find((s) => s.id === x.from);
          return (
            <div key={x.id} className="sticker flex gap-3 p-4">
              <Avatar name={p.name} />
              <div className="flex-1">
                <p className="font-bold">{p.name} <span className="font-normal text-ink/60">wants help with {x.skill}</span></p>
                <p className="text-sm text-ink/80">{x.message}</p>
                {x.status === "Pending" ? (
                  <div className="mt-3 flex gap-2">
                    <button className="btn" onClick={() => set(x.id, "Accepted")}>Accept</button>
                    <button className="btn-ghost" onClick={() => set(x.id, "Declined")}>Not now</button>
                  </div>
                ) : <p className="mt-2 text-sm font-bold text-forest">{x.status === "Accepted" ? "Accepted. Say hi and set a time!" : "Declined"}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="mb-3 font-display text-xl font-bold">You asked</h2>
      <div className="max-w-2xl space-y-3">
        {requests.length === 0 && <p className="sticker p-4 text-sm">Nothing sent yet. Head to Discover and ask someone.</p>}
        {requests.map((r) => (
          <div key={r.id} className="sticker p-4 text-sm">
            <p className="font-bold">{r.name} <span className="font-normal text-ink/60">· {r.skill} · {r.when}</span></p>
            <p className="text-ink/80">{r.message}</p>
            <p className="mt-1 text-xs font-bold text-tangerine">Waiting for a reply</p>
          </div>
        ))}
      </div>
    </>
  );
}
