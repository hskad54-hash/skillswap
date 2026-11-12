import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Discover from "./pages/Discover.jsx";
import Matches from "./pages/Matches.jsx";
import Projects from "./pages/Projects.jsx";
import Inbox from "./pages/Inbox.jsx";
import Profile from "./pages/Profile.jsx";
import { ME, INCOMING } from "./data/students.js";
import { PROJECTS } from "./data/projects.js";

export default function App() {
  const [tab, setTab] = useState("discover");
  const [me, setMe] = useState(ME);
  const [requests, setRequests] = useState([]);
  const [incoming, setIncoming] = useState(INCOMING);
  const [projects, setProjects] = useState(PROJECTS);

  const sendRequest = (r) => setRequests((xs) => [{ id: Date.now(), ...r }, ...xs]);
  const pending = incoming.filter((x) => x.status === "Pending").length;

  return (
    <div className="min-h-screen">
      <Sidebar tab={tab} setTab={setTab} pending={pending} />
      <main className="mx-auto max-w-6xl px-4 pb-28 pt-8 md:ml-60 md:px-8 md:pb-10">
        {tab === "discover" && <Discover me={me} requests={requests} sendRequest={sendRequest} />}
        {tab === "matches" && <Matches me={me} requests={requests} sendRequest={sendRequest} goProfile={() => setTab("profile")} />}
        {tab === "projects" && <Projects me={me} projects={projects} setProjects={setProjects} />}
        {tab === "inbox" && <Inbox incoming={incoming} setIncoming={setIncoming} requests={requests} />}
        {tab === "profile" && <Profile me={me} setMe={setMe} />}
      </main>
    </div>
  );
}
