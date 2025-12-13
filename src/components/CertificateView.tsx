import { Award } from "./Icons";
import Header from "./Header";
import type { SupportedLanguage } from "../data";

interface CertificateViewProps {
  state: {
    userName: string;
    theme: "light" | "dark";
    currentLanguage: SupportedLanguage;
  };
  actions: {
    setUserName: (name: string) => void;
    setView: (view: string) => void;
    toggleTheme: () => void;
    setCurrentLanguage: (lang: SupportedLanguage) => void;
    resetGame: () => void;
  };
}

export default function CertificateView({ state, actions }: CertificateViewProps) {
  const { userName, theme, currentLanguage } = state;
  const { setUserName, setView, toggleTheme, setCurrentLanguage, resetGame } = actions;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-start justify-start p-4">
      <Header
        onBack={() => setView("dashboard")}
        variant="dark"
        theme={theme}
        toggleTheme={toggleTheme}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        resetGame={resetGame}
      />
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="bg-white text-slate-900 p-8 rounded-lg shadow-2xl max-w-lg w-full relative border-[20px] border-double border-indigo-100 text-center">
          <div className="border-2 border-slate-900 p-6 h-full flex flex-col items-center">
            <Award size={64} className="text-indigo-600 mb-4" />
            <h1 className="text-4xl font-black font-serif mb-2 uppercase tracking-widest text-slate-800">
              Certificate
            </h1>
            <h2 className="text-xl font-serif italic text-slate-500 mb-8">
              of Fluency
            </h2>

            <p className="text-slate-600 mb-4 font-medium">
              This certifies that
            </p>
            <div className="mb-8 w-full">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="text-3xl font-script text-center w-full border-b-2 border-slate-300 focus:border-indigo-600 focus:outline-none pb-2 font-bold text-indigo-900 bg-transparent"
              />
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Has successfully completed the{" "}
              <strong>KannadaBlitz 30-Day Intensive Challenge</strong> and has
              demonstrated exceptional survival skills in Bangalore.
            </p>

            <div className="flex justify-between w-full mt-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="font-script text-xl text-indigo-700 mb-2">
                  KannadaBlitz AI
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Instructor
                </div>
              </div>
              <div className="text-center">
                <div className="font-script text-xl text-indigo-700 mb-2">
                  {new Date().toLocaleDateString()}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Date
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

