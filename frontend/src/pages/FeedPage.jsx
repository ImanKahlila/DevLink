import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";
import { PostCard } from "../components/feed/PostCard.jsx";
import { posts } from "../data/mockData.js";

function CommunityCard() {
  return (
    <section className="community-card">
      <p className="eyebrow">Your circle</p>
      <h2>
        Small groups.
        <br />
        Real momentum.
      </h2>
      <div className="member-row">
        <div className="avatar avatar-orange">JR</div>
        <div className="avatar avatar-lilac">LK</div>
        <div className="avatar avatar-pink">SM</div>
        <div className="more-members">+24</div>
      </div>
      <a href="#/search">
        Explore your people <span>-&gt;</span>
      </a>
    </section>
  );
}

export function FeedPage({ onComposerOpen }) {
  return (
    <div className="content-grid">
      <section className="feed-column">
        <button className="composer-prompt" onClick={onComposerOpen}>
          <div className="avatar avatar-pink">MI</div>
          <span>What are you working through?</span>
          <Plus size={18} />
        </button>
        <div className="feed-filter">
          <span>Latest from your circle</span>
          <button>
            Following <ChevronDown size={14} />
          </button>
        </div>
        {posts.map((post) => (
          <PostCard key={post.name} post={post} />
        ))}
      </section>
      <aside className="right-rail">
        <CommunityCard />
        <div className="rail-section">
          <div className="rail-title">
            <h3>Now in focus</h3>
            <SlidersHorizontal size={15} />
          </div>
          <a href="#/search">
            Creative partnership <span>48 people</span>
          </a>
          <a href="#/search">
            Thoughtful product work <span>32 people</span>
          </a>
          <a href="#/search">
            Open for projects <span>19 people</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
