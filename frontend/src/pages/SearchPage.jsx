import { MoreHorizontal, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { people } from "../data/mockData.js";

export function SearchPage() {
  const [query, setQuery] = useState("");
  return (
    <section className="discover-page">
      <div className="search-field">
        <Search size={20} />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search people, skills, or projects"
        />
        <kbd>Cmd K</kbd>
      </div>
      <div className="topic-tabs">
        <button className="active">For you</button>
        <button>People</button>
        <button>Projects</button>
        <button>Topics</button>
      </div>
      <div className="discover-intro">
        <p className="eyebrow">A few good people</p>
        <h2>Built around shared standards.</h2>
      </div>
      <div className="people-grid">
        {people.map((person) => (
          <article className="person-card" key={person.name}>
            <div className={`avatar avatar-large avatar-${person.color}`}>
              {person.initials}
            </div>
            <button
              className="icon-button person-menu"
              aria-label={`More options for ${person.name}`}
            >
              <MoreHorizontal size={18} />
            </button>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
            <div className="person-tags">
              <span>Available</span>
              <span>Remote</span>
            </div>
            <Button variant="secondary" size="sm">
              View profile
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
