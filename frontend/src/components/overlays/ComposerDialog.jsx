import { ImagePlus, Link as LinkIcon, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button.jsx";
import { Dialog } from "../ui/dialog.jsx";
import { Textarea } from "../ui/textarea.jsx";

export function ComposerDialog({ open, onOpenChange }) {
  const [value, setValue] = useState("");
  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="Share a note">
      <div className="quick-compose">
        <div className="avatar avatar-profile">MI</div>
        <Textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="What is worth sharing?"
          rows={5}
        />
      </div>
      <div className="dialog-actions">
        <div>
          <button className="icon-button" title="Add image">
            <ImagePlus size={17} />
          </button>
          <button className="icon-button" title="Add link">
            <LinkIcon size={17} />
          </button>
        </div>
        <Button
          onClick={() => {
            setValue("");
            onOpenChange(false);
          }}
        >
          Publish <Send size={15} />
        </Button>
      </div>
    </Dialog>
  );
}
