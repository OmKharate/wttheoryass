# Angular Login Demo

This folder uses **modern Angular** (standalone components), not the legacy AngularJS 1.x framework. Requires Node.js 20+.

1. Set `supabaseUrl` and `supabaseAnonKey` in `src/environments/environment.ts`.
2. Install dependencies with `npm install`.
3. Start with `npm start` and open the local URL shown by Angular CLI.

The page calls Supabase Auth `signInWithPassword`. The publishable/anon key is intended for client use; never put a service-role key in this app. Configure RLS for database access.
