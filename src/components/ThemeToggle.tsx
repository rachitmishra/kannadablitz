import { Sun, Moon } from "./Icons";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button onClick={toggleTheme} className="btn btn--icon" type="button">
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
