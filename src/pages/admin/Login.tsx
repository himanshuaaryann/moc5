import { useState, type FormEvent } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { Lock, User, ShieldCheck } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ok = login(username, password);
    if (ok) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-forest-950 px-5">
      <div className="w-full max-w-md rounded-[26px] bg-cream p-9 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 text-cream">
            <ShieldCheck className="h-7 w-7" />
          </span>
          <h1 className="font-serif-display mt-5 text-[30px] text-forest-900">
            Mann Organiculture Admin
          </h1>
          <p className="mt-2 text-[14px] text-forest-900/60">
            Sign in to manage product rates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-[13px] font-medium text-forest-900/70">
              Admin Name / Username
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-forest-900/15 bg-white px-4 py-3">
              <User className="h-4 w-4 text-forest-900/40" />
              <input
                required
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent text-forest-900 focus:outline-none"
                placeholder="admin"
              />
            </div>
          </div>
          <div>
            <label className="text-[13px] font-medium text-forest-900/70">Password</label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-forest-900/15 bg-white px-4 py-3">
              <Lock className="h-4 w-4 text-forest-900/40" />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-forest-900 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <p className="text-[13px] text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-full bg-forest-900 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
          >
            Login
          </button>
        </form>

        <Link
          to="/"
          state={{ pageTransition: true }}
          className="mt-6 block text-center text-[13px] text-forest-900/50 hover:text-forest-900"
        >
          ← Back to Website
        </Link>
      </div>
    </div>
  );
}
