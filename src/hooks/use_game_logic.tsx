import { useState, useEffect, useCallback } from "react";
import {
  LEARNING_DATA as LEARNING_DATA_ENGLISH,
  LEARNING_DATA_HINDI,
  supportedLanguages,
  type SupportedLanguage,
} from "../data";
import confetti from "canvas-confetti";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

interface Feedback {
  type: "success" | "error";
  msg: string;
  newWords?: { word: string; meaning: string }[];
}

const useGameLogic = () => {
  const { effectiveUid } = useAuth();

  function getPersistedData<T>(key: string, defaultVal: T): T {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultVal;
      try {
        return JSON.parse(item);
      } catch {
        return item as unknown as T;
      }
    } catch (e) {
      console.warn("Storage access failed", e);
      return defaultVal;
    }
  }

  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    () => getPersistedData("kannadaLanguage", "english")
  );

  const LEARNING_DATA =
    currentLanguage === "english" ? LEARNING_DATA_ENGLISH : LEARNING_DATA_HINDI;

  const [currentDay, setCurrentDay] = useState(0);
  const [view, setView] = useState("dashboard");
  const [hearts, setHearts] = useState(3);
  const [streak, setStreak] = useState(() =>
    getPersistedData("kannadaStreak", 0)
  );
  const [completedDays, setCompletedDays] = useState<number[]>(() =>
    getPersistedData("kannadaCompleted", [])
  );
  const [earnedBadges, setEarnedBadges] = useState<string[]>(() =>
    getPersistedData("kannadaBadges", [])
  );
  const [challengeDuration, setChallengeDuration] = useState(() =>
    getPersistedData("kannadaDuration", 7)
  );
  const [userName, setUserName] = useState("Friend");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const persisted = getPersistedData<string | null>("kannadaTheme", null);
    if (persisted === "light" || persisted === "dark") return persisted as "light" | "dark";
    
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  // Sync from Firestore on Login
  useEffect(() => {
    if (!effectiveUid) return;

    const unsub = onSnapshot(doc(db, "users", effectiveUid), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        
        if (data.userName) setUserName(data.userName);
        
        setStreak((prev) => Math.max(prev, data.streak || 0));
        setCompletedDays((prev) => {
            const merged = new Set([...prev, ...(data.completedDays || [])]);
            return Array.from(merged);
        });
        setEarnedBadges((prev) => {
             const merged = new Set([...prev, ...(data.earnedBadges || [])]);
             return Array.from(merged);
        });
        setChallengeDuration((prev) => Math.max(prev, data.challengeDuration || 7));
      }
    });

    return () => unsub();
  }, [effectiveUid]);

  // Sync to Firestore on Change
  useEffect(() => {
    if (!effectiveUid) return;

    const saveData = async () => {
      try {
        const userRef = doc(db, "users", effectiveUid);
        await setDoc(userRef, {
          streak,
          completedDays,
          earnedBadges,
          challengeDuration,
          userName, // Sync userName if set
          lastUpdated: Date.now()
        }, { merge: true });
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    };

    const timeoutId = setTimeout(saveData, 1000); // Debounce
    return () => clearTimeout(timeoutId);
  }, [effectiveUid, streak, completedDays, earnedBadges, challengeDuration, userName]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("kannadaTheme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);

  const completeDay = useCallback(() => {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    setView("result");

    if (!completedDays.includes(currentDay)) {
      const newCompleted = [...completedDays, currentDay];
      setCompletedDays(newCompleted);
      localStorage.setItem("kannadaCompleted", JSON.stringify(newCompleted));

      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("kannadaStreak", JSON.stringify(newStreak));

      const badgeName = LEARNING_DATA[currentDay].badgeReward;
      if (badgeName && !earnedBadges.includes(badgeName)) {
        const newBadges = [...earnedBadges, badgeName];
        setEarnedBadges(newBadges);
        localStorage.setItem("kannadaBadges", JSON.stringify(newBadges));
      }
    }
  }, [completedDays, currentDay, streak, earnedBadges, LEARNING_DATA]);

  const nextScenario = useCallback(
    (wasCorrect: boolean) => {
      setFeedback(null);
      if (hearts <= 1 && !wasCorrect) {
        setView("failure");
        return;
      }

      if (scenarioIndex < LEARNING_DATA[currentDay].scenarios.length - 1) {
        setScenarioIndex((prev) => prev + 1);
        setTimeLeft(10);
        setTimerActive(true);
      } else {
        completeDay();
      }
    },
    [hearts, scenarioIndex, currentDay, completeDay, LEARNING_DATA]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timeLeft > 0 && !feedback) {
      interval = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && !feedback) {
      // Directly apply the logic for timeout handling asynchronously
      setTimeout(() => {
        setFeedback({
          type: "error",
          msg: "Time's Up! In real life, they drove away.",
        });
        setHearts((prev) => prev - 1);
        setTimerActive(false);
        nextScenario(false);
      }, 0);
    }
    return () => clearInterval(interval || undefined);
  }, [
    timerActive,
    timeLeft,
    feedback,
    setHearts,
    setFeedback,
    setTimerActive,
    nextScenario,
  ]);

  const startDay = (dayIndex: number) => {
    setCurrentDay(dayIndex);
    setView("strategy");
  };

  const startDrill = () => {
    setView("flashcards");
    setCardIndex(0);
    setScenarioIndex(0);
    setHearts(3);
    setFeedback(null);
    setIsFlipped(false);
  };

  const startScenarios = () => {
    setView("scenarios");
    setFeedback(null); // Reset feedback when starting scenarios
    setTimeLeft(10);
    setTimerActive(true);
  };

  const handleAnswer = (option: { correct: boolean; explanation?: string; newWords?: { word: string; meaning: string }[] }) => {
    setTimerActive(false);
    if (option.correct) {
      setFeedback({ type: "success", msg: option.explanation || "", newWords: option.newWords });
      setTimeout(() => nextScenario(true), 4000);
    } else {
      setFeedback({ type: "error", msg: "Tappu! (Wrong)", newWords: option.newWords });
      setHearts((prev) => prev - 1);
      setTimeout(() => nextScenario(false), 4000);
    }
  };

  const extendChallenge = () => {
    setChallengeDuration(30);
    localStorage.setItem("kannadaDuration", "30");
    setView("dashboard");
    confetti({ particleCount: 100, spread: 100, origin: { y: 0.9 } });
  };

  const retryLevel = () => {
    setHearts(3);
    setScenarioIndex(0);
    setFeedback(null);
    setTimeLeft(10);
    setTimerActive(true);
    setView("scenarios");
  };

  const changeLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    localStorage.setItem("kannadaLanguage", lang);
  };

  const resetGame = useCallback(() => {
    localStorage.removeItem("kannadaStreak");
    localStorage.removeItem("kannadaCompleted");
    localStorage.removeItem("kannadaBadges");
    localStorage.removeItem("kannadaDuration");
    window.location.reload();
  }, []);

  return {
    state: {
      currentDay,
      view,
      hearts,
      streak,
      completedDays,
      earnedBadges,
      challengeDuration,
      cardIndex,
      isFlipped,
      scenarioIndex,
      feedback,
      timeLeft,
      userName,
      theme,
      currentLanguage,
      LEARNING_DATA,
      supportedLanguages,
    },
    actions: {
      setView,
      startDay,
      startDrill,
      startScenarios,
      handleAnswer,
      setIsFlipped,
      setCardIndex,
      setUserName,
      extendChallenge,
      toggleTheme,
      setCurrentLanguage: changeLanguage,
      resetGame,
      retryLevel,
    },
  };
};

export default useGameLogic;