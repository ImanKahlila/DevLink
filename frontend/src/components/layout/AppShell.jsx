import {
  Bell,
  Compass,
  LayoutGrid,
  LogOut,
  Plus,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { pageTitles } from "../../data/mockData.js";
import { useTheme } from "../../providers/ThemeProvider.jsx";
import { BrandMark } from "../brand/BrandMark.jsx";
import { ThemeButton } from "../brand/ThemeButton.jsx";

const icons = { LayoutGrid, Compass, UserRound, Settings };

export function AppShell({ route, children, onComposerOpen }) {
  const { colorValues } = useTheme();
  const title = pageTitles[route] || pageTitles.feed;
  const navItems = [
    { id: "feed", label: "Feed", icon: "LayoutGrid" },
    { id: "search", label: "Discover", icon: "Compass" },
    { id: "profile", label: "Profile", icon: "UserRound" },
    { id: "settings", label: "Settings", icon: "Settings" },
  ];

  return (
    <div
      className="app-shell"
      style={{
        "--accent-one": colorValues.accentColor_1,
        "--accent-two": colorValues.accentColor_2,
      }}
    >
      <aside className="side-nav">
        <BrandMark />
        <nav>
          {navItems.map(({ id, label, icon }) => {
            const Icon = icons[icon];
            return (
              <a
                key={id}
                className={route === id ? "nav-link active" : "nav-link"}
                href={`#/${id}`}
              >
                <Icon size={17} />
                <span>{label}</span>
              </a>
            );
          })}
        </nav>
        <div className="side-bottom">
          <ThemeButton showLabel />
          <a className="nav-link" href="#/login">
            <LogOut size={17} />
            <span>Log out</span>
          </a>
        </div>
      </aside>
      <div className="mobile-nav">
        <BrandMark />
        <div>
          <a href="#/search" className="icon-button" aria-label="Search">
            <Search size={17} />
          </a>
          <ThemeButton />
        </div>
      </div>
      <main className="app-main">
        <header className="page-header">
          <div>
            <p className="eyebrow">DevLink / {route.replace("-", " ")}</p>
            <h1>{title[0]}</h1>
            <p>{title[1]}</p>
          </div>
          <div className="header-actions">
            <button className="icon-button has-dot" aria-label="Notifications">
              <Bell size={17} />
            </button>
            <button className="avatar avatar-small" aria-label="View profile">
              MI
            </button>
          </div>
        </header>
        {children}
      </main>
      <button
        className="floating-compose"
        onClick={onComposerOpen}
        aria-label="Create post"
      >
        <Plus size={21} />
      </button>
    </div>
  );
}
