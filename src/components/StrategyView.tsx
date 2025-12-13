import { Book, Zap } from "./Icons";
import Header from "./Header";
import Button from "./Button";
import type { SupportedLanguage, LearningData } from "../data";

interface StrategyViewProps {
  state: {
    currentDay: number;
    theme: "light" | "dark";
    currentLanguage: SupportedLanguage;
    LEARNING_DATA: LearningData[];
  };
  actions: {
    startDrill: () => void;
    setView: (view: string) => void;
    toggleTheme: () => void;
    setCurrentLanguage: (lang: SupportedLanguage) => void;
    resetGame: () => void;
  };
}

export default function StrategyView({ state, actions }: StrategyViewProps) {
  const { currentDay, theme, currentLanguage, LEARNING_DATA } = state;
  const { toggleTheme, setView, setCurrentLanguage, resetGame, startDrill } =
    actions;

  const dayData = LEARNING_DATA[currentDay];

  return (
    <div
      className={`strategy-view ${
        theme === "light" ? "strategy-view-light" : ""
      }`}
    >
      <div className="strategy-view-container">
        <div className="strategy-header">
          {/* use common header */}
          <Header
            onBack={() => setView("dashboard")}
            center={"STRATEGY"}
            variant="dark"
            theme={theme}
            toggleTheme={toggleTheme}
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            resetGame={resetGame}
          />

          <p className="classified-text">Day {dayData.day}</p>
          <h1 className="strategy-title">{dayData.title}</h1>
        </div>
        <div className="tips-scroll-area">
          <div className="tip-card">
            <div className="tip-content-wrapper">
              <div className="tip-icon-box">
                <Book size={20} />
              </div>
              <div>
                <p className="tip-label">New Vocabulary</p>
                <p className="tip-text">
                  Learn {dayData.vocab.length} new words and phrases.
                </p>
              </div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-content-wrapper">
              <div className="tip-icon-box">
                <Zap size={20} />
              </div>
              <div>
                <p className="tip-label">Practice Scenarios</p>
                <p className="tip-text">
                  Apply your knowledge in {dayData.scenarios.length} real-life
                  situations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="strategy-footer">
          <Button
            onClick={startDrill}
            className="start-drill-btn"
            variant="primary"
          >
            <div className="btn-inner">
              <Zap size={20} className="pulse-icon" />
              Start Drill
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}