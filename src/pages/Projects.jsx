import { useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({ me, projects, setProjects }) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ title: "", desc: "", roles: "" });
  const roles = f.roles.split(",").map((r) => r.trim()).filter(Boolean);
  const post = () => {
    setProjects((ps) => [{ id: `p${Date.now()}`, title: f.title.trim(), by: "You", desc: f.desc.trim(), roles, joined: null }, ...ps]);
    setF({ title: "", desc: "", roles: "" }); setOpen(false);
  };
  const join = (id, role) => setProjects((ps) => ps.map((p) => (p.id === id ? { ...p, joined: role } : p)));

  return (
    <>
      <PageTitle title="Projects" sub="Got an idea but missing a skill? Post it. See something you can help with? Jump in." />
      <button className="btn mb-5" onClick={() => setOpen(!open)}>{open ? "Close" : "+ Post a project"}</button>
      {open && (
        <div className="sticker mb-6 max-w-xl space-y-3 p-4">
          <input className="field" placeholder="Project name" value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} />
          <textarea className="field" rows={3} placeholder="What are you building?" value={f.desc} onChange={(e) => setF({ ...f, desc: e.target.value })} />
          <input className="field" placeholder="Skills needed, separated by commas (UI Design, Python)" value={f.roles} onChange={(e) => setF({ ...f, roles: e.target.value })} />
          <button className="btn" disabled={!f.title.trim() || !f.desc.trim() || roles.length === 0} onClick={post}>Post it</button>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.id} project={p} mySkills={me.teach} onJoin={join} />)}
      </div>
    </>
  );
}
