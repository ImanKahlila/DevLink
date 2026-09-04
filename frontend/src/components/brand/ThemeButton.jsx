import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../providers/ThemeProvider.jsx";

export function ThemeButton({ showLabel = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;
  const action = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      className={`theme-control ${showLabel ? "theme-control-wide" : ""}`}
      onClick={toggleTheme}
      title={action}
      aria-label={action}
    >
      <Icon size={16} />
      <span>{isDark ? "Light theme" : "Dark theme"}</span>
    </button>
  );
}
