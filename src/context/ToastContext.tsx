import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from "react";

interface ToastContextType {
  showToast: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMsg && (
        <div className="custom-toast">
            {toastMsg}
        </div>
      )}
    </ToastContext.Provider>
  );
};
