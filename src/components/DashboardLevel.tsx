import type { LearningData } from "../data";

import { CheckCircle, Lock, Trophy } from "./Icons";

type DashboardLevelProps = {
  day: LearningData;
  isLocked: boolean;
  isCompleted: boolean;
  globalIndex: number;
  startDay: (dayIndex: number) => void;
};
const DashboardLevel = ({
  day,
  isLocked,
  isCompleted,
  globalIndex,
  startDay,
}: DashboardLevelProps) => {
  return (
    <button
      onClick={() => !isLocked && startDay(globalIndex)}
      className={`level-btn ${isLocked ? "locked" : ""} ${
        isCompleted ? "completed" : ""
      }`}
      disabled={isLocked}
    >
      <div className="level-btn-content-parent">
        <div className="level-btn-content">
          <div
            className={`level-icon ${
              isCompleted ? "icon-completed" : "icon-active"
            }`}
          >
            {isLocked ? <Lock size={18} /> : day.day}
          </div>
          <div className="level-info">
            <h4 
              className={`day-title ${isCompleted ? "day-meta-completed" : ""}`}>
                {day.title}
            </h4>
            <p
              className={`day-meta ${isCompleted ? "day-meta-completed" : ""}`}
            >
              {day.vocab.length} Words • {day.scenarios.length} Scenarios
            </p>
          </div>
          {isCompleted && <CheckCircle className="check-icon" />}
          {day.badgeReward && !isCompleted && !isLocked && (
            <Trophy size={20} className="reward-icon" />
          )}
        </div>
        {/* {!isCompleted && !isLocked && (
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        )} */}
      </div>
    </button>
  );
};

export default DashboardLevel;
