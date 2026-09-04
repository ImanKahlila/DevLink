import { Link as LinkIcon, Plus } from "lucide-react";
import { PostCard } from "../components/feed/PostCard.jsx";
import { Button } from "../components/ui/button.jsx";
import { posts } from "../data/mockData.js";
import { TileMosaic } from "../shapes";

export function ProfilePage() {
  return (
    <div className="profile-page">
      <section className="profile-hero">
        <div className="profile-mosaic">
          <TileMosaic />
        </div>
        <div className="profile-intro">
          <div className="avatar avatar-profile">MI</div>
          <p className="eyebrow">
            Brooklyn, NY <span className="presence-dot" />
          </p>
          <h2>Maris Ibe</h2>
          <p className="profile-role">
            Independent creative director and brand partner.
          </p>
          <p className="profile-bio">
            I help small teams make clear, compelling identities for the things
            they care about.
          </p>
          <div className="profile-actions">
            <Button>Edit profile</Button>
            <Button variant="secondary">
              <LinkIcon size={15} /> Copy link
            </Button>
          </div>
        </div>
        <div className="profile-stats">
          <strong>47</strong>
          <span>connections</span>
          <strong>12</strong>
          <span>shared notes</span>
        </div>
      </section>
      <div className="profile-body">
        <section>
          <div className="section-heading">
            <h2>Notes from Maris</h2>
            <a href="#/add-post">
              Write a note <Plus size={14} />
            </a>
          </div>
          <PostCard post={posts[1]} />
        </section>
        <aside>
          <div className="about-card">
            <p className="eyebrow">Working with</p>
            <h3>Independent founders and thoughtful teams.</h3>
            <div className="mini-tags">
              <span>Brand strategy</span>
              <span>Creative direction</span>
              <span>Identity systems</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
