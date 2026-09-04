import { cn } from "../../lib/utils.js";
export function Input({ className, ...props }) {
  return <input className={cn("input", className)} {...props} />;
}
