import { Home } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import { type SupportedLanguage } from "../data";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  onBack?: () => void;
  center?: React.ReactNode;
  right?: React.ReactNode;
  variant?: "light" | "dark" | "auto";
  theme: "light" | "dark";
  toggleTheme: () => void;
  currentLanguage: SupportedLanguage;
  setCurrentLanguage: (lang: SupportedLanguage) => void;
  resetGame: () => void;
  showLanguageSelector?: boolean;
}

export default function Header({
  onBack,
  center,
  right,
  variant = "auto",
  theme,
  toggleTheme,
  currentLanguage,
  setCurrentLanguage,
  resetGame,
  showLanguageSelector = false,
}: HeaderProps) {
  return (
    <div className="fc-header" data-variant={variant}>
      <div className="fc-left">
        {onBack && (
          <Button
            variant="surface"
            onClick={() => onBack && onBack()}
            className="btn--icon"
            aria-label="Back"
          >
            <Home size={18} />
          </Button>
        )}
      </div>

      <span className="fc-title">{center}</span>

      <div className="fc-right">
        {showLanguageSelector && (
          <LanguageSelector
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            resetGame={resetGame}
          />
        )}
        {right}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
