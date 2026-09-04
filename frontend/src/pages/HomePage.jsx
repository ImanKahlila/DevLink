import { Send } from "lucide-react";
import { BrandMark } from "../components/brand/BrandMark.jsx";
import { ThemeButton } from "../components/brand/ThemeButton.jsx";
import { Button } from "../components/ui/button.jsx";
import { TileMosaic } from "../shapes";

export function HomePage() {
  return (
    <main className="home-page">
      <nav className="home-nav">
        <BrandMark />
        <div className="home-nav-actions">
          <ThemeButton />
          <a href="#/login">Log in</a>
          <Button asChild>
            <a href="#/feed">
              Get started <Send size={14} />
            </a>
          </Button>
        </div>
      </nav>
      <section className="home-hero">
        <div className="hero-copy motion-in">
          <p className="eyebrow">A considered social space</p>
          <h1>
            People who
            <br />
            <em>value teamwork.</em>
          </h1>
          <p className="hero-description">
            DevLink is a thoughtful network for independent people who make
            excellent work together.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#/feed">
                Enter DevLink <Send size={15} />
              </a>
            </Button>
            <a className="text-link" href="#/search">
              Meet the community <span>-&gt;</span>
            </a>
          </div>
          <div className="availability">
            <span className="presence-dot" /> A private network for people who
            care about craft
          </div>
        </div>
        <div className="hero-art motion-in-delay">
          <TileMosaic />
        </div>
      </section>
      <div className="home-footer">
        <span>Independent by nature</span>
        <span>Generous by practice</span>
        <span>Intentional by design</span>
      </div>
    </main>
  );
}
