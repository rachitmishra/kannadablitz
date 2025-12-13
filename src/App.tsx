import Dashboard from "./components/Dashboard";
import StrategyView from "./components/StrategyView";
import Flashcards from "./components/Flashcards";
import Scenarios from "./components/Scenarios";
import Result from "./components/Result";
import CertificateView from "./components/CertificateView";
import Failure from "./components/Failure";

import useGameLogic from "./hooks/use_game_logic";
import { useEffect } from "react";
import { useSocial } from "./hooks/useSocial";
import { useAuth } from "./context/AuthContext";
import { useToast } from "./context/ToastContext";

export default function App() {
  const { state, actions } = useGameLogic();
  const { view } = state;
  const { addFriend } = useSocial();
  const { user } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    if (!user) return;
    
    const params = new URLSearchParams(window.location.search);
    const inviteId = params.get("invite");
    if (inviteId) {
      addFriend(inviteId).then((success) => {
        if (success) {
          showToast("Friend added to your community!");
        }
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
      });
    }
  }, [addFriend, user, showToast]);

  return (
    <div className="app-root">
      {view === "dashboard" && <Dashboard state={state} actions={actions} />}
      {view === "strategy" && <StrategyView state={state} actions={actions} />}
      {view === "flashcards" && <Flashcards state={state} actions={actions} />}
      {view === "scenarios" && (
        <Scenarios
          key={`${state.currentDay}-${state.scenarioIndex}`} // Add key prop here
          state={state}
          actions={{
            handleAnswer: actions.handleAnswer,
            startDrill: actions.startDrill,
            setView: actions.setView,
            toggleTheme: actions.toggleTheme,
            setCurrentLanguage: actions.setCurrentLanguage,
            resetGame: actions.resetGame,
          }}
        />
      )}
      {view === "result" && <Result state={state} actions={actions} />}
      {view === "failure" && <Failure actions={actions} />}
      {view === "certificate" && (
        <CertificateView state={state} actions={actions} />
      )}

      <footer className="app-footer">
        <div className="footer-inner">
          <span className="footer-logo">HYPVZN</span>
          <span className="footer-copy">Learn Kannada • Built with ❤️</span>
        </div>
      </footer>
    </div>
  );
}
