import { useEffect, useRef, type ReactNode } from "react";
import { HashRouter, Link, MemoryRouter, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ProfileMenu } from "./components/ProfileMenu";
import { PageBoundary } from "./components/safety";
import { Icon, Toaster } from "./components/ui";
import { migrateLegacy, restoreSession, useAccounts, useCurrentAccount } from "./lib/accounts";
import { useStore } from "./lib/store";
import { Welcome } from "./pages/Welcome";
import { Coach } from "./pages/Coach";
import { Food } from "./pages/Food";
import { Plan } from "./pages/Plan";
import { Profile } from "./pages/Profile";
import { Progress } from "./pages/Progress";
import { Today } from "./pages/Today";
import { Train } from "./pages/Train";

const NAV = [
  { to: "/", label: "Today", icon: Icon.today, end: true },
  { to: "/train", label: "Train", icon: Icon.train },
  { to: "/food", label: "Food", icon: Icon.food },
  { to: "/progress", label: "Progress", icon: Icon.progress },
  { to: "/coach", label: "Coach", icon: Icon.coach },
  { to: "/plan", label: "Plan", icon: Icon.plan },
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

migrateLegacy();
void restoreSession();

function Gate() {
  const signedIn = useAccounts((s) => s.currentId);
  const nav = useNavigate();
  const prev = useRef(signedIn);
  useEffect(() => {
    if (signedIn && signedIn !== prev.current) nav("/");
    prev.current = signedIn;
  }, [signedIn, nav]);
  if (!signedIn) return <><Welcome /><Toaster /></>;
  return <Shell />;
}

function Shell() {
  const active = useStore((s) => s.active);
  const acc = useCurrentAccount();
  const { pathname } = useLocation();
  return (
    <>
      <ScrollTop />
      <header className="top">
        <div className="top-in">
          <Link to="/" className="brand" aria-label="Rep Ledger home">{Icon.logo}Rep Ledger</Link>
          {active && <NavLink to="/train" className="pill warn" style={{ textDecoration: "none" }}>● In session</NavLink>}
          <nav className="topnav" aria-label="Main">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>)}
          </nav>
          {acc && <ProfileMenu />}
        </div>
      </header>
      <main className="page">
        <PageBoundary resetKey={pathname}>
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/train" element={<Train />} />
            <Route path="/food" element={<Food />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Today />} />
          </Routes>
        </PageBoundary>
      </main>
      <nav className="botnav" aria-label="Main">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end}>{n.icon}<span>{n.label}</span></NavLink>
        ))}
      </nav>
      <Toaster />
    </>
  );
}

/**
 * In a normal browser tab the page lives in the URL (#/food), so refresh and
 * back/forward work. Inside an embedded preview (an iframe, or a blob/about/data
 * document) changing the URL can navigate the frame away and leave a blank
 * screen, so there the router keeps the page in memory instead.
 */
function pickRouter(): (p: { children: ReactNode }) => ReactNode {
  let embedded = false;
  try {
    embedded = window.self !== window.top;
  } catch {
    embedded = true;
  }
  const odd = !/^(https?|file):$/.test(location.protocol);
  if (embedded || odd) {
    let start = "/";
    try { start = sessionStorage.getItem("rl.route") || "/"; } catch { /* storage blocked */ }
    return ({ children }) => <MemoryRouter initialEntries={[start]}>{children}<RememberRoute /></MemoryRouter>;
  }
  return ({ children }) => <HashRouter>{children}</HashRouter>;
}
function RememberRoute() {
  const { pathname } = useLocation();
  useEffect(() => { try { sessionStorage.setItem("rl.route", pathname); } catch { /* storage blocked */ } }, [pathname]);
  return null;
}
const Router = pickRouter();

export function App() {
  return (
    <Router>
      <Gate />
    </Router>
  );
}
