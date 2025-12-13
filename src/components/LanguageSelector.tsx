import type { SupportedLanguage } from "../data";
import { supportedLanguages } from "../data";
import { Globe } from "./Icons";
import { useState } from "react";

type LanguageSelectorProps = {
  currentLanguage: SupportedLanguage;
  setCurrentLanguage: (lang: SupportedLanguage) => void;
  resetGame: () => void;
};
const LanguageSelector = ({
  currentLanguage,
  setCurrentLanguage,
  resetGame,
}: LanguageSelectorProps) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLang = event.target.value as SupportedLanguage;
    setCurrentLanguage(newLang);
    resetGame();
    setIsSelectorOpen(false);
  };

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  return (
    <div className="language-selector-wrapper">
      <button
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
        onMouseDown={(e) => e.preventDefault()}
        className="btn btn--icon"
        aria-label="Toggle language selector"
        type="button"
      >
        <Globe size={20} className="language-icon" />
      </button>
      {isSelectorOpen && (
        <select
          className="language-select"
          value={currentLanguage}
          onChange={handleLanguageChange}
          aria-label="Select language"
          onBlur={() => setIsSelectorOpen(false)}
          autoFocus
        >
          {supportedLanguages.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default LanguageSelector;
