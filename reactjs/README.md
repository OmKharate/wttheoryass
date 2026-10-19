# React Login Demo (Vite)

Requires Node.js 20+. Run `npm install`, copy `.env.example` to `.env.local`, add your Supabase project URL and **publishable/anon** key, then run `npm run dev`.

The login form calls Supabase Auth `signInWithPassword`. Only use the browser-safe publishable/anon key here and configure Row Level Security for your database. Never put a service-role key in a Vite variable: Vite variables are bundled into client code.
