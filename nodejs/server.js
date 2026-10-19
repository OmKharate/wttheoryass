const express = require("express");
const path = require("node:path");

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const email = String(req.body.email || "").trim();
  const password = String(req.body.password || "");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  res.set("Content-Type", "text/html; charset=utf-8");
  if (!validEmail || !password) {
    return res.status(400).send(resultPage("Check your details", "Enter a valid email address and password.", "error"));
  }
  // Educational demo only; integrate Supabase Auth before treating this as a login.
  return res.send(resultPage("Form received", "Input validated. Authentication is not connected yet.", "success"));
});

function resultPage(title, message, type) {
  const safeTitle = escapeHtml(title);
  const safeMessage = escapeHtml(message);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${safeTitle}</title><link rel="stylesheet" href="/style.css"></head><body><main class="shell"><section class="card"><p class="eyebrow">WEB TECHNOLOGY LAB · NODE.JS</p><h1>${safeTitle}</h1><p class="notice ${type}" role="status">${safeMessage}</p><a class="back" href="/">Return to sign in</a></section></main></body></html>`;
}
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

app.listen(port, () => console.log(`Login demo running at http://localhost:${port}`));
