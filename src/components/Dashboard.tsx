import { Award, Calendar, ChevronDown, Trophy, Zap } from "./Icons";
import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import type { SupportedLanguage, LearningData } from "../data";
import DashboardLevel from "./DashboardLevel";
import SocialPanel from "./SocialPanel";

interface DashboardProps {
  state: {
    streak: number;
    earnedBadges: string[];
    completedDays: number[];
    challengeDuration: number;
    theme: "light" | "dark";
    currentLanguage: SupportedLanguage;
    LEARNING_DATA: LearningData[];
    supportedLanguages: {
      id: SupportedLanguage;
      name: string;
      data_file: string;
    }[];
  };
  actions: {
    startDay: (dayIndex: number) => void;
    setView: (view: string) => void;
    extendChallenge: () => void;
    toggleTheme: () => void;
    setCurrentLanguage: (lang: SupportedLanguage) => void;
    resetGame: () => void;
  };
}

export default function Dashboard({ state, actions }: DashboardProps) {
  const {
    streak,
    earnedBadges,
    completedDays,
    challengeDuration,
    theme,
    currentLanguage,
    LEARNING_DATA,
  } = state;
  const {
    startDay,
    setView,
    extendChallenge,
    toggleTheme,
    setCurrentLanguage,
    resetGame,
  } = actions;

  // Dynamic Week Rendering
  const renderWeek = (weekNum: number, title: string) => {
    const weekData = LEARNING_DATA.filter((d) => d.week === weekNum);

    // Check if previous weeks are completed
    const previousWeekDays = LEARNING_DATA.filter(
      (d) => d.week < weekNum
    ).length;
    const isWeekLocked =
      challengeDuration === 7 && weekNum > 1
        ? true
        : weekNum > 1 && completedDays.length < previousWeekDays;

    // Check if this week is fully completed
    const daysInWeek = weekData.map((d) =>
      LEARNING_DATA.findIndex((global) => global.day === d.day)
    );
    const isWeekComplete = daysInWeek.every((idx) =>
      completedDays.includes(idx)
    );

    if (challengeDuration === 7 && weekNum > 1) return null;

    return (
      <div
        key={weekNum}
        className={`week-container ${isWeekLocked ? "locked" : ""} ${
          isWeekComplete && !isWeekLocked ? "has-weekly-medal" : ""
        }`}
      >
        <div className="week-header">
          <h3 className="level-heading">{title}</h3>
          {isWeekComplete && !isWeekLocked && (
            <span className="weekly-medal-badge">
              Week {weekNum} Medal{" "}
              <Award size={12} className="medal-icon-small" />
            </span>
          )}
        </div>
        <div className="level-list">
          {weekData.map((day) => {
            const globalIndex = LEARNING_DATA.findIndex(
              (d) => d.day === day.day
            );
            const isLocked =
              isWeekLocked ||
              (globalIndex > 0 && !completedDays.includes(globalIndex - 1));
            const isCompleted = completedDays.includes(globalIndex);

            return (
              <DashboardLevel
                key={day.day}
                day={day}
                isLocked={isLocked}
                isCompleted={isCompleted}
                globalIndex={globalIndex}
                startDay={startDay}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const [badgesOpen, setBadgesOpen] = useState(true);

  return (
    <div className="dashboard-container">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        resetGame={resetGame}
        showLanguageSelector={true}
      />
      <div className="header-card">
        <div className="header-blob"></div>
        <h1 className="header-title">
          Kannada<span className="text-accent-yellow">Blitz</span>
        </h1>
        <p className="header-subtitle">{challengeDuration} Day Challenge</p>

        <div className="stats-row">
          <div className="stat-box">
            <div className="stat-content text-accent-yellow">
              <Zap size={20} fill="currentColor" />
              <span className="stat-num">{streak}</span>
            </div>
            <p className="stat-label">Day Streak</p>
          </div>
          <div className="stat-box">
            <div className="stat-content text-accent-pink">
              <Award size={20} />
              <span className="stat-num">{earnedBadges.length}</span>
            </div>
            <p className="stat-label">Badges</p>
          </div>
        </div>
      </div>

      <SocialPanel />

      {earnedBadges.length > 0 && (
        <div className="badges-panel mt-6">
          <div className="badges-header">
            <div className="badges-title">
              <Trophy size={16} />
              <span>Earned Badges</span>
              <span className="badge-count">{earnedBadges.length}</span>
            </div>
            <button
              className={`badge-toggle ${badgesOpen ? "open" : "closed"}`}
              onClick={() => setBadgesOpen((v) => !v)}
              aria-expanded={badgesOpen}
              aria-label={badgesOpen ? "Collapse badges" : "Expand badges"}
            >
              <ChevronDown size={18} />
            </button>
          </div>

          <div className={`badges-ribbon ${badgesOpen ? "" : "closed"}`}>
            {earnedBadges.map((badge, i) => (
              <div key={i} className="badge-pill">
                <Trophy size={14} className="badge-icon" /> {badge}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="levels-container">
        {renderWeek(1, "Week 1: Survival")}
        {renderWeek(2, "Week 2: Settling In")}
        {renderWeek(3, "Week 3: Essentials")}
        {renderWeek(4, "Week 4: Advanced & Culture")}

        {challengeDuration === 30 && renderWeek(5, "Final Stretch: Mastery")}

        {challengeDuration === 7 && (
          <div className="extension-card">
            <div className="extension-content">
              <h3 className="extension-title">Want More?</h3>
              <p className="extension-description">
                Unlock the full 30-Day Masterclass with Weeks 2, 3, and 4.
              </p>
              <Button
                onClick={extendChallenge}
                className="extension-btn"
                variant="primary"
              >
                <Calendar size={18} /> Unlock 30 Days
              </Button>
            </div>
          </div>
        )}

        {completedDays.includes(29) && (
          <div className="certificate-banner">
            <p className="certificate-pre-title">Challenge Complete!</p>
            <Button
              onClick={() => setView("certificate")}
              variant="primary"
              fullWidth
            >
              <Award size={18} /> Claim Certificate
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
