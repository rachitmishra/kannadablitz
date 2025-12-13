import { ChevronRight } from "./Icons";
import Header from "./Header";
import Button from "./Button";
import type { SupportedLanguage, LearningData } from "../data";

interface FlashcardsProps {
  state: {
    currentDay: number;
    cardIndex: number;
    isFlipped: boolean;
    theme: "light" | "dark";
    currentLanguage: SupportedLanguage;
    LEARNING_DATA: LearningData[];
  };
  actions: {
    setIsFlipped: (isFlipped: boolean) => void;
    setCardIndex: (updater: (prev: number) => number) => void;
    startScenarios: () => void;
    setView: (view: string) => void;
    toggleTheme: () => void;
    setCurrentLanguage: (lang: SupportedLanguage) => void;
    resetGame: () => void;
  };
}

export default function Flashcards({ state, actions }: FlashcardsProps) {
  const {
    isFlipped,
    cardIndex,
    theme,
    currentLanguage,
    LEARNING_DATA,
    currentDay,
  } = state;
  const {
    setIsFlipped,
    setCardIndex,
    startScenarios,
    setView,
    toggleTheme,
    setCurrentLanguage,
    resetGame,
  } = actions;

  const card = LEARNING_DATA[currentDay].vocab[cardIndex];

  return (
    <div className="flashcards-view">
      <Header
        onBack={() => setView("dashboard")}
        center={"MEMORIZE"}
        right={
          <span className="fc-counter">
            {cardIndex + 1}/{LEARNING_DATA[currentDay].vocab.length}
          </span>
        }
        variant="light"
        theme={theme}
        toggleTheme={toggleTheme}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        resetGame={resetGame}
      />

      <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`card-3d-wrapper ${isFlipped ? "flipped" : ""}`}>
          <div className="card-face card-front">
            <span className="card-label">Kannada</span>
            <h2 className="card-main-text">{card.kannada}</h2>
            <p className="card-sub-text">{card.phonetic}</p>
          </div>
          <div className="card-face card-back">
            <span className="card-label label-accent">Meaning</span>
            <h2 className="card-main-text">{card.english}</h2>
          </div>
        </div>
        <p className="tap-hint">Tap card to flip</p>
      </div>

      <div className="fc-footer">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (cardIndex < LEARNING_DATA[currentDay].vocab.length - 1) {
              setCardIndex((prev: number) => prev + 1);
              setIsFlipped(false);
            } else {
              startScenarios();
            }
          }}
          className="next-btn"
          variant="primary"
          fullWidth
        >
          <div className="btn-inner">
            <span>
              {cardIndex === LEARNING_DATA[currentDay].vocab.length - 1
                ? "Start Quiz"
                : "Next Word"}
            </span>
            <ChevronRight />
          </div>
        </Button>
      </div>
    </div>
  );
}