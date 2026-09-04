import { ImagePlus, Link as LinkIcon, Send, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Textarea } from "../components/ui/textarea.jsx";

export function AddPostPage({ onComposerOpen }) {
  return (
    <section className="add-post-page">
      <button className="back-link" onClick={() => window.history.back()}>
        ← Back to feed
      </button>
      <div className="post-editor">
        <div className="avatar avatar-profile">MI</div>
        <div className="editor-field">
          <Textarea autoFocus placeholder="What is worth sharing?" rows={6} />
          <div className="editor-tools">
            <div>
              <button className="icon-button" title="Add image">
                <ImagePlus size={17} />
              </button>
              <button className="icon-button" title="Add sparkle">
                <Sparkles size={17} />
              </button>
              <button className="icon-button" title="Add link">
                <LinkIcon size={17} />
              </button>
            </div>
            <Button onClick={onComposerOpen}>
              Publish <Send size={15} />
            </Button>
          </div>
        </div>
      </div>
      <p className="editor-note">
        A thoughtful note travels further than a perfect one.
      </p>
    </section>
  );
}
