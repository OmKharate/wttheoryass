import { useState } from "react";
import { supabase } from "./lib/supabase.js";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setNotice("");
    if (!supabase) {
      setNotice("Add your Supabase URL and publishable/anon key to .env.local, then restart Vite.");
      setNoticeType("error");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) {
      setNotice(error.message);
      setNoticeType("error");
      return;
    }
    setNotice("Signed in successfully.");
    setNoticeType("success");
  }

  return (
    <main className="shell">
      <section className="card" aria-labelledby="title">
        <p className="eyebrow">WEB TECHNOLOGY LAB · REACT</p>
        <h1 id="title">Welcome back</h1>
        <p className="sub">Sign in to continue to your workspace.</p>
        {notice && <p className={`notice ${noticeType}`} role="status">{notice}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" autoComplete="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"} <span aria-hidden="true">→</span></button>
        </form>
        <p className="foot">Powered by Supabase Auth</p>
      </section>
    </main>
  );
}
