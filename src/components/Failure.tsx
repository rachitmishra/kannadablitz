import { XCircle, RefreshCcw, Home } from "./Icons";
import Button from "./Button";

interface FailureProps {
  actions: {
    retryLevel: () => void;
    setView: (view: string) => void;
  };
}

export default function Failure({ actions }: FailureProps) {
  const { retryLevel, setView } = actions;

  return (
    <div className="failed-view">
      <XCircle size={64} className="fail-icon" />
      <h2 className="fail-title">Mission Failed</h2>
      <p className="fail-desc">
        You've run out of hearts. Don't worry, failure is part of the learning process!
      </p>

      <div className="result-actions">
        <Button
          onClick={retryLevel}
          variant="danger"
          fullWidth
          className="retry-btn"
        >
          <RefreshCcw size={20} /> Try Again
        </Button>
        <Button
          onClick={() => setView("dashboard")}
          variant="surface"
          fullWidth
          className="home-btn"
        >
          <Home size={20} /> Back to Base
        </Button>
      </div>
    </div>
  );
}
