import { Send } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "../components/brand/BrandMark.jsx";
import { ThemeButton } from "../components/brand/ThemeButton.jsx";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { TileMosaic } from "../shapes";

export function LoginPage() {
  const [email, setEmail] = useState("");
  return (
    <main className="login-page">
      <div className="login-top">
        <BrandMark />
        <ThemeButton />
      </div>
      <section className="login-panel">
        <div className="login-form">
          <p className="eyebrow">Welcome back</p>
          <h1>Come on in.</h1>
          <p>Use your email to continue to DevLink.</p>
          <label>
            Email address
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <Button
            className="full-width"
            size="lg"
            onClick={() => {
              window.location.hash = "#/feed";
            }}
          >
            Continue <Send size={15} />
          </Button>
          <button className="quiet-button">Continue with Google</button>
          <p className="form-note">
            New here? <a href="#/feed">Request an invitation</a>
          </p>
        </div>
        <div className="login-art">
          <TileMosaic />
          <span>
            Make
            <br />
            things
            <br />
            matter.
          </span>
        </div>
      </section>
    </main>
  );
}
