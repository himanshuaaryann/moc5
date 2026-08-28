import { createContext, useContext, useState, type ReactNode } from "react";

/**
 * NOTE ON SECURITY
 * This is a static front-end only website with no server component.
 * True secure authentication requires a backend (API + database + hashed
 * credentials). For this static deployment, a lightweight client-side gate
 * is used so the Admin Panel is not casually reachable, and the session
 * token is kept only in sessionStorage (cleared on logout / tab close).
 * When a backend becomes available, replace `verifyCredentials` with a
 * real API call and never ship credentials in the bundle.
 */

const SESSION_KEY = "mann_org_admin_session";

// Obfuscated (not visible as plain literals) — still client-side, so for a
// production system these should live behind a real authentication API.
const ADMIN_USER = atob("YWRtaW4="); // admin
const ADMIN_PASS = atob("TWFubkZhcm0jOTgxNA=="); // MannFarm#9814

function verifyCredentials(username: string, password: string) {
  return username.trim().toLowerCase() === ADMIN_USER && password === ADMIN_PASS;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => sessionStorage.getItem(SESSION_KEY) === "true"
  );

  const login = (username: string, password: string) => {
    const ok = verifyCredentials(username, password);
    if (ok) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
    }
    return ok;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
