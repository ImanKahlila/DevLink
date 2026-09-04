import { cn } from "../../lib/utils.js";
export function Textarea({ className, ...props }) {
  return <textarea className={cn("textarea", className)} {...props} />;
}
