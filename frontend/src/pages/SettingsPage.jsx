import { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Switch } from "../components/ui/switch.jsx";
import { useTheme } from "../providers/ThemeProvider.jsx";

export function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [digest, setDigest] = useState(true);
  const [presence, setPresence] = useState(true);
  return (
    <div className="settings-page">
      <section className="settings-nav">
        <a className="active" href="#/settings">
          Account
        </a>
        <a href="#/settings">Appearance</a>
        <a href="#/settings">Notifications</a>
        <a href="#/settings">Privacy</a>
      </section>
      <section className="settings-content">
        <div className="settings-section">
          <div>
            <p className="eyebrow">Profile</p>
            <h2>Your public presence</h2>
          </div>
          <div className="settings-profile">
            <div className="avatar avatar-profile">MI</div>
            <div>
              <strong>Maris Ibe</strong>
              <span>maris@devlink.co</span>
            </div>
            <Button variant="secondary" size="sm">
              Change photo
            </Button>
          </div>
          <label>
            Display name
            <Input defaultValue="Maris Ibe" />
          </label>
          <label>
            Headline
            <Input defaultValue="Independent creative director" />
          </label>
        </div>
        <div className="settings-section">
          <div>
            <p className="eyebrow">Appearance</p>
            <h2>Set the atmosphere</h2>
          </div>
          <div className="setting-row">
            <div>
              <strong>Dark mode</strong>
              <span>Use the darker DevLink canvas.</span>
            </div>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
          </div>
        </div>
        <div className="settings-section">
          <div>
            <p className="eyebrow">Notifications</p>
            <h2>Stay in the loop</h2>
          </div>
          <div className="setting-row">
            <div>
              <strong>Weekly circle digest</strong>
              <span>The week’s thoughtful activity, once a week.</span>
            </div>
            <Switch checked={digest} onCheckedChange={setDigest} />
          </div>
          <div className="setting-row">
            <div>
              <strong>Visible availability</strong>
              <span>Let your circle know you are around.</span>
            </div>
            <Switch checked={presence} onCheckedChange={setPresence} />
          </div>
        </div>
      </section>
    </div>
  );
}
