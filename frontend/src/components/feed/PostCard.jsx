import { Bookmark, Heart, MoreHorizontal, Send } from "lucide-react";

export function PostCard({ post }) {
  return (
    <article className="post-card">
      <header>
        <div className={`avatar avatar-${post.color}`}>{post.initials}</div>
        <div>
          <strong>{post.name}</strong>
          <span>
            {post.role} <b>·</b> {post.time}
          </span>
        </div>
        <button className="icon-button post-menu" aria-label="Post options">
          <MoreHorizontal size={18} />
        </button>
      </header>
      <p className="post-copy">{post.text}</p>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <footer>
        <button>
          <Heart size={16} /> Appreciate <small>18</small>
        </button>
        <button>
          <Bookmark size={16} /> Save
        </button>
        <button>
          <Send size={16} /> Reply
        </button>
      </footer>
    </article>
  );
}
