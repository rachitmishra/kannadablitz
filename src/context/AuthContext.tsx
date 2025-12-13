import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { type User, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthContextType {
  user: User | null;
  effectiveUid: string | null;
  loading: boolean;
  setRecoveredUid: (uid: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({ user: null, effectiveUid: null, loading: true, setRecoveredUid: () => {} });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [recoveredUid, setRecoveredUidState] = useState<string | null>(() => {
    try {
        return localStorage.getItem("recovered_uid");
    } catch {
        return null;
    }
  });

  const setRecoveredUid = (uid: string | null) => {
    setRecoveredUidState(uid);
    if (uid) {
        localStorage.setItem("recovered_uid", uid);
    } else {
        localStorage.removeItem("recovered_uid");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        // Auto-login anonymously if not logged in
        signInAnonymously(auth).catch((error) => {
          console.error("Anonymous auth failed", error);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const effectiveUid = recoveredUid || user?.uid || null;

  return (
    <AuthContext.Provider value={{ user, effectiveUid, loading, setRecoveredUid }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
